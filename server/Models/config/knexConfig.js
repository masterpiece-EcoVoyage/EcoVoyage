const knex = require('knex')({
    client: 'pg', // PostgreSQL
    connection: {
        user: 'postgres',
        password: '123',
        host: 'localhost',
        port: 5432,
        database: 'ecovoyage'
    }
});

module.exports = knex;
