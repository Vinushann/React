import Mango from './Mango';

function Apple(){
  // variable for send for PROPS
  const country = 'Canada';
  const color = 'red';
  const text = `From apple ${color}`

  return(
    <> 
    <h1>{text}</h1>

    {/* sending the data  */} {/* sending the data without variables*/}
     <Mango color = {color} country = {'Canada'}/>
    </>
  );
}



// import the component
export default Apple