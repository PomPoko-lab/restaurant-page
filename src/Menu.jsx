import { Container, SlideFade, Slide, useDisclosure } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import Arrows from './Arrows';
import { useEffect, useState } from 'react';
import data from './items.json';

let currIndex = 1;

const Menu = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { items: importedItems } = data;

  const [item, setItem] = useState(importedItems[currIndex]);

  useEffect(() => {
    onToggle();
  }, []);

  const toggleRight = () => {
    currIndex === importedItems.length - 1 ? (currIndex = 0) : currIndex++;
    setItem(importedItems[currIndex]);
  };

  const toggleLeft = () => {
    currIndex === 0 ? (currIndex = importedItems.length - 1) : currIndex--;
    setItem(importedItems[currIndex]);
  };

  return (
    <SlideFade
      in={isOpen}
      offsetY={'-20px'}
      transition={{ enter: { duration: 0.75, delay: 0.5 } }}
    >
      <Container centerContent={true} px={'12'} position={'relative'}>
        <Arrows toggleRight={toggleRight} toggleLeft={toggleLeft} />

        <MenuItem item={item} />
      </Container>
    </SlideFade>
  );
};

export default Menu;
