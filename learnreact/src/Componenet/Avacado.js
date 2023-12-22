// getting the Component class from react module
import{ Component } from 'react';

// class creation
class Avocado extends Component {

  render(){

    // get the object out
    const {obj} = this.props;
    const {color, country} = obj;

    return(
      <>
      <h1> from Avacado component </h1>
      <p>
        {/* using those variables */}
        the color is {color}
        <br />
        from {country}
      </p>
      <hr />
    </>
    );
  }
}

export default Avocado;