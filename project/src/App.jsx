
//import React from 'react'

import{useState} from "react"
import NewComponent from "./NewComponent";

// function App() {
//   return (
//     <div>App</div> 
//   )
// }

function App(){

  var [Num , setNum] = useState(7.6);


  return(
  
    <div>
    <h1>First state change : {Num} </h1>

    <button onClick={function () {
      setNum(Num + 1 )
    }} >button</button> 
    
   <NewComponent name = {Num}/>
    

   
    </div>
    
   
  
   
  )
}
export default App //this help to import this component in other files.
