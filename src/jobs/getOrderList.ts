require('dotenv').config({ path: '../.env' })
import dayjs from 'dayjs'
import { SQLExecutor } from '../util/executeSQL'
import axios from 'axios'
import { Order } from '../models/Order'
import { GetToken } from '../settings/getToken'
const API_URL: string = process.env.API_LINK || ''
const branchCode: string = process.env.BRANCH_CODE || ''

  ; (async () => {
    const toDate = dayjs().format('YYYY-MM-DD')
    const fromDate = dayjs().add(-1, 'day').format('YYYY-MM-DD')

    try {
      const executeSQL: SQLExecutor = new SQLExecutor()
      const token: GetToken = new GetToken()
      const sql: string = `DELETE FROM xx.dbo.xx`
      await executeSQL.execute(sql)

      let totalPage = 1
      for (let page = 1; page <= totalPage; page++) {
        const response = await axios.get(API_URL, {
          params: {
            branchCode,
            dateFrom: fromDate,
            dateTo: toDate,
            page: page,
          },
          headers: {
            'x-api-key': await token.getToken(),
          },
        })
        const orders = response.data.resultList.filter((order: Order) => order.statusCode === 2)

        const sqlInsertOrderList: string = orders
          .map((order: Order) => {
            return `INSERT INTO xx ([orderId],[orderType],[orderTime])
                    VALUES ('${order.orderNumber}','22','${order.orderDateTime.slice(0, 19)}')`
          })
          .join(';')

        await executeSQL.execute(sqlInsertOrderList)
        totalPage = response.data.totalPage
        console.log(page + ' / ' + totalPage)
      }
    } catch (error) {
      console.log(error)
    }
  })()
