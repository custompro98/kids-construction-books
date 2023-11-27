import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const authors = sqliteTable("authors", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { mode: "text" }).notNull().unique(),
    createdAt: text("created_at")
        .notNull()
        .default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at"),
});

export const books = sqliteTable("books", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    title: text("title", { mode: "text" }).notNull().unique(),
    image: text("image", { mode: "text" }).notNull(),
    authorId: integer("author_id", { mode: "number" }).notNull().references(() => authors.id),
    createdAt: text("created_at")
        .notNull()
        .default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at"),
});
