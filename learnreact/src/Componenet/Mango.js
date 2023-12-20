
function Mango(props) {

  // DESTRUCTURING METHOD
  const {color, country} = props;

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
