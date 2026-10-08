import pg from 'pg';

import 'dotenv/config.js'

const pool =new pg.Pool({
    connectionString:process.env.DATABASE_URL,
    max:10,
    idleTimeoutMillis : 30_000,
    connectionTimeoutMillis:5_000,
    //ssl: env.DB_SSL ? { rejectUnauthorized: false } : false,

})

pool.on('error',(err)=>{
    console.error("Unexpected Postgres pool error: ",err)
})


export const query = (text,params) => pool.query(text,params)

export const connectDb = async ()=>{
    await pool.query(`SELECT 1`)
    console.log('Postgress connected')
}

// IMP CODE

// export const closeDb=()=>pool.end();


// import pg from 'pg';
// import { env } from './env.js';

// const pool = new pg.Pool({ connectionString: env.DATABASE_URL });

// export const query = (text, params) => pool.query(text, params);