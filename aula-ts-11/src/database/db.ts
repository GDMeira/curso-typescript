import pg from 'pg';

const { Pool } = pg;

const db = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Ga1410cr!',
    database: 'learning_ts'
});

db.connect((error, client, done) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Connected to Postgres server');
        done();
    }
})

export default db