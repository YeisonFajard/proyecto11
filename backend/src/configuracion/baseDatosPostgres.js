const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mi_base_de_datos_usuarios',
    password: 'admin',
    port: 5432
})

module.exports = pool;