// import the function
import {useState} from 'react'
import CarClass from './CarClass'
function Color() {
  
  // create multiple states
  const [color, setColor] = useState('Red');
  const [country, setCountry] = useState('Canada');
  const [route, setRoute] = useState('67, hill road.');

  // set the color to Green
  const increment = () => {
    setColor('Green')
  };

  // set the color to Blue
  const Blue = () => {
    setColor('Blue')
  };

  return (
    <>
      <h1> From Color Component </h1>
      <p>color is : {color}</p>
      <p>country is : {country}</p>
      <p>route is : {route}</p>
      
      
      <CarClass/>
    </>
  );
}

export default Color;
