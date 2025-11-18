// App.js
import React, { Component } from "react";
import FormComponent from "./FormComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      lactoseFree: false, // checkbox
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;

    // Ternary to check checkbox status
    // if it's a checkbox, use checked (true/false), otherwise use value
    this.setState(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      firstName,
      lastName,
      age,
      gender,
      destination,
      lactoseFree
    } = this.state;

    // Build the query string manually
    let query = `?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(
      lastName
    )}&age=${encodeURIComponent(age)}&gender=${encodeURIComponent(
      gender
    )}&destination=${encodeURIComponent(destination)}`;

    // Only add lactoseFree if checked; use "on" to match the example
    if (lactoseFree) {
      query += `&lactoseFree=on`;
    }

    // Send data in the URL
    window.location.href = `http://localhost:3000/${query}`;
  }

  render() {
    return (
      <div>
        <FormComponent
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;