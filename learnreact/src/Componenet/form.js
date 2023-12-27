/*
  A20 - Text Area
*/

import { useState } from "react";

function Myform() {
 
  const [inputs, setInputs] = useState({});


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
       
       {/* 
          nothing is different from others all are same steps
       */}
        <label htmlFor="">
          Tell just something: <br />

          <textarea name="tell"
                    value="you can type anything that you want !"
                    onChange={storeAllData}>

          </textarea>
        </label>

        <br />

        <br /> <br />
        <button type="submit"> Submit</button>
      </form>
    </>
  );
}

export default Myform;
