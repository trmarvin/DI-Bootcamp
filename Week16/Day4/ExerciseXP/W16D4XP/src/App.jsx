import Car from "./Components/Car.jsx";
import Events from "./Components/Events.jsx";
import Phone from "./Components/Phone";
import Color from "./Components/Color.jsx";

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div>
      <div>
        <Car model={carinfo.model} />
      </div>
      <div>
        <Events />
      </div>
      <div>
        <Phone />
      </div>
      <div>
        <Color />
      </div>
    </div>
  );
}


export default App;