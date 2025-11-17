import { useState } from "react";

function Events() {
    const clickMe = () => {
        alert("I was clicked");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            alert(event.target.value);
        }
    };

    const [isToggleOn, setIsToggleOn] = useState(true);

    const toggleButton = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div>
            <button onClick={clickMe}>Click me</button>
            
            <br /><br />
            
            <input type="text" placeholder="Type something and press enter" onKeyDown={handleKeyDown} />
            
            <br /><br />
            
            <button onClick={toggleButton}>
                {isToggleOn ? "ON" : "OFF"}
            </button>
        </div>
    );
}

export default Events;