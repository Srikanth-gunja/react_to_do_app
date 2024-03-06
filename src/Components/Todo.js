import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, deleteTodo } from '../Slices/todoSlicer';
import { nanoid } from '@reduxjs/toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Todo.css'; // Import the CSS file

const Todo = () => {
  const arr = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [data, setData] = useState('');

  const handleClick = () => {
    if (data !== '') {
      dispatch(
        addtodo({
          id: nanoid(),
          title: data,
        })
      );
      setData('');
    }
  };

  return (
    <>
      <nav className="">
        <Link to='/'>
          <button className="logout-button">Logout</button>
        </Link>
      </nav>
      <div className="todo-container">
        <div className="input-container">
          <input
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="input-field"
          />
          <button onClick={handleClick} className="add-button">
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
            Add
          </button>
        </div>
        {arr.map((item) => (
          <div key={item.id} className="todo-item">
            <div className="todo-text">
              <p>{item.title}</p>
            </div>
            
            <button
            style={{
              marginLeft: '10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => dispatch(deleteTodo(item))}
          >
            <FontAwesomeIcon icon={faTrashAlt} color="red" />
          </button>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
