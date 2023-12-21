import Mango from './Mango';
import Avacado from './Avacado';

function Fruit(){
  // using object to share the data through the PROPS
  const obj = {country : 'America', color : 'red'};

  // main object
  const mainObj = {country : 'Canada', color : 'green'};
  // country : 'Canada', color : 'green'

  // object one
  const obj1 = mainObj;

  const text = `from Fruit`;

  return(
    <> 

    <h1>{text}</h1>
    <hr />
    {/* send the data through the OBJECT */}
     <Mango obj = {obj}/>
     
     {/* send the object to Avacado class */}
     {/* conditional rendering */}
     {/* in here, if those are null it will not execute the true part */}
     
     { (obj1.color !== undefined && obj1.country !== undefined) ? <Avacado obj = {obj1}/> : null }
     
    </>
  );
}



// import the component
export default Fruit;