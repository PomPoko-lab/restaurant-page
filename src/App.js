import { Flex } from '@chakra-ui/react';

import { useState } from 'react';

import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

function App() {
  const [viewState, setViewstate] = useState('home');

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
