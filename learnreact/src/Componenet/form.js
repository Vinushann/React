import { useState } from "react";

function Myform() {
 
  const [inputs, setInputs] = useState({

    /* 
        step 1 - set the intial value for that.
    */
    address : 'Colo'
  });


    function submit(e){

      e.preventDefault();
      console.log(inputs);
    }

  function storeAllData(e) {
    
    const name = e.target.name;
    const value = e.target.value;

    setInputs((previousState) => {
      return { ...previousState, [name]: value };
    });
  }

  return (
    <>
      <form action="" onSubmit={submit}>
       
        <label htmlFor="">
          Name : <br />
          <input type="text" name="name" onChange={storeAllData} />
        </label>

        <br />

        <label htmlFor="">
          Age : <br />
          <input type="text" name="age" onChange={storeAllData} />
        </label>

        <br />

        <label htmlFor="">
          Address : <br />
          {/* 
              step 2 : use 'value' element for set the step - 1 value

              step 3 : use full extension.
                object-name . property-name
          */}
          <input type="text" name="address" value={inputs.address} onChange={storeAllData} />
        </label>

        <br /> <br />
        <button type="submit"> Submit</button>
      </form>
    </>
  );
}

export default Myform;
