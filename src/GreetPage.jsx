import { Container, Text } from '@chakra-ui/react';

const GreetPage = () => {
  return (
    <Container px={'2'}>
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
    </Container>
  );
};

export default GreetPage;
