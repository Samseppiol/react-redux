// Importing react as a javascript module
import React from 'react';
import ReactDOM from 'react-dom';
// Want to create a new component
//  it should produce some html 

const App = () => {
  return <div>Hi!</div>;
}

// Take the component's HTML and display it on the page


// Wont work, react is undefined
// Need to import React at the top of the file.
ReactDOM.render(<App />, document.querySelector('.container') );