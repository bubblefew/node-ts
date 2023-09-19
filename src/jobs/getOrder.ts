// import axios from "axios";
import { SQLExecutor } from '../util/executeSQL'
  ; (async () => {
    const sqlExecutor = new SQLExecutor()
    try {
      const query = 'select * from xx'
      const results = await sqlExecutor.execute(query)
      console.log('Query results:', results)
    } catch (err) {
      console.log(err)
    }
  })()
