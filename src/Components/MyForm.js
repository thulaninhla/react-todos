import React, { useState } from "react";
import "./App.css";
import { Button, Card, Form, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import "./style.css";
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { v4 as uuidv4 } from 'react';

function Todo({ todo, index, markTodo, removeTodo }) {

  const [Datalist,setData]=useState([{activity:''}])

  const onCreate = () =>{
    const db =firebase.firestore()
    db.collection("users").add({activity:input})
  }
  const onInputChange = event => {
    setInput(event.target.value);
  };
  const onFormSubmit = event => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput('');
  };

  return (
    
    <div className="todo" style={{width:'400px', height:'0px', margin:'4px' }}>
      
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        
      </div>
      
    </div>
  
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
 
  return (
    <>
    
    <Form onSubmit={handleSubmit} > 
    <Form.Group className="text-center mb-4">
      <Form.Label><b>Add Task</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new task" style={{width:"370px", height:'40px', margin:'15px' }}/>
    </Form.Group>
    <Button variant="primary mb-3" type="submit" style={{ margin:'15px' }}
    >
      Submit
    </Button >
  </Form>
  </>
  );
  
}

function App() {
  const [todos, setTodos] = React.useState([
    
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const [error, setError] = useState('');
  const history = useHistory();


  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/signin');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <>
      <h3 className="text-left mb-4" style={{ margin:'15px' }}>To-Do-List</h3>
      
        <FormTodo addTodo={addTodo} />
        <div>
          <>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>

          ))} </>
         
        </div>
  </>
 
  );
}


export default App;