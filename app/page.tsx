// 'use client'
import Image from "next/image";
// import { useState, useEffect } from "react";
import { TodoObject } from "./models/todo";
import { v4 as uuidv4 } from 'uuid';
import { db } from "db";
import { tasklist } from "db/schema";
import { eq } from "drizzle-orm";
import TodoList from "./components/TodoList";

export default function Home() {

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <main className="p-4">
        <TodoList />
      </main>
    </>
  );
}
