import React from 'react';
import axios from 'axios';
import './App.css';
import ReactTable from "react-table";  
import Fuse from 'fuse.js';


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
        {console.log(Fuse, this.state.music)}        
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
