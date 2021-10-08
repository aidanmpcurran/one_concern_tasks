import React from "react";

const Course = ({ App }) => (
  <>
    <Header App={App.name} />
    <Content parts={App.parts} />
    <Total parts={App.parts} />
  </>
);

const Header = ({ App }) => <h1>{App}</h1>;

const Content = ({ parts }) => (
  <>
    {parts.map(({ name, exercises, id }) => (
      <Part key={id} name={name} exercises={exercises} />
    ))}
  </>
);

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return <p className="total">Total number of exercises {total}</p>;
};

export default Course;