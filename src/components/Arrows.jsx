import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { Container, Box } from '@chakra-ui/react';

const Arrows = ({ toggleRight, toggleLeft }) => {
  return (
    <Container
      zIndex='1'
      display={'flex'}
      justifyContent={'space-between'}
      position={'absolute'}
      top={'50%'}
      p={0}
    >
      <Box as='button' bg={'whiteAlpha.300'} borderRadius={'3xl'}>
        <ChevronLeftIcon
          w={10}
          h={'auto'}
          color={'gray.50'}
          onClick={toggleLeft}
        />
      </Box>
      <Box as='button' bg={'whiteAlpha.300'} borderRadius={'3xl'}>
        <ChevronRightIcon
          w={10}
          h={'auto'}
          color={'gray.50'}
          onClick={toggleRight}
        />
      </Box>
    </Container>
  );
};

export default Arrows;
