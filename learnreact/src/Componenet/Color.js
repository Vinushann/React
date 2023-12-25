import { useEffect, useState } from "react";

function List() {
  
  const [count, setCount] = useState(1);
  
  useEffect(() => {
    console.log('screen rendered');
  }, [count]);


  function updateCount(){
    setCount( (previousState) => {
      return (previousState + 1);
    });
  }

  return (
    <>
      <h1> I have rendered {count} times! </h1>
      <button onClick={ updateCount }> increase count </button>
    </>
  );
}

export default List;
