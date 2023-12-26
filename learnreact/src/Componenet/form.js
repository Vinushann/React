import { useState } from "react";

function Myform() {
  // as OBJECT
  const [inputs, setInputs] = useState({});

  function submit(e) {
    e.preventDefault();
    console.log(inputs);
  }

  function storeAllData(e) {
    // get the name from the form
    const name = e.target.name;

    // get the value from that name
    const value = e.target.value;

    setInputs((previousState) => {
      // Update the state with the new input value
      return { ...previousState, [name]: value };
    });
  }

  return (
    <>
      <form action="" onSubmit={submit}>
        {/* get the name from form */}
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
          <input type="text" name="address" onChange={storeAllData} />
        </label>

        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Myform;
