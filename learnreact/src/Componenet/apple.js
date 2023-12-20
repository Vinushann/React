import Mango from './Mango';

// directly get the Component class from react.
import {Component} from 'react';

// create class component
// extends component class
class Apple extends Component {

  // cretae render method to send the data
  render(){

    // return statement
    return(
      <>
       <h1>from apple class</h1>
        <Mango/>
      </>
     
    )
  }
}


// import the component
export default Apple