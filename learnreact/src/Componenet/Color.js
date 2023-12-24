import { useState } from "react";

function List() {
  const [list, setList] = useState([]);
  // this state for update the number
  const [num, setNum] = useState(1);

  // function for change the value
  function addItem() {

    // dynamically change the value whenever user clicks button
    const itemName = "Item" + num;

    // set the list whenever user clicks button
    setList((previousState) => {

      // return old values with new values
      return [...previousState, itemName];
    });

    // after that we have to increase the number then only next number will be increased.
    setNum((previousState) => {
      return(previousState + 1);
    });
  }

  return (
    <>
      <h1> use array in state </h1>
      <ul>
        {list.map((list, index) => (
          <li key={index}> {list} </li>
        ))}
      </ul>
      {/* call addItem function */}
      <button onClick={addItem}> add item </button>
    </>
  );
}

export default List;
