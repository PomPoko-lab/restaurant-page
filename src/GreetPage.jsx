import {
  Container,
  Text,
  Box,
  SlideFade,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';

const GreetPage = () => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    onToggle();
  }, []);

  return (
    <SlideFade
      in={isOpen}
      offsetY={'-20px'}
      transition={{ enter: { duration: 0.75, delay: 0.5 } }}
    >
      <Container as='section' px={'2'}>
        <Box as='h2'>
          <Text
            style={{ letterSpacing: '0.2em' }}
            lineHeight={'2'}
            fontSize={'lg'}
            textAlign={'center'}
            color={'whiteAlpha.900'}
            fontWeight={'100'}
            textTransform={'uppercase'}
          >
            Authentic Final Fantasy
          </Text>
          <Text
            style={{ letterSpacing: '0.2em' }}
            lineHeight={'2'}
            fontSize={'lg'}
            textAlign={'center'}
            color={'whiteAlpha.900'}
            fontWeight={'100'}
            textTransform={'uppercase'}
          >
            food
          </Text>
          <Text
            style={{ letterSpacing: '0.2em' }}
            lineHeight={'2'}
            fontSize={'lg'}
            textAlign={'center'}
            color={'whiteAlpha.900'}
            fontWeight={'100'}
            textTransform={'uppercase'}
          >
            in shirogane
          </Text>
        </Box>
      </Container>
    </SlideFade>
  );
};

export default GreetPage;
