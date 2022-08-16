import React from 'react'
import './App.css'
import Task from './task'

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <Task/>
    )
  }
}


export default App;
