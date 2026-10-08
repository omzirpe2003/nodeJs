import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: text('password').notNull(),                 // bcrypt hash, never plain text
  role: varchar('role', { length: 20 }).notNull().default('user'), // 'user' | 'admin'
  refreshToken: text('refresh_token'),                  // SHA-256 hash of the current refresh token
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
