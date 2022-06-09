import { Container, Text } from '@chakra-ui/react';
const Home = () => {
  return (
    <section>
      <Container px='2' marginTop='3em'>
        <Text
          style={{ letterSpacing: '0.2em' }}
          lineHeight='2'
          fontSize='lg'
          textAlign='center'
          color='whiteAlpha.900'
          fontWeight='100'
        >
          AUTHENTIC FINAL FANTASY
        </Text>
        <Text
          style={{ letterSpacing: '0.2em' }}
          lineHeight='2'
          fontSize='lg'
          textAlign='center'
          color='whiteAlpha.900'
          fontWeight='100'
        >
          FOOD
        </Text>
        <Text
          style={{ letterSpacing: '0.2em' }}
          lineHeight='2'
          fontSize='lg'
          textAlign='center'
          color='whiteAlpha.900'
          fontWeight='100'
        >
          IN SHIROGANE
        </Text>
      </Container>
    </section>
  );
};

export default Home;
