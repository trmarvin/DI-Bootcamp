import React from "react";
// import ErrorBoundary from "./ErrorBoundary.jsx";
import Color from "./Components/Color.jsx";

// class BuggyCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   handleClick = () => {
//     this.setState(prevState => {
//       if (prevState.counter + 1 === 5) {
//         throw new Error("I crashed!");
//       }
//       return { counter: prevState.counter + 1 };
//     });
//   };

//   render() {
//     return (
//       <h1 onClick={this.handleClick}>
//         {this.state.counter}
//       </h1>
//     );
//   }
// }

// Simulation 1:

// function App() {
//   return (
//     <div className="App">
//       <ErrorBoundary>
//         <BuggyCounter />
//         <BuggyCounter />
//       </ErrorBoundary>
//     </div>
//   );
// }

// Simulation 2:

// function App() {
//   return (
//     <div className="App">

//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>

//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>

//     </div>
//   );
// }

// Simulation 3:

// function App() {
//   return (
//     <div className="App">
//       <h2>Other UI that will also “die”</h2>
//       <BuggyCounter />
//     </div>
//   );
// }

// Color section

function App() {
  return (
    <div>
        <Color />
    </div>
  )
}


export default App;