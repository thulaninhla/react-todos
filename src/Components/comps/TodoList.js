import React from 'react';
import './style.css';

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo">
      {todos.map(todo => (
        <li
          style={{listStyle:"none",  marginTop: '1px', background:"rgba(0 , 0 , 0 , 0.5)" ,width:"550px",marginLeft:'50px ' }  }
          className="list-items"
          key={todo.id}
        >
          <input
            style={{background: 'none',marginLeft:"50px", borderStyle: 'none',listStyle:'none',color:"#FFFFFF ",height: '50px', marginRight: '10px', width: '250px' }}
            type="text"
            value={todo.title}
            className="list"
            onChange={event => event.preventDefault()}
          />


<button
            style={{background: 'none', borderStyle: 'none', height: '20px',marginLeft:"150px" }}
            className="button-complite task-button"
            onClick={() => handleDelete(todo)}
          >
         <i  style={{ color: '#f9a825', fontSize:"20px" }} class="fa fa-star-o" aria-hidden="true"></i>
          </button>

          <button
            style={{ background: 'none', borderStyle: 'none', height: '20px' }}
            className="button-complite task-button"
            onClick={() => handleDelete(todo)}
          >
      <i style={{ color: '#b71c1c', fontSize:"20px" }} class="fa fa-times-circle-o" aria-hidden="true"></i>
          </button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
