// import the function
import {useState} from 'react'
import CarClass from './CarClass'
function Color() {
  
  // set the initial value
  const [color, setColor] = useState('Red');

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
      <h1> From Color Component {color} </h1>
      {/* button for TRIGGER */}
      <button onClick={increment} style = {{marginRight : '100px'}}> Change color to Green </button>
      <button onClick={Blue}> Change color to Blue </button>
      <CarClass/>
    </>
  );
}

export default Color;
