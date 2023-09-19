// import axios from "axios";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _executeSQL = require("../util/executeSQL");
(async ()=>{
    const sqlExecutor = new _executeSQL.SQLExecutor();
    try {
        const query = "select * from YLTAT1.dbo.tblConfig";
        const results = await sqlExecutor.execute(query);
        console.log("Query results:", results);
    } catch (err) {
        console.log(err);
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qb2JzL2dldE9yZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFNRTEV4ZWN1dG9yIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU1FMJ1xuOyhhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHNxbEV4ZWN1dG9yID0gbmV3IFNRTEV4ZWN1dG9yKClcbiAgdHJ5IHtcbiAgICBjb25zdCBxdWVyeSA9ICdzZWxlY3QgKiBmcm9tIFlMVEFUMS5kYm8udGJsQ29uZmlnJ1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBzcWxFeGVjdXRvci5leGVjdXRlKHF1ZXJ5KVxuICAgIGNvbnNvbGUubG9nKCdRdWVyeSByZXN1bHRzOicsIHJlc3VsdHMpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycilcbiAgfVxufSkoKVxuIl0sIm5hbWVzIjpbInNxbEV4ZWN1dG9yIiwiU1FMRXhlY3V0b3IiLCJxdWVyeSIsInJlc3VsdHMiLCJleGVjdXRlIiwiY29uc29sZSIsImxvZyIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCOzs7Ozs0QkFDRDtBQUMxQixDQUFBO0lBQ0EsTUFBTUEsY0FBYyxJQUFJQyx1QkFBVztJQUNuQyxJQUFJO1FBQ0YsTUFBTUMsUUFBUTtRQUNkLE1BQU1DLFVBQVUsTUFBTUgsWUFBWUksT0FBTyxDQUFDRjtRQUMxQ0csUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkg7SUFDaEMsRUFBRSxPQUFPSSxLQUFLO1FBQ1pGLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDZDtBQUNGLENBQUEifQ==