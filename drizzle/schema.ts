import { mysqlTable, varchar, datetime, mysqlEnum } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const users = mysqlTable("users", {
  openId: varchar("open_id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  loginMethod: varchar("login_method", { length: 255 }),
  lastSignedIn: datetime("last_signed_in").default(sql`CURRENT_TIMESTAMP`),
  role: mysqlEnum("role", ["user", "admin"]).default("user"),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;