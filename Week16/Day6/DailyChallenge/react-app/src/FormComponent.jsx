import React from "react";

function FormComponent(props) {
  const {
    firstName,
    lastName,
    age,
    gender,
    destination,
    lactoseFree
  } = props.data;

  return (
    <main>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={props.handleChange}
        />
        <br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={props.handleChange}
        />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={age}
          onChange={props.handleChange}
        />
        <br />

        {/* Gender radios */}
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />

        {/* Destination select */}
        <label>
          Destination:
          <select
            name="destination"
            value={destination}
            onChange={props.handleChange}
          >
            <option value="">-- Choose destination --</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
            <option value="Norway">Norway</option>
            <option value="Israel">Israel</option>
          </select>
        </label>
        <br />

        {/* Dietary checkbox */}
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={lactoseFree}
            onChange={props.handleChange}
          />
          Lactose free
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      {/* Display the form data as the user types/selects */}
      <h2>Entered information:</h2>
      <p>
        Your name: {firstName} {lastName}
      </p>
      <p>Your age: {age}</p>
      <p>Your gender: {gender}</p>
      <p>Your destination: {destination}</p>
      <p>Lactose free: {lactoseFree ? "Yes" : "No"}</p>
    </main>
  );
}

export default FormComponent;