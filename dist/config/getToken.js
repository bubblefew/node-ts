"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetToken", {
    enumerable: true,
    get: function() {
        return GetToken;
    }
});
const _executeSQL = require("../util/executeSQL");
class GetToken {
    pool;
    constructor(){
        this.pool = new _executeSQL.SQLExecutor();
    }
    async getToken() {
        try {
            const sql = `select yltaccresstoken as token 
      from OMNIWEB.dbo.YLT_TokenData 
      where yltbuss = 'LYTAT1'`;
            const result = await this.pool.execute(sql);
            return result[0].token;
        } catch (error) {
            throw new Error(`Error getting token: ${error}`);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZ2V0VG9rZW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1FMRXhlY3V0b3IgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTUUwnXG5cbmV4cG9ydCBjbGFzcyBHZXRUb2tlbiB7XG4gIHByaXZhdGUgcG9vbDogU1FMRXhlY3V0b3JcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBvb2wgPSBuZXcgU1FMRXhlY3V0b3IoKVxuICB9XG5cbiAgYXN5bmMgZ2V0VG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3FsOiBzdHJpbmcgPSBgc2VsZWN0IHlsdGFjY3Jlc3N0b2tlbiBhcyB0b2tlbiBcbiAgICAgIGZyb20gT01OSVdFQi5kYm8uWUxUX1Rva2VuRGF0YSBcbiAgICAgIHdoZXJlIHlsdGJ1c3MgPSAnTFlUQVQxJ2BcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucG9vbC5leGVjdXRlKHNxbClcbiAgICAgIHJldHVybiByZXN1bHRbMF0udG9rZW5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBnZXR0aW5nIHRva2VuOiAke2Vycm9yfWApXG4gICAgfVxuICB9XG5cbn0iXSwibmFtZXMiOlsiR2V0VG9rZW4iLCJwb29sIiwiY29uc3RydWN0b3IiLCJTUUxFeGVjdXRvciIsImdldFRva2VuIiwic3FsIiwicmVzdWx0IiwiZXhlY3V0ZSIsInRva2VuIiwiZXJyb3IiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFFYUE7OztlQUFBQTs7OzRCQUZlO0FBRXJCLE1BQU1BO0lBQ0hDLEtBQWlCO0lBRXpCQyxhQUFjO1FBQ1osSUFBSSxDQUFDRCxJQUFJLEdBQUcsSUFBSUUsdUJBQVc7SUFDN0I7SUFFQSxNQUFNQyxXQUE0QjtRQUNoQyxJQUFJO1lBQ0YsTUFBTUMsTUFBYyxDQUFDOzs4QkFFRyxDQUFDO1lBQ3pCLE1BQU1DLFNBQVMsTUFBTSxJQUFJLENBQUNMLElBQUksQ0FBQ00sT0FBTyxDQUFDRjtZQUN2QyxPQUFPQyxNQUFNLENBQUMsRUFBRSxDQUFDRSxLQUFLO1FBQ3hCLEVBQUUsT0FBT0MsT0FBTztZQUNkLE1BQU0sSUFBSUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFRCxNQUFNLENBQUM7UUFDakQ7SUFDRjtBQUVGIn0=