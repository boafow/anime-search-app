import React, { Component } from 'react';
import SearchBar from './components/SearchBar';


export class App extends Component {
  
  render() {
    return (
      <div className = 'App'>
        <h1 style={h1Style}>Anime Search App</h1>
        <SearchBar/>
      </div>
    )
  }
}

export default App;

const h1Style = {
  width: '100%',
  textAlign: 'center'
}
