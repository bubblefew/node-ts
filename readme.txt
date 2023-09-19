npm init -y
npm i -D typescript ts-node @tsconfig/node16 nodemon
npx tsc --init
npm i express
npm i -D @types/node @types/express
npm i -D @swc/cli @swc/core


-- Create nodemon.json --
import express from "express";
var app = express();
var PORT = 8000;
app.get("/", function(req, res) {
    res.send("Express + TypeScript Server");
});
app.listen(PORT, function() {
    console.log("Server is running at http://localhost:".concat(PORT));
});
