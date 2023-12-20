
function Mango(props) {

  // DESTRUCTURING METHOD - take the OBJECT out
  const {obj} = props;

  const {country, color} = obj;

  return (
    <>
      <h1> from mango component </h1>
      <p>
        {/* using those variables */}
        the color is {color}
        <br />
        from {country}
      </p>
    </>
  );
}



export default Mango;
