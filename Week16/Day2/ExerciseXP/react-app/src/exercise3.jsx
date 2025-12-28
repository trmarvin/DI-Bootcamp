/* reate a new Class Component called Exercise that contains some HTML tags.
create a <h1> tag and set its color to red, and the background color to lightblue.
create a paragraph, a link, a form, an image and a list.
Import Exercise component to the App.js file and display it. */

import React from 'react';
import './exercise.css';

class Exercise extends React.Component {
    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div>
                <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>Exercise 3</h1>
        
                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut convallis erat. 
                    Donec auctor at ligula et elementum. Proin tincidunt urna at lorem consequat, bibendum 
                    scelerisque est lacinia. Aliquam ut velit sed sapien consectetur maximus. Vivamus nec 
                    orci a sem fringilla hendrerit vel at ex. Duis non venenatis sem. Sed blandit, sem id 
                    semper porta, ipsum nisi gravida dui, et auctor elit odio nec elit. Ut nunc neque, 
                    rhoncus nec leo sed, aliquet porta odio. Mauris eget dolor tortor. Nam metus ex, 
                    maximus ut nulla at, aliquet porttitor sapien.</p>

                <a href="/">Read more</a>

                <form>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" />
                    <button type="submit">Submit</button>
                </form>

                < img
                    src="https://www.pexels.com/photo/beautiful-sunset-over-ocean-shore-18968280/" 
                    alt="sunset"
                    width="300"
                />
                    
                <ul>
                    <li>Step 1</li>
                    <li>Step 2</li>
                    <li>Step 3</li>
                </ul>
            </div>
        );
    }
}

export default Exercise;