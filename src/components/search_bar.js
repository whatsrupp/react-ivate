import React, {Component} from 'react'
// curly braces is basically like writing - exports sub module as a usable variable
// const Component = React.Component


// This is called a functional compenent as it is literally made up of a function
// const SearchBar = () => {
//   return <input />;
// };

// extends gives search bar all the functionality of a react component
class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  // Every react component needs to have a render function
  // ES6 class function definition
  render() {
    // curly braces are important!
    // OnChange is a very specific react event handler name is important
    // Single arguments don't need brackets before a =>
    // manipulate state using the writer method set State
    return(
      <div>
        <input
        //value turns the text in the text box into a controlled form element
        // The value of the state dictates what's being displayed rather than the element controlling the state
        // When the state changes of an object it forces the element and all children to re-render
         value={this.state.term}
         onChange={ event => this.setState({ term: event.target.value }) } />
      </div>
    );
    // render needs to return some jsx or will cause an error
  }

}

// There is a second type of class called a class component

export default SearchBar;
