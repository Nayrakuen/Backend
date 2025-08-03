const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT || 5432,
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
