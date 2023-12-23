// import the style.module.css
// in this style thing contain all the data from that specific css
import styles from './header.module.css';


function Style(){
 
  // declare the styles
  const style1 = {
    color: "red",
    fontSize : "300px"
  }
 
  return(
    <>
    <h2 className = {styles.classOne}> from style component</h2>

  {/* use the className we can apply the all css */}
    <h2 className = {styles.one}> this is another tag </h2>
    <hr />
    </>
  );
}

export default Style;