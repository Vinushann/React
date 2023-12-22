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

  const num = [1,2,3,4,5,6];


  const text = `from Fruit`;

  return (
    <>
      <h1>{text}</h1>
      <hr />

      {/* send the data through the OBJECT */}
      <Mango obj={obj} />

    {/* in here, we used the map() to get each object and pass it throgh the PROPS */}
      {list.map((n) => (

        // here, we are using key each list to distinguish between others
        // key as objects' country
       <li key={n.country}> <Avocado obj={n} /> </li>
      ))}

      {/* print the data directly without send to any component */}
       {num.map((n) => (
        <p key={n}>{n}</p>
      ))} 


    </>
  );
}

// import the component
export default Fruit;
