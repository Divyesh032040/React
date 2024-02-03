import { useState } from 'react'
import './App.css'


function App() {

let [ counter , setCounter] = useState(0);

const addValue = () => {
     if(counter < 20){
      setCounter(counter => counter +1 )
     }     
}

const reduceValue = () => {
  if(counter > 0 ){
    setCounter( counter => counter - 1 );
  }
  
}

  return (
    <>
      <h1> Divyesh and React </h1>
      <h2>Counter Value : {counter} </h2>

      <button onClick={addValue} >Add Value  </button>
      <br />
      <button onClick = {reduceValue}>Remove Value  </button>

      <p>Previous Value : {counter - 1}</p>

      <p>Next Value : {counter + 1}</p>

    
    </>
  )
}

export default App;

/*

TOPIC : React - Hooks --> useState( )

-> while working with react hooks first thing we have to do is IMPORT HOOKS BY "import { useState } from 'react' "
---------------------important----------------------
-> we can only use hooks inside a function components.
-> Only Call Hooks at the Top Level 
-> Don’t call Hooks inside loops, conditions, or nested functions. 
-> In React functional components using hooks, always call in the same order during every render.
-> Only Call Hooks from React Functions - Don’t call Hooks from regular JavaScript functions.
-> Hooks can call other Hooks
-> call hooks in exact same order 
----------------------------------------------------------------

const [stateVariable, setStateFunction] = useState(initialState);

-> stateVariable : This is the current state value.
-> setStateFunction : This is a function that allows you to update the state.
-> initialState : This is the initial value of the state variable

example :
/*

import React, { useState } from 'react';

function ExampleComponent() {
  // Declaring a state variable count with an initial value of 0
  const [count, setCount] = useState(0);

  // ... rest of the component logic

  return (
    <div>
      <p>Count: {count}</p>
      
    </div>
  );
}

*/





