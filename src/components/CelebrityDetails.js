import React from "react";

const CelebrityDetails = ({ celebrity }) => {
  return (
    <div >
      <h2>{celebrity.name}</h2>
      <h3>Exercises:</h3>
      <ul>
        {celebrity.exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
      <h3>Diet Plan:</h3>
      <ul>
        {celebrity.dietPlan.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default CelebrityDetails;
