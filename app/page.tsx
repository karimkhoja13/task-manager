import Image from 'next/image';
// import { useState, useEffect } from "react";
import Todo from './models/todo';
import { v4 as uuidv4 } from 'uuid';
import { db } from 'db';
import { tasklist } from 'db/schema';
import { eq } from 'drizzle-orm';
import TodoList from './components/TodoItem';
import { useCallback } from 'react';
import TodoItem from './components/TodoItem';
import InsertForm from './components/InsertForm';

export default async function page() {
  const todos: Todo[] = await db.select().from(tasklist);

  console.log(todos);

  // const updatedTodo: any = await db
  //   .update(tasklist)
  //   .set({ done: 0 })
  //   .where(eq(tasklist.id, 30));
  // console.log(updatedTodo);

  // const [todo, setTodo] = useState<string>("");
  // const [todos, setTodos] = useState<TodoObject[]>([]);

  // const addTodo = () => {
  //   setTodos([{id: uuidv4(), value: todo, done: false}, ...todos]);
  //   setTodo('');
  // }

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <main className='p-4'>
        <div>
          <InsertForm />
          <ul className='mt-5'>
            {todos.map((todo) => ( // ANOTHER COMPONENT NEEDED
            
              <TodoItem
              key={todo.id}
              id={todo.id} // Pass individual properties as props
              task={todo.task}
              done={todo.done}
            />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
