"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _dayjs = /*#__PURE__*/ _interop_require_default(require("dayjs"));
const _executeSQL = require("../util/executeSQL");
const _axios = /*#__PURE__*/ _interop_require_default(require("axios"));
const _getToken = require("../config/getToken");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
require("dotenv").config({
    path: "../.env"
});
const API_URL = process.env.API_LINK || "";
const branchCode = process.env.BRANCH_CODE || "";
(async ()=>{
    const toDate = (0, _dayjs.default)().format("YYYY-MM-DD");
    const fromDate = (0, _dayjs.default)().add(-1, "day").format("YYYY-MM-DD");
    try {
        const executeSQL = new _executeSQL.SQLExecutor();
        const token = new _getToken.GetToken();
        const sql = `DELETE FROM YLTAT1.dbo.tblOrderList`;
        await executeSQL.execute(sql);
        let totalPage = 1;
        for(let page = 1; page <= totalPage; page++){
            const response = await _axios.default.get(API_URL, {
                params: {
                    branchCode,
                    dateFrom: fromDate,
                    dateTo: toDate,
                    page: page
                },
                headers: {
                    "x-api-key": await token.getToken()
                }
            });
            const orders = response.data.resultList.filter((order)=>order.statusCode === 2);
            const sqlInsertOrderList = orders.map((order)=>{
                return `INSERT INTO YLTAT1.dbo.tblOrderList ([orderId],[orderType],[orderTime])
                    VALUES ('${order.orderNumber}','22','${order.orderDateTime.slice(0, 19)}')`;
            }).join(";");
            await executeSQL.execute(sqlInsertOrderList);
            totalPage = response.data.totalPage;
            console.log(page + " / " + totalPage);
        }
    } catch (error) {
        console.log(error);
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qb2JzL2dldE9yZGVyTGlzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoeyBwYXRoOiAnLi4vLmVudicgfSlcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCB7IFNRTEV4ZWN1dG9yIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU1FMJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi9tb2RlbHMvT3JkZXInXG5pbXBvcnQgeyBHZXRUb2tlbiB9IGZyb20gJy4uL2NvbmZpZy9nZXRUb2tlbidcbmNvbnN0IEFQSV9VUkw6IHN0cmluZyA9IHByb2Nlc3MuZW52LkFQSV9MSU5LIHx8ICcnXG5jb25zdCBicmFuY2hDb2RlOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5CUkFOQ0hfQ09ERSB8fCAnJ1xuXG4gIDsgKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0b0RhdGUgPSBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgY29uc3QgZnJvbURhdGUgPSBkYXlqcygpLmFkZCgtMSwgJ2RheScpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhlY3V0ZVNRTDogU1FMRXhlY3V0b3IgPSBuZXcgU1FMRXhlY3V0b3IoKVxuICAgICAgY29uc3QgdG9rZW46IEdldFRva2VuID0gbmV3IEdldFRva2VuKClcbiAgICAgIGNvbnN0IHNxbDogc3RyaW5nID0gYERFTEVURSBGUk9NIFlMVEFUMS5kYm8udGJsT3JkZXJMaXN0YFxuICAgICAgYXdhaXQgZXhlY3V0ZVNRTC5leGVjdXRlKHNxbClcblxuICAgICAgbGV0IHRvdGFsUGFnZSA9IDFcbiAgICAgIGZvciAobGV0IHBhZ2UgPSAxOyBwYWdlIDw9IHRvdGFsUGFnZTsgcGFnZSsrKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KEFQSV9VUkwsIHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGJyYW5jaENvZGUsXG4gICAgICAgICAgICBkYXRlRnJvbTogZnJvbURhdGUsXG4gICAgICAgICAgICBkYXRlVG86IHRvRGF0ZSxcbiAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAneC1hcGkta2V5JzogYXdhaXQgdG9rZW4uZ2V0VG9rZW4oKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBvcmRlcnMgPSByZXNwb25zZS5kYXRhLnJlc3VsdExpc3QuZmlsdGVyKChvcmRlcjogT3JkZXIpID0+IG9yZGVyLnN0YXR1c0NvZGUgPT09IDIpXG5cbiAgICAgICAgY29uc3Qgc3FsSW5zZXJ0T3JkZXJMaXN0OiBzdHJpbmcgPSBvcmRlcnNcbiAgICAgICAgICAubWFwKChvcmRlcjogT3JkZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgSU5TRVJUIElOVE8gWUxUQVQxLmRiby50YmxPcmRlckxpc3QgKFtvcmRlcklkXSxbb3JkZXJUeXBlXSxbb3JkZXJUaW1lXSlcbiAgICAgICAgICAgICAgICAgICAgVkFMVUVTICgnJHtvcmRlci5vcmRlck51bWJlcn0nLCcyMicsJyR7b3JkZXIub3JkZXJEYXRlVGltZS5zbGljZSgwLCAxOSl9JylgXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuam9pbignOycpXG5cbiAgICAgICAgYXdhaXQgZXhlY3V0ZVNRTC5leGVjdXRlKHNxbEluc2VydE9yZGVyTGlzdClcbiAgICAgICAgdG90YWxQYWdlID0gcmVzcG9uc2UuZGF0YS50b3RhbFBhZ2VcbiAgICAgICAgY29uc29sZS5sb2cocGFnZSArICcgLyAnICsgdG90YWxQYWdlKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH0pKClcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwicGF0aCIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiQVBJX0xJTksiLCJicmFuY2hDb2RlIiwiQlJBTkNIX0NPREUiLCJ0b0RhdGUiLCJkYXlqcyIsImZvcm1hdCIsImZyb21EYXRlIiwiYWRkIiwiZXhlY3V0ZVNRTCIsIlNRTEV4ZWN1dG9yIiwidG9rZW4iLCJHZXRUb2tlbiIsInNxbCIsImV4ZWN1dGUiLCJ0b3RhbFBhZ2UiLCJwYWdlIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsInBhcmFtcyIsImRhdGVGcm9tIiwiZGF0ZVRvIiwiaGVhZGVycyIsImdldFRva2VuIiwib3JkZXJzIiwiZGF0YSIsInJlc3VsdExpc3QiLCJmaWx0ZXIiLCJvcmRlciIsInN0YXR1c0NvZGUiLCJzcWxJbnNlcnRPcmRlckxpc3QiLCJtYXAiLCJvcmRlck51bWJlciIsIm9yZGVyRGF0ZVRpbWUiLCJzbGljZSIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OERBQ2tCOzRCQUNVOzhEQUNWOzBCQUVPOzs7Ozs7QUFMekJBLFFBQVEsVUFBVUMsTUFBTSxDQUFDO0lBQUVDLE1BQU07QUFBVTtBQU0zQyxNQUFNQyxVQUFrQkMsUUFBUUMsR0FBRyxDQUFDQyxRQUFRLElBQUk7QUFDaEQsTUFBTUMsYUFBcUJILFFBQVFDLEdBQUcsQ0FBQ0csV0FBVyxJQUFJO0FBRWpELENBQUE7SUFDRCxNQUFNQyxTQUFTQyxJQUFBQSxjQUFLLElBQUdDLE1BQU0sQ0FBQztJQUM5QixNQUFNQyxXQUFXRixJQUFBQSxjQUFLLElBQUdHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBT0YsTUFBTSxDQUFDO0lBRS9DLElBQUk7UUFDRixNQUFNRyxhQUEwQixJQUFJQyx1QkFBVztRQUMvQyxNQUFNQyxRQUFrQixJQUFJQyxrQkFBUTtRQUNwQyxNQUFNQyxNQUFjLENBQUMsbUNBQW1DLENBQUM7UUFDekQsTUFBTUosV0FBV0ssT0FBTyxDQUFDRDtRQUV6QixJQUFJRSxZQUFZO1FBQ2hCLElBQUssSUFBSUMsT0FBTyxHQUFHQSxRQUFRRCxXQUFXQyxPQUFRO1lBQzVDLE1BQU1DLFdBQVcsTUFBTUMsY0FBSyxDQUFDQyxHQUFHLENBQUNyQixTQUFTO2dCQUN4Q3NCLFFBQVE7b0JBQ05sQjtvQkFDQW1CLFVBQVVkO29CQUNWZSxRQUFRbEI7b0JBQ1JZLE1BQU1BO2dCQUNSO2dCQUNBTyxTQUFTO29CQUNQLGFBQWEsTUFBTVosTUFBTWEsUUFBUTtnQkFDbkM7WUFDRjtZQUNBLE1BQU1DLFNBQVNSLFNBQVNTLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsUUFBaUJBLE1BQU1DLFVBQVUsS0FBSztZQUV0RixNQUFNQyxxQkFBNkJOLE9BQ2hDTyxHQUFHLENBQUMsQ0FBQ0g7Z0JBQ0osT0FBTyxDQUFDOzZCQUNTLEVBQUVBLE1BQU1JLFdBQVcsQ0FBQyxRQUFRLEVBQUVKLE1BQU1LLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7WUFDckYsR0FDQ0MsSUFBSSxDQUFDO1lBRVIsTUFBTTNCLFdBQVdLLE9BQU8sQ0FBQ2lCO1lBQ3pCaEIsWUFBWUUsU0FBU1MsSUFBSSxDQUFDWCxTQUFTO1lBQ25Dc0IsUUFBUUMsR0FBRyxDQUFDdEIsT0FBTyxRQUFRRDtRQUM3QjtJQUNGLEVBQUUsT0FBT3dCLE9BQU87UUFDZEYsUUFBUUMsR0FBRyxDQUFDQztJQUNkO0FBQ0YsQ0FBQSJ9