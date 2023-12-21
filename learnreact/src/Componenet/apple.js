import Mango from './Mango';
import Avacado from './Avacado';

function Apple(){
  // using object to share the data through the PROPS
  const obj = {country : 'America', color : 'red'};

  // this object for class AVACADO
  const obj1 = {country : 'Canada', color : 'yellow'};
 
  const text = `from Apple`

  return(
    <> 

    <h1>{text}</h1>
    <hr />
    {/* send the data through the OBJECT */}
     <Mango obj = {obj}/>
     
     {/* send the object to Avacado class */}
     <Avacado obj = {obj1}/>
    </>
  );
}



// import the component
export default Apple