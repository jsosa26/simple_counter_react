//import react into the bundle
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
//import Home from "./component/home.jsx";

function SimpleCounter(props) {
  return (
    <div className="Counter">
      <div className="calendar">
        <i className="far fa-clock"></i>
      </div>
      <div className="six">{props.digitoSeis % 10}</div>
      <div className="five">{props.digitoCinco % 10}</div>
      <div className="four">{props.digitoCuatro % 10}</div>
      <div className="three">{props.digitoTres % 10}</div>
      <div className="two">{props.digitoDos % 10}</div>
      <div className="one">{props.digitoUno % 10}</div>             
    
      <button className="stop" onClick={stop}>stop</button> 
    </div>
    
  );
}
SimpleCounter.propTypes = {
  digitoSeis: propTypes.number,
  digitoCinco: propTypes.number,
  digitoCuatro: propTypes.number,
  digitoTres: propTypes.number,
  digitoDos: propTypes.number,
  digitoUno: propTypes.number,
};

let counter = 0;
setInterval(function () {
  const six = Math.floor(counter / 10000);
  const five = Math.floor(counter / 10000);
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  console.log(six, five, four, three, two, one);
  counter++;  
  
  //render your react application
  ReactDOM.render(
    <SimpleCounter
      digitoUno={one}
      digitoDos={two}
      digitoTres={three}
      digitoCuatro={four}
      digitoCinco={five}
      digitoSeis={six}
    />,
    document.querySelector("#app")
  );
}, 1000);

