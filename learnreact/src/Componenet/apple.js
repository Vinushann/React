import Mango from "./Mango";
import Avocado from "./Avacado";

function Fruit() {
  // using object to share the data through the PROPS
  const obj = { country: "America", color: "red" };
  const obj1 = { country: "Canada", color: "green" };

  // Array with objects
  const list = [
    { country: "Canada", color: "magenta" },
    { country: "Japan", color: "white" },
    { country: "Paris", color: "black" },
    { country: "Australia", color: "pink" },
  ];

  const text = `from Fruit`;

  return (
    <>
      <h1>{text}</h1>
      <hr />

      {/* send the data through the OBJECT */}
      <Mango obj={obj} />

    {/* in here, we used the map() to get each object and pass it throgh the PROPS */}
      {list.map((n) => (

        // Call every time over and over again.
        <Avocado obj={n} />
      ))}
    </>
  );
}

// import the component
export default Fruit;
