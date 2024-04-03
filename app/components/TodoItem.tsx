'use client';
import Todo from 'app/models/todo';
import { db } from 'db';
import { tasklist } from 'db/schema';
import { eq } from 'drizzle-orm';
import React from 'react';
import { updateDone } from './markDone';

export default function TodoItem(props: Todo) {
  // const [todo, setTodo] = useState<string>("");
  // const [todos, setTodos] = useState<TodoObject[]>([]);

  // useEffect(() => {
  //   fetch('./dbconfig/todos')
  //     .then(res => res.json())
  //     .then(data => setTodos(data))
  //     .catch(err => console.error(err));
  // }, []);

  // const addTodo = () => {
  //   setTodos([{id: uuidv4(), value: todo, done: false}, ...todos]);
  //   setTodo('');
  // }

  // const markTodoDone = (id: string) => {
  //   const data2: any = await db
  //   .update(tasklist)
  //   .set({ done: 0 })
  //   .where(eq(tasklist.id, 30));
  //   console.log(data2);
  //   return () => {

  //     const updatedTodos = todos.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todo, done: !todo.done };
  //       }
  //       return todo;
  //     });
  //     setTodos(updatedTodos);
  //   };
  // }

  // const [todo, setTodo] = useState<string>("");
  // const [todos, setTodos] = useState<TodoObject[]>([]);

  // useEffect(() => {
  //   fetch('./dbconfig/todos')
  //     .then(res => res.json())
  //     .then(data => setTodos(data))
  //     .catch(err => console.error(err));
  // }, []);

  // const addTodo = () => {
  //   setTodos([{id: uuidv4(), value: todo, done: false}, ...todos]);
  //   setTodo('');
  // }

  // const markTodoDone = (id: string) => {
  //   return () => {

  //     const updatedTodos = todos.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todo, done: !todo.done };
  //       }
  //       return todo;
  //     });
  //     setTodos(updatedTodos);
  //   };
  // }

  // const markTodoDone = (id: string) => {
  //   return () => {

  //     const updatedTodos = todos.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todo, done: !todo.done };
  //       }
  //       return todo;
  //     });
  //     // setTodos(updatedTodos);
  //   };
  // }

  // console.log(markTodoDone);
  const handleOnClick = async () => {
    await updateDone(props.id, props.done);
  };

  return (
    <li
      key={props.id}
      onClick={handleOnClick}
      className={`text-xl ml-5 cursor-pointer ${
        props.done ? 'line-through' : 'no-underline'
      } `}
    >
      <input
        type='checkbox'
        className='mx-2 py-1 checkbox checkbox-primary p-3'
      />
      {props.task}
    </li>
  );
}
