import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// packages don't require references

// self created files you need to do absolute file references
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
// Create a new compolnent and trhis component should produce htmkl


const API_KEY = 'AIzaSyD5sI8fctkDSssmGBPeS3oj8zyN_hlNh2E'


//This is a class and basically acts
// => is the equivalent of using the function keyword in ES6
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos})
    });

  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
    //This is called passing a prop around
  }
}


// Need to instansiate a component before you use it

//Take this component and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'))
