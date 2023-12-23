// import the function
import {useState} from 'react'
import CarClass from './CarClass'
function Color() {
  
  // create multiple things via OBJECT
  // obj = is contain all the data of that created object
  // setObject = is for change the values and get the previous values.
const [obj, setObject] = useState({
  color : 'Red',
  country : 'Canada',
  route : 'No45, Canada'
})


// change the data for that OBJECT
function change(){
  setObject(prevousState => {
    return {...prevousState, color : 'Pink', country: 'Germany'}
  })
}
  return (
    <>
      <h1> From Color Component </h1>
      <p>color is : {obj.color}</p>
      <p>country is : {obj.country}</p>
      <p>route is : {obj.route}</p>
      <button onClick={change} >change the color</button>
      <CarClass/>
    </>
  );
}

export default Color;
