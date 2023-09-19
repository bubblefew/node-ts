import { ConnectionPool, config as mssqlConfig } from 'mssql'
import { env } from '../settings/config'
const config: mssqlConfig = {
  user: env.DB_USER,
  password: env.DB_USER,
  server: env.DB_URL,
  database: env.DB_NAME,
  options: {
    encrypt: false,
  },
}

export class SQLExecutor {
  private pool: ConnectionPool

  constructor() {
    this.pool = new ConnectionPool(config)
  }

  async execute(query: string): Promise<any> {
    try {
      await this.pool.connect()
      const result = await this.pool.request().query(query)
      return result.recordset
    } catch (err) {
      throw new Error(`SQL operation failed: ${err}`)
    } finally {
      try {
        await this.pool.close()
      } catch (err) {
        throw new Error(`Error disconnecting from SQL Server: ${err}`)
      }
    }
  }
}
