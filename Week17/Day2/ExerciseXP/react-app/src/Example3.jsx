import React, { Component } from "react";
import data from "./resume.json";

class Example3 extends Component {
  render() {
    const { Experiences } = data;

    return (
      <div>
        <h2>Experiences</h2>

        {Experiences.map((exp, index) => (
          <div key={index} className="mb-3 p-2 border rounded">
            <h4>{exp.company}</h4>
            <p>Year: {exp.year}</p>
            <p>Role: {exp.role}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;