import React from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', music:[]};

  }

  handleChange(event) {    this.setState({value: event.target.value});  }

  async componentDidMount() {
    const response = await axios.get(`http://www.devcodecampmusiclibrary.com/api/music`);
    this.setState({ music: response.data});
  }

  render() {
  return (
    
    <div className="App">
      <NavBar />     
      <form onSubmit={this.handleSubmit}>
        <label>
          Song, Title, Album, or Date: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="submit" value="Submit" />
      </form> 
        <div className="music">
          <h2>Track Details</h2>
          {this.state.music &&
            this.state.music.map((music, index) => {
              const artist = music.artist;
              return (
                <div className="music" key={index}>
                  <h2>{music.name}</h2>
                  <div className="details">
                    <p>Artist: {artist}</p>
                    <p>Album: {music.album}</p>
                    <p>Genre: {music.genre}</p>
                    <p>Released: {music.releaseDate}</p>
                  </div>
                </div>
              );
            })}
        </div>

    </div>
  );
}
}

export default App;

