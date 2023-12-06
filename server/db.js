const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "191221",
    host: "localhost",
    port: 5432,
    database: "pernmap"
})

module.exports = pool;