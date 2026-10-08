
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import 'dotenv/config.js';
import * as schema from './schema.js';

const pool = new pg.Pool({connectionString : process.env.DATABASE_URL})

export const db = drizzle({ client: pool, schema });

export const connectDb = async ()=>{
    await pool.query("SELECT 1")
    console.log("===> Database Connect <===");
}

