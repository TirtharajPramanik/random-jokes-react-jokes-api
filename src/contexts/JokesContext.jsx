import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const JokesContext = createContext();

const proxy_uri = 'https://v2.jokeapi.dev/joke/';

const JokesContextProvider = ({ children }) => {
  const [joke, setJoke] = useState();
  const fetchData = async () => {
    try {
      const res = await axios.get(proxy_uri + 'Any');
      const data = await res.data;
      setJoke(data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <JokesContext.Provider value={{ joke, fetchData }} children={children} />
  );
};

export default JokesContextProvider;
