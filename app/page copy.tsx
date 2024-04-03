// Import necessary modules
import { Component } from "react";
import { db } from 'db';
import { tasklist } from 'db/schema';
import { eq } from 'drizzle-orm';

// Define your class component
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  // Fetch todos from the database when the component mounts
  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = async () => {
    const todosFromDB = await db.select().from(tasklist);
    this.setState({ todos: todosFromDB });
  }

  // Function to mark a todo as done
  markTodoDone = async (id) => {
    // Example: Update the todo in the database as done
    await db.update(tasklist).set({ done: 1 }).where(eq(tasklist.id, id));
    // Update the state to reflect the change locally
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, done: 1 };
        }
        return todo;
      })
    }));
  }

  // Example function to add a new todo (you can replace it with your actual implementation)
  addTodo = async () => {
    // Example: addTodo implementation
    console.log("Adding a new todo");
  }

  render() {
    return (
      <>
        <header>
          <h1>Todo List</h1>
        </header>
        <main className='p-4'>
          <div>
            <input
              type='text'
              className='text-lg mx-2 text-white border-2 rounded'
              placeholder='Enter your to-do'
            />
            <button className='border-2 p-1 rounded' onClick={this.addTodo}>
              Add Todo
            </button>
            <ul className='mt-5'>
              {this.state.todos.map((todo) => (
                <li
                  key={todo.id}
                  onClick={() => this.markTodoDone(todo.id)} // Attach markTodoDone function to onClick event
                  className={`text-xl ml-5 cursor-pointer ${todo.done ? 'line-through' : 'no-underline'}`}
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
        </main>
      </>
    );
  }
}
