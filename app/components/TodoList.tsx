import { db } from 'db';
import { tasklist } from 'db/schema';
import { eq } from 'drizzle-orm';
import React from 'react';

export default async function TodoList() {
  const data1: any = await db.select().from(tasklist);

  console.log(data1);

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

  const markTodoDone = (id: string) => {
    return () => {
  const data2: any = await db
    .update(tasklist)
    .set({ done: 0 })
    .where(eq(tasklist.id, 30));
  console.log(data2);
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  }

  return (
    <div>
      <input
        type='text'
        className='text-lg mx-2 text-white border-2 rounded'
        placeholder='Enter your to-do'
        // onChange={(e) => setTodo(e.target.value)} - FIND OUT WHY TO USE THIS
        // value={'1'}
      />
      <button className='border-2 p-1 rounded'>
        {/* onClick={() => addTodo()}> */}
        Add Todo
      </button>
      <ul className='mt-5'>
        {data1.map((todo) => (
          <li
            key={todo.id}
            onClick={markTodoDone(todo.id)}
            className={`text-xl ml-5 cursor-pointer ${
              todo.done ? 'line-through' : 'no-underline'
            } `}
          >
            <input
              type='checkbox'
              className='mx-2 py-1 checkbox checkbox-primary p-3'
            />
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
}
