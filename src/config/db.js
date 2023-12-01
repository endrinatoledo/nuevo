const mysql = require('mysql')
const config = require("./constant.json")
const pool = mysql.createPool({
    host:config.DB_HOST,
    user:config.DB_USER,
    password:config.DB_PASS,
    port:config.DB_PORT,
    database:config.DB_DATABASE
});

pool.getConnection((err)=>{
    if(err){
        console.log("error getting DB connection", err.stack);
        process.exit(1);
    }
    console.log("Connected to DB...");
});

const executeQuery = (query, arrayParams) => {
    
}
