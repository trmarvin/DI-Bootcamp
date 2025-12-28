import { useState } from "react";
import Garage from "./Garage.jsx";

function Car(props) {
    const [color, setColor] = useState("red");
    return (
        <div>
            <h2>This car is {color} {props.model}.</h2>
            <Garage size="small" />
        </div>
    );
}

export default Car;