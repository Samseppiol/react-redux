// Importing react as a javascript module
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


// Importing components 
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAEHNh8n3YmrJuepd4_bhzzTEgDfE6s_tk'

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
})
// Want to create a new component
//  it should produce some html 

const App = () => {
  return (
  <div> 
    <SearchBar />
  </div>
  );
};

// Take the component's HTML and display it on the page


// Wont work, react is undefined
// Need to import React at the top of the file.
ReactDOM.render(<App />, document.querySelector('.container') );