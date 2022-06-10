import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { Container, Box, Link } from '@chakra-ui/react';

const Arrows = () => {
  return (
    <Container
      display={'flex'}
      justifyContent={'space-between'}
      position={'absolute'}
      top={'50%'}
      p={0}
    >
      <Box bg={'whiteAlpha.300'} borderRadius={'3xl'}>
        <Link>
          <ChevronLeftIcon w={10} h={'auto'} color={'gray.50'} />
        </Link>
      </Box>
      <Box bg={'whiteAlpha.300'} borderRadius={'3xl'}>
        <Link>
          <ChevronRightIcon w={10} h={'auto'} color={'gray.50'} />
        </Link>
      </Box>
    </Container>
  );
};

export default Arrows;
