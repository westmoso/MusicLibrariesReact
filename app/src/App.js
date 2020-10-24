import React from 'react';
import logo from './logo.svg'; //source is like 28
import axios from 'axios';
import './App.css';

class App extends React.Component {

      state = {
      music: []
    }

  componentDidMount() {
    axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
      .then(res => {
        const music = res.data;
        this.setState({ music });
      })
  }

render() {
  
  return (


    <div className="App">
      <header className="App-header">
        {console.log(this.state.music)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
