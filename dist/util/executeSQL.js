"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SQLExecutor", {
    enumerable: true,
    get: function() {
        return SQLExecutor;
    }
});
const _mssql = require("mssql");
const _configDB = require("../config/configDB");
const config = {
    user: _configDB.env.DB_USER,
    password: _configDB.env.DB_USER,
    server: _configDB.env.DB_URL,
    database: _configDB.env.DB_NAME,
    options: {
        encrypt: false
    }
};
class SQLExecutor {
    pool;
    constructor(){
        this.pool = new _mssql.ConnectionPool(config);
    }
    async execute(query) {
        try {
            await this.pool.connect();
            const result = await this.pool.request().query(query);
            return result.recordset;
        } catch (err) {
            throw new Error(`SQL operation failed: ${err}`);
        } finally{
            try {
                await this.pool.close();
            } catch (err) {
                throw new Error(`Error disconnecting from SQL Server: ${err}`);
            }
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2V4ZWN1dGVTUUwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGlvblBvb2wsIGNvbmZpZyBhcyBtc3NxbENvbmZpZyB9IGZyb20gJ21zc3FsJ1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZ0RCJ1xuXG5jb25zdCBjb25maWc6IG1zc3FsQ29uZmlnID0ge1xuICB1c2VyOiBlbnYuREJfVVNFUixcbiAgcGFzc3dvcmQ6IGVudi5EQl9VU0VSLFxuICBzZXJ2ZXI6IGVudi5EQl9VUkwsXG4gIGRhdGFiYXNlOiBlbnYuREJfTkFNRSxcbiAgb3B0aW9uczoge1xuICAgIGVuY3J5cHQ6IGZhbHNlLFxuICB9LFxufVxuXG5leHBvcnQgY2xhc3MgU1FMRXhlY3V0b3Ige1xuICBwcml2YXRlIHBvb2w6IENvbm5lY3Rpb25Qb29sXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wb29sID0gbmV3IENvbm5lY3Rpb25Qb29sKGNvbmZpZylcbiAgfVxuXG4gIGFzeW5jIGV4ZWN1dGUocXVlcnk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMucG9vbC5jb25uZWN0KClcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucG9vbC5yZXF1ZXN0KCkucXVlcnkocXVlcnkpXG4gICAgICByZXR1cm4gcmVzdWx0LnJlY29yZHNldFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTUUwgb3BlcmF0aW9uIGZhaWxlZDogJHtlcnJ9YClcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5wb29sLmNsb3NlKClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGRpc2Nvbm5lY3RpbmcgZnJvbSBTUUwgU2VydmVyOiAke2Vycn1gKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNRTEV4ZWN1dG9yIiwiY29uZmlnIiwidXNlciIsImVudiIsIkRCX1VTRVIiLCJwYXNzd29yZCIsInNlcnZlciIsIkRCX1VSTCIsImRhdGFiYXNlIiwiREJfTkFNRSIsIm9wdGlvbnMiLCJlbmNyeXB0IiwicG9vbCIsImNvbnN0cnVjdG9yIiwiQ29ubmVjdGlvblBvb2wiLCJleGVjdXRlIiwicXVlcnkiLCJjb25uZWN0IiwicmVzdWx0IiwicmVxdWVzdCIsInJlY29yZHNldCIsImVyciIsIkVycm9yIiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7K0JBYWFBOzs7ZUFBQUE7Ozt1QkFieUM7MEJBQ2xDO0FBRXBCLE1BQU1DLFNBQXNCO0lBQzFCQyxNQUFNQyxhQUFHLENBQUNDLE9BQU87SUFDakJDLFVBQVVGLGFBQUcsQ0FBQ0MsT0FBTztJQUNyQkUsUUFBUUgsYUFBRyxDQUFDSSxNQUFNO0lBQ2xCQyxVQUFVTCxhQUFHLENBQUNNLE9BQU87SUFDckJDLFNBQVM7UUFDUEMsU0FBUztJQUNYO0FBQ0Y7QUFFTyxNQUFNWDtJQUNIWSxLQUFvQjtJQUU1QkMsYUFBYztRQUNaLElBQUksQ0FBQ0QsSUFBSSxHQUFHLElBQUlFLHFCQUFjLENBQUNiO0lBQ2pDO0lBRUEsTUFBTWMsUUFBUUMsS0FBYSxFQUFnQjtRQUN6QyxJQUFJO1lBQ0YsTUFBTSxJQUFJLENBQUNKLElBQUksQ0FBQ0ssT0FBTztZQUN2QixNQUFNQyxTQUFTLE1BQU0sSUFBSSxDQUFDTixJQUFJLENBQUNPLE9BQU8sR0FBR0gsS0FBSyxDQUFDQTtZQUMvQyxPQUFPRSxPQUFPRSxTQUFTO1FBQ3pCLEVBQUUsT0FBT0MsS0FBSztZQUNaLE1BQU0sSUFBSUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFRCxJQUFJLENBQUM7UUFDaEQsU0FBVTtZQUNSLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLENBQUNULElBQUksQ0FBQ1csS0FBSztZQUN2QixFQUFFLE9BQU9GLEtBQUs7Z0JBQ1osTUFBTSxJQUFJQyxNQUFNLENBQUMscUNBQXFDLEVBQUVELElBQUksQ0FBQztZQUMvRDtRQUNGO0lBQ0Y7QUFDRiJ9