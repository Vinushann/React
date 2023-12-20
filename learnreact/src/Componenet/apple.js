import Mango from './Mango';

function Apple(){
  const color = 'red';
  const text = `From apple ${color}`

  return(
    <> 
    <h1>{text}</h1>
    <Mango color = {color}/>
    </>
  );
}



// import the component
export default Apple