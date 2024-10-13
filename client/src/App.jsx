import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewtodo] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/todo');
        // console.log('API res:', res.data); 
        setTodos(res.data.todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []); // This ensures fetchTodos is only called once after component mounts

  const addTodo = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/todo', { title: newtodo });
      setTodos([...todos, res.data.todo]);
      setNewtodo('');
    } catch (error) {
      console.error('error in adding todo:', error);
      alert('error adding todo')
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/todo/${id}`);
      setTodos(todos.filter((item) => item._id !== id));
    } catch (error) {
      console.error('error in deleting todo:', error);
    }
  }

  const toggleComplete = async (id) => {
    try {
      const todo = todos.find(elem => elem._id === id);
      const updatedTodo = await axios.put(`http://localhost:4000/api/todo/${id}`, { completed: !todo.completed });
      setTodos(todos.map(item => item._id === id ? updatedTodo.data.todo : item))
    } catch (error) {
      console.error('error in updating todo:', error);
    }
  }

  return (
    <div className='box'>
      <div className="box-elem">
        <h1>Todo List</h1>
        <input type="text" value={newtodo}
          onChange={e => setNewtodo(e.target.value)}
          placeholder='Add a new todo'
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {Array.isArray(todos) && todos.length > 0 ? (
            todos.map((item) => (
              <div className='items'>
                <li key={item._id}>
                  <input type="checkbox" checked={item.completed} onChange={() => toggleComplete(item._id)} />
                  {item.title}
                  <button onClick={() => deleteTodo(item._id)}>Delete</button>
                </li>
              </div>
            ))
          ) : (
            <p>No todos available</p>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
