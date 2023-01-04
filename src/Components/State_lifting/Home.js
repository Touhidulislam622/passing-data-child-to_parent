import React, {useState} from 'react'
import Todos from './Todos';
import NewTodo from './NewTodo';

const dummyTodos = ["this is todos 1" , "this is todos 2" , "this is todos 3"];

const Home = () => {

  const [ todos, setTodos]= useState(dummyTodos);
 
  const handleNewTodo = (newTodos) => {
    setTodos([...todos, newTodos]);
  };

  return (
    <div>
        <NewTodo onTodo={handleNewTodo} />
        <Todos todos = {todos}/>
        
    </div>
  )
}

export default Home