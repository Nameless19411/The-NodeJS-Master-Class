/*
 * Title: Basic Node Example
 * Description: Simple file that declares a few functions and invokes them.
 * Author: Leslie Lewis
 * Date: 10/24/17
 *
 */


// Dependencies
const mathLib = require('./lib/math');
// const jokesLib = require('./lib/jokes');
const newJokes = require('jokes')

// App object
const app = {};


// Configuration
app.config = {
    'timeBetweenJokes' : 1000
};


// Function that prints a random joke
app.printAJoke = () => {
    const joke = newJokes().text
    const author = newJokes().author
    console.log(`${author}:\n ${joke}`)
};


// Function that loops indefinitely, calling the printAJoke function as it goes
app.indefiniteLoop = () => {

    // Create the interval, using the config variable defined above
    setInterval(app.printAJoke,app.config.timeBetweenJokes);
};


// Invoke the loop
app.indefiniteLoop();
