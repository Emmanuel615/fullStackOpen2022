import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.part} {props.num}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.num1 + props.num2 + props.num3}
      </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />

      <Content part={part1} num={exercises1} />
      <Content part={part2} num={exercises2} />
      <Content part={part3} num={exercises3} />

      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
