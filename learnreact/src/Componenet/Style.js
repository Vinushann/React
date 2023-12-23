function Style(){
 
  // declare the styles
  const style1 = {
    color: "red",
    fontSize : "300px"
  }
 
  return(
    <>

    {/* this is one way of add inline css */}
    <h2 style={{color: "red", backgroundColor : "white"}} > from style component</h2>

    {/*  other way is : */}
    <h2 style = {style1} > this is another tag </h2>
    <hr />
    </>
  );
}

export default Style;