

import './App.css'
import Card from "./Components/card"
import Nav from './Components/nav'

function App() {

 let arr1 = [ "#Apple" , "#Expansive" , "Luxury"];
 let arr2 = [ "#Nokia" , "#Tech" , "Divyesh"];
 let arr3 = [ "#hp" , "#Dell" , "Best Deals"];
 

  return (
    <>
    
    <div className='flex gap-3 flex-wrap items-center justify-center '>
    <Nav />
    <Card userName = 'divyesh' tags = {arr1} />
    <Card userName = 'Jax' btnText = 'read more' tags = {arr2} />
    <Card userName = 'Roy' btnText = 'read everything ' tags = {arr3}  />
    </div>


    </>
  )
}

export default App
