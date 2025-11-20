import React from "react";

class App extends React.Component {
  state = {
    message: "",
    inputValue: "",
    serverResponse: ""
  };

  async componentDidMount() {
    const response = await fetch("/api/hello");
    const data = await response.text();
    this.setState({ message: data });
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

    handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: this.state.inputValue })
      });

      const data = await response.text(); // ⬅️ changed from json() to text()

      this.setState({ serverResponse: data }); // ⬅️ use the string directly
    } catch (err) {
      console.error("Error posting to server:", err);
    }
  };


  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Type something…"
          />
          <button type="submit">Send</button>
        </form>

        {this.state.serverResponse && (
          <h2>Server says: {this.state.serverResponse}</h2>
        )}
      </div>
    );
  }
}

export default App;