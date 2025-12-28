import React, { Component } from "react";
import data from "./resume.json";

class Example2 extends Component {
  render() {
    const { Skills } = data;

    return (
      <div>
        <h2>Skills</h2>

        <h3>Languages</h3>
        {Skills.Languages.map((lang, index) => (
          <div key={index}>{lang}</div>
        ))}

        <h3>Frameworks</h3>
        {Skills.Frameworks.map((fw, index) => (
          <div key={index}>{fw}</div>
        ))}
      </div>
    );
  }
}

export default Example2;