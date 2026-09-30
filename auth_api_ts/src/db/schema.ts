
import { string } from "drizzle-orm/cockroach-core";
import {integer, pgTable, uuid, varchar,boolean, timestamp} from "drizzle-orm/pg-core";

export const userTabel= pgTable("user",{
    id:uuid('id').primaryKey().defaultRandom(),
    firstName: varchar('first_name',{length:30}).notNull(),
    lastName: varchar('last_name',{length:30}).notNull(),
    email: varchar('email',{length:322}).unique().notNull(),
    emailVerified: boolean('email_verification').default(false).notNull(),
    password : varchar('password',{length:66}),

    salt : varchar('salt'),
    createdAt:  timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
    
})