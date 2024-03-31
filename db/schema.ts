import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const tasklist = sqliteTable("todos", {
    id: integer("id"),
    task: text("task"),
    done: integer("done")
})