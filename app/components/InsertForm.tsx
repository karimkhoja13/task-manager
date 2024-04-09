'use client'
import React, { useState } from 'react';
import { insertTodo } from './insertTodo';

const InsertTodo = () => {

  // State to hold the value of the input field
  const [todoText, setTodoText] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Call the insertTodo function with the todoText as an argument
    insertTodo(todoText);
    // Clear the input field after adding todo
    setTodoText('');
  };

  return (
    <div>
      <input
        type='text'
        className='text-lg mx-2 text-white border-2 rounded'
        placeholder='Enter your to-do'
        value={todoText}
        onChange={handleInputChange}
      />
      <button
        className='border-2 p-1 rounded'
        onClick={handleButtonClick}
      >
        Add Todo
      </button>
    </div>
  );
};

export default InsertTodo;
