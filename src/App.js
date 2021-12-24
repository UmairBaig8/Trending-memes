import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './style.css';

export default function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    const response = await Axios('https://api.imgflip.com/get_memes');
    setMemes(response.data.memes);
  };

  return (
    <div className="App">
      {memes &&
        memes.map((meme) => {
          return (
            <div key={meme.id}>
              <h4>{meme.name}</h4>
              <imp
                src={meme.url}
                style={{ width: meme.width, height: meme.height }}
              />
            </div>
          );
        })}
    </div>
  );
}
