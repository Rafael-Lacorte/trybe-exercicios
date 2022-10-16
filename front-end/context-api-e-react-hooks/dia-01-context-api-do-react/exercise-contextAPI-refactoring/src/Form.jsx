import React ,{ useContext } from "react"
import AppContext from "./context/AppContext";


function Form() {
  const {
    name,
    setName,
    age,
    setAge,
    cidade,
    setCidade,
    module,
    setModule, 
  } = useContext(AppContext)

  return (
    <form>
      <input type="text" onChange={({ target })=> setName(target.value) }></input>
      <input type="number" onChange={({ target })=> setAge(target.value) }></input>
      <input type="text" onChange={({ target })=> setCidade(target.value) }></input>
      <input type="radio" id="fundamentos" value="Fundamentos" onChange={({ target })=> setModule(target.value) }></input>
      <label for="fundamentos" >Fundamentos</label>
      <input type="radio" id="front-end" value="Front-end"onChange={({ target })=> setModule(target.value) }></input>
      <label for="front-end">Front-end</label>
      <input type="radio" id="back-end" value="Back-end"onChange={({ target })=> setModule(target.value) }></input>
      <label for="back-end">Back-end</label>
      <button type="button">Enviar</button>
      <div>
        <p>
        {name}
          </p>
          <p>
          {age}
          </p>
          <p>
          {cidade}
          </p>
          <p>
          {module}
          </p>
      </div>
    </form>

  )
}

export default Form;