/* In this exercise, you will use object oriented programming concepts to define and use a custom 
object in JavaScript.

Create a class named Video. The class should be constructed with the following parameters:
title (a string)
uploader (a string, the person who uploaded it)
time (a number, the duration of the video - in seconds) */

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        return `${this.uploader} watched all the ${this.time} seconds of ${this.title}!`
    }
}

/* Create a method called watch() which displays a string as follows:
“uploader parameter watched all time parameter of title parameter!” */

/* Instantiate a new Video instance and call the watch() method. */

const catVid = new Video("Cute Kitty", "trmarvin", 30);
console.log(catVid.watch());

/* Instantiate a second Video instance with different values. */

const dogVid = new Video("Cute Puppy", "jrmarvin", 20);
console.log(dogVid.watch());

/* Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
Think of the best data structure to save this information within the array. */

const videoData = [
  ["Hamster Dance", "nrmarvin", 45],
  ["Parrot Singing", "rjmarvin", 60],
  ["Mutant Turtle", "demarvin", 120],
  ["Marmot Sleeping", "trmarvin", 75],
  ["Goldfish Swish", "jrmarvin", 90],
];

/* Bonus: Loop through the array to instantiate those instances. */
const videos = videoData.map(
  ([title, uploader, time]) => new Video(title, uploader, time)
);

videos.forEach(video => console.log(video.watch()));