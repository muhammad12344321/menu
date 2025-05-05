import React, { useState } from 'react';
import { Header } from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import HomeCategoria from '../Home/HomeCategoria/HomeCategoria';

export const Home = () => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <Header />
      <Search query={query} setQuery={setQuery} />
      <HomeCategoria query={query} />
    </div>
  );
};
