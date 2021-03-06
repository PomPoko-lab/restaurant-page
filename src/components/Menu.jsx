import { Container, List, SlideFade } from '@chakra-ui/react';
import { useState } from 'react';
import MenuItem from './MenuItem';
import Arrows from './Arrows';
import data from '../items.json';

const Menu = () => {
  const { items: importedItems } = data;

  const [slide, setSlide] = useState(0);

  const carouselStyle = {
    transition: 'all 0.5s ease-in-out',
    ml: `-${slide * 100}%`,
    display: 'flex',
    height: '20em',
    width: 'full',
  };

  const toggleRight = () => {
    setSlide((prevSlide) =>
      prevSlide === importedItems.length - 1 ? 0 : prevSlide + 1
    );
  };

  const toggleLeft = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? importedItems.length - 1 : prevSlide - 1
    );
  };

  return (
    <SlideFade
      in={true}
      offsetY={'-20px'}
      transition={{ enter: { duration: 0.75, delay: 0.5 } }}
      unmountOnExit
    >
      <Container
        as='section'
        centerContent={true}
        px={'12'}
        position={'relative'}
      >
        <Arrows toggleRight={toggleRight} toggleLeft={toggleLeft} />
        <Container p='0' paddingTop='5em' height='full' overflow='hidden'>
          <List {...carouselStyle}>
            {importedItems.map((item, index) => (
              <MenuItem key={`slide-${index}`} item={item} />
            ))}
          </List>
        </Container>
      </Container>
    </SlideFade>
  );
};

export default Menu;
