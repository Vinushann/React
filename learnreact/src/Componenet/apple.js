import Mango from "./Mango";
import Avocado from "./Avacado";
import Style from "./Style"

function Fruit() {

  // using object to share the data through the PROPS
  const obj = { country: "America", color: "red" };
  const obj1 = { country: "Canada", color: "green" };

  const text = `from Fruit`;

  return (
    <>
      <h1>{text}</h1>
      <hr />

      <Mango obj={obj} />
      <Avocado obj = {obj1}/>
      <Style/>

    </>
  );
}

// import the component
export default Fruit;
