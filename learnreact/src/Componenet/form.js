/*
  A19 - Drop Down menu
*/

/*
  
*/

import { useState } from "react";

function Myform() {
 
  const [inputs, setInputs] = useState({

    /*
      - set the default value for this object
    */
    country: 'India'
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
          Name: <br />
          <input type="text" name="name" onChange={storeAllData} />
        </label>

        <br />

        <label htmlFor="">
          Age: <br />
          <input type="text" name="age" onChange={storeAllData} />
        </label>

        <br />

        <label htmlFor="">
          Address: <br />
          
          <input type="text" name="address" value={inputs.address} onChange={storeAllData} />
        </label>

          <br />

        {/* 
              step 1 : create a drop down menu
        */}
        <label htmlFor="">
          country:
        <br />
          <select name="country" onChange={storeAllData} value={inputs.country}>
            {/* first one for default */}
            <option value="">Select</option>
            <option value="srilanka"> Sri Lanka </option>
            <option value="india"> India </option>
            <option value="canada"> Canada </option>
            <option value="america"> America </option>

          </select>
        </label>

        <br /> <br />
        <button type="submit"> Submit</button>
      </form>
    </>
  );
}

export default Myform;
``