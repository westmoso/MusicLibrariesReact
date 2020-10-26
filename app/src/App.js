import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import NavBar from './components/navbar'
import Search from './components/search'


function App() {
  const [music, setMusic] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://www.devcodecampmusiclibrary.com/api/music'
    );

    setMusic(response.data);
  };

  return (
    <div className="App">
      <NavBar />
      <Search />
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Retrieve Music
        </button>
        <br />
      </div>

      <div className="music">
        {music &&
          music.map((music, index) => {
            const artist = music.artist;
            return (
              <div className="music" key={index}>
                <h2>{music.name}</h2>

                <div className="details">
                  <p>Artist: {artist}</p>
                  <p>Album: {music.album} pages</p>
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


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
