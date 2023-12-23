// import the css file into this JS
// that is it we do not need do anything after that.
import './style.css';

function Style(){
 
  // declare the styles
  const style1 = {
    color: "red",
    fontSize : "300px"
  }
 
  return(
    <>

    {/* this is one way of add inline css */}
    <h2> from style component</h2>

    {/*  other way is : */}
    <h2> this is another tag </h2>
    <hr />
    </>
  );
}

export default Style;