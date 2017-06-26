import React from 'react';

// Want to create a new component
//  it should produce some html 

const App = function() {
  return <div>Hi!</div>;
}

// Take the component's HTML and display it on the page


// Wont work, react is undefined
// Need to import React at the top of the file.
React.render(App);