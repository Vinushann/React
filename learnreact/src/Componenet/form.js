// A16 - handle FORM  via object
import { useState } from "react";

function Myform() {
  // as OBJECT
  const [inputs, setInputs] = useState({});
  

  // function for do after user submit the form.
  function submit(e){
    // preventDefault() will prevent from browser refresh the screen itself. why we have to prevent? *** otherwise we can not see the outut on the console.
    e.preventDefault();

    // print the user entered values
    // details(name, age, address) are coming from the above
    // const print = 'form submitted' + '\n' + inputs;
    // inputs.name + '\n' + inputs.age + '\n' + inputs.address;
    // print
    console.log(inputs);

  }

  return (
    <>
    <form action="" onSubmit={submit}>
      
      {/* get the name from form */}
      <label htmlFor=""> Name : <br/>
        <input type="text" onChange={(e) => {
           
            // we 
            setInputs( (previousState) => { return { ...previousState, name : e.target.value } });
          }}/>
      </label>

      <br />

        <label htmlFor=""> Age : <br/>
        <input type="text" onChange={(e) => {
            setInputs( (previousState) => { return { ...previousState,  age : e.target.value } } );
          }}/>
      </label>

      <br />

        <label htmlFor=""> Address : <br/>
        <input type="text" onChange={(e) => {
           setInputs( (previousState) => { return { ...previousState, address : e.target.value } });
          }}/>
      </label>

      <br /> <br />
      <button>sumbit</button>
    </form>
    </>
  );
}

export default Myform;

/*
special funcitons 

1. onChange() - whenver user typed anything as input it will listen

2. setName(e.target.value)  - how we can access the user entered value.

*/
