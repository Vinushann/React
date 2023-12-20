import Mango from './Mango';

function Apple(){
  // using object to share the data through the PROPS
  const obj = {country : 'America', color : 'red'};
 
  const text = `From apple`

  return(
    <> 

    <h1>{text}</h1>

    {/* send the data through the OBJECT */}
     <Mango obj = {obj}/>

    </>
  );
}



// import the component
export default Apple