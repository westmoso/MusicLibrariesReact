import React from 'react';
import axios from 'axios';

import API from '../api/music';

// class MusicTable extends Component {
//     state = {
//         value = null,
//         value2 = null
//     }
// }

export default class musicList extends React.Component {
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
    