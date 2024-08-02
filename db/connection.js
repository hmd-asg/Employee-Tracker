const { Pool } = require("pg");

const pool = new Pool({

    user: "postgres",
    password: "password",
    host: "localhost",
    database: "employee_tracker_db"
});

module.exports = pool;