import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true     // 🔹 NEW state property
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  // 🔹 Handler for the Delete button
  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>{this.state.favoriteColor}</h1>

        {/* 🔹 Render Child only if show === true */}
        {this.state.show && <Child />}

        <button onClick={this.deleteChild}>Delete</button>
      </div>
    );
  }
}

// 🔹 NEW CHILD COMPONENT (same file)
class Child extends React.Component {
  componentWillUnmount() {
    alert("Child component unmounted!");
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

export default Color;


// import React from "react";

// class Color extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favoriteColor: "red"
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favoriteColor: "yellow" });
//     }, 1000);
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("in getSnapshotBeforeUpdate");
//     // Must return something (can be null)
//     return null;
//   }

//   componentDidUpdate() {
//     console.log("after update");
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.favoriteColor}</h1>
//       </div>
//     );
//   }
// }

// export default Color;

// import React from "react";

// class Color extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favoriteColor: "red"
//     };
//   }

//   componentDidMount() {
//     // After mount, change color to yellow
//     setTimeout(() => {
//       this.setState({ favoriteColor: "yellow" });
//     }, 1000);
//   }

//   componentDidUpdate() {
//     console.log("after update");
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.favoriteColor}</h1>
//       </div>
//     );
//   }
// }

// export default Color;


// import React from "react";

// class Color extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favoriteColor: "red"
//     };
//   }

//   componentDidMount() {
//     // This will run once after the component has mounted
//     setTimeout(() => {
//       this.setState({ favoriteColor: "yellow" });
//     }, 1000);
//   }

//   shouldComponentUpdate() {
//     return true;    // change to false to block updates
//   }

//   changeToBlue = () => {
//     this.setState({ favoriteColor: "blue" });
//   };

//   render() {
//     return (
//       <div>
//         <h3>My favorite color is <i>{this.state.favoriteColor}</i>.</h3>
//         <button onClick={this.changeToBlue}>Change color to blue</button>
//       </div>
//     );
//   }
// }

// export default Color;