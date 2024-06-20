import React from 'react'
import Header from "./components/Header";
import Items from "./components/Items";
import Button from "./components/Button";

const App = ()=>{
  return (
  <div className='todo-container'> 
  <Header title = "To Do" />
  <Items text="Eat" />
  <Items text = "Code" completed = {true} />
  <Items text = "Play" />
  <Items text = "Study" />
  <Items text = "Repeat" />
  <Button /> 
  </div>);

}

  export default App;
