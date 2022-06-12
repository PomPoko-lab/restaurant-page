import { Box, Container, SlideFade, useDisclosure } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import Arrows from './Arrows';
import { useEffect, useState } from 'react';
import data from './items.json';

const Menu = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { items: importedItems } = data;

  const [slide, setSlide] = useState(1);

  useEffect(() => {
    onToggle();
  }, []);

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
      in={isOpen}
      offsetY={'-20px'}
      transition={{ enter: { duration: 0.75, delay: 0.5 } }}
    >
      <Container centerContent={true} px={'12'} position={'relative'}>
        <Arrows toggleRight={toggleRight} toggleLeft={toggleLeft} />
        <Container p='0' paddingTop='5em' height='full' overflow='hidden'>
          <Box {...carouselStyle}>
            {importedItems.map((item, index) => (
              <MenuItem key={`slide-${index}`} item={item} />
            ))}
          </Box>
        </Container>
      </Container>
    </SlideFade>
  );
};

export default Menu;
