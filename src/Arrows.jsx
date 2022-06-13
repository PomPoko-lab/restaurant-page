import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { Container, Box, Link } from '@chakra-ui/react';

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
        {/* <Link as={'button'}> */}
        <ChevronLeftIcon
          w={10}
          h={'auto'}
          color={'gray.50'}
          onClick={toggleLeft}
        />
        {/* </Link> */}
      </Box>
      <Box as='button' bg={'whiteAlpha.300'} borderRadius={'3xl'}>
        {/* <Link as={'button'}> */}
        <ChevronRightIcon
          w={10}
          h={'auto'}
          color={'gray.50'}
          onClick={toggleRight}
        />
        {/* </Link> */}
      </Box>
    </Container>
  );
};

export default Arrows;
