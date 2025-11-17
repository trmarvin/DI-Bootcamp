import { useEffect, useState } from "react";

function Color() {
    const [favoriteColor, setFavoriteColor] = useState("red");

    useEffect(() => {
        alert("useEffect reached");
        setFavoriteColor("yellow");
    }, []);

    const changeToBlue = () => {
        setFavoriteColor("blue");
    };

    return (
        <div>
            <h3>My favorite color is <i>{favoriteColor}</i>.</h3>

            <button onClick={changeToBlue}>
                Change color to blue.
            </button>
        </div>
    );
}

export default Color;