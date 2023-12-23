// import the function
import {useState} from 'react'

function Color() {
  
  // set the initial value
  const [color, setColor] = useState('Red');

  const increment = () => {
    setColor('Green')
  };

  return (
    <>
      <h1> From Color Component {color} </h1>
      {/* button for TRIGGER */}
      <button onClick={increment}> Change the color </button>
    </>
  );
}

export default Color;
