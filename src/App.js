import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './style.css';

export default function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetchMemes();
  }, []);

  useEffect(() => {
    console.log(memes);
  }, [memes]);

  const fetchMemes = async () => {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const data = await response.json();
    setMemes(data.data.memes);
  };

  return (
    <div className="App">
      {memes &&
        memes.map((meme) => {
          return (
            <div key={meme.id}>
              <h4>{meme.name}</h4>
              <img src={meme.url} style={{ width: '200px', height: '200px' }} />
            </div>
          );
        })}
    </div>
  );
}
