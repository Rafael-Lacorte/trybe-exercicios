import React from "react";

const task = (value) => {
    return (
      <li>{value}</li>
    );
  }

  const tarefas = ['Ir pra academia', 'estudar sobre Soap', 'Cortar o cabelo']
  
  class Task extends React.Component {
    render() {
        return (
            <ul>{ tarefas.map(tarefa => task(tarefa)) }</ul>
            )
        }
}

export default Task