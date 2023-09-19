import { SQLExecutor } from '../util/executeSQL'

export class GetToken {
  private pool: SQLExecutor

  constructor() {
    this.pool = new SQLExecutor()
  }

  async getToken(): Promise<string> {
    try {
      const sql: string = `xxx`
      const result = await this.pool.execute(sql)
      return result[0].token
    } catch (error) {
      throw new Error(`Error getting token: ${error}`)
    }
  }
}
