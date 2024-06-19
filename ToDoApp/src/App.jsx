import React from 'react'
import Header from "./components/Header";
import Items from "./components/Items";
import Button from "./components/Button";

const App = ()=>{
  return (
  <div className='todo-container'> 
  <Header />
  <Items />
  <Items />
  <Items />
  <Items />
  <Items />
  <Button /> 
  </div>);

}

  export default App;
