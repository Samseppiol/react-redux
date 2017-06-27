// Importing react as a javascript module
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';



// Importing components 
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Declaring youtube api key
const API_KEY = 'AIzaSyAEHNh8n3YmrJuepd4_bhzzTEgDfE6s_tk'



// Want to create a new component
//  it should produce some html 

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'real madrid'}, (videos) => {
      // this.setState({videos: videos})
      this.setState({ videos })
    });
  }


  render () {
    return (
    <div> 
      <SearchBar />
      <VideoDetail  video={this.state.videos[0]}/>
      <VideoList videos={this.state.videos}   />
    </div>
    );
  };
}

// Take the component's HTML and display it on the page


// Wont work, react is undefined
// Need to import React at the top of the file.
ReactDOM.render(<App />, document.querySelector('.container') );