import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part1={props.part1} num1={props.num1} />
      <Part part2={props.part2} num2={props.num2} />
      <Part part3={props.part3} num3={props.num3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.num1 + props.num2 + props.num3}</p>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.num1}
        {props.part2} {props.num2}
        {props.part3} {props.num3}
      </p>
    </div>
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

      <Content
        part1={part1}
        num1={exercises1}
        part2={part2}
        num2={exercises2}
        part3={part3}
        num3={exercises3}
      />

      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
