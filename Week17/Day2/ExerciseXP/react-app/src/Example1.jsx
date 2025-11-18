import React, { Component } from "react";
import data from "./resume.json";

class Example1 extends Component {
  render() {
    const { SocialMedias } = data;

    return (
      <div>
        <h2>Social Medias</h2>
        {SocialMedias.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  }
}

export default Example1;