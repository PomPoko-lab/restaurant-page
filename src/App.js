import { Flex } from '@chakra-ui/react';

import { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [viewState, setViewstate] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setViewstate('home');
    }, 1500);
  }, []);

  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'space-between'}
      className='App'
    >
      <Header setViewState={setViewstate} />
      <Home viewState={viewState} />
      <Footer />
    </Flex>
  );
}

export default App;
