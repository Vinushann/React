// A15 - FORM
import { useState } from "react";

function Myform() {
  // useSate for store the variable from form
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [address, setAddress] = useState();

  // function for do after user submit the form.
  function submit(e){
    // preventDefault() will prevent from browser refresh the screen itself. why we have to prevent? *** otherwise we can not see the outut on the console.
    e.preventDefault();

    // print the user entered values
    // details(name, age, address) are coming from the above
    const print = 'form submitted' + '\n' + name + '\n' + age + '\n' + address;

    // print
    console.log(print);

  }

  return (
    <>
    <form action="" onSubmit={submit}>
      {/* get the name from form */}
      <label htmlFor=""> Name : <br/>
        <input type="text" onChange={(e) => {
           
            // e is contain user input and we set inside the 'name' variable through invoke the setName()
            // accessing the value that user entered!
            setName(e.target.value);
          }}/>
      </label>

      <br />

        <label htmlFor=""> Age : <br/>
        <input type="text" onChange={(e) => {
            setAge(e.target.value);
          }}/>
      </label>

      <br />

        <label htmlFor=""> Address : <br/>
        <input type="text" onChange={(e) => {
            setAddress(e.target.value);
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
