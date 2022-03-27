import React, { useContext } from 'react';
import './App.css';
import { JokesContext } from './contexts/JokesContext';
import { GiDiamondsSmile } from 'react-icons/gi';

function App() {
  const { joke, fetchData } = useContext(JokesContext);
  return (
    <div className="app">
      <h1 className="header">Random Jokes</h1>
      {joke && (
        <div>
          <div className="info">
            <h3 className="category">Category: {joke.category}</h3>
            {joke.safe ? (
              <h3 className="safe">Safe</h3>
            ) : (
              <h3 className="not-safe">Not-Safe</h3>
            )}
          </div>
          <section className="joke">
            {joke.type == 'single' ? (
              <big>{joke.joke}</big>
            ) : (
              <div>
                <h4>{joke.setup}</h4>
                <big>{joke.delivery}</big>
              </div>
            )}
          </section>
        </div>
      )}
      <GiDiamondsSmile className="smiley" size="3rem" />
      <button
        className="next"
        onClick={() => {
          fetchData();
        }}
      >
        Joke
      </button>
    </div>
  );
}

export default App;
