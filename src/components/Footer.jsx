import { Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto' }}>
      <Text
        style={{ letterSpacing: '0.4em', fontSize: '0.5rem' }}
        color={'whiteAlpha.500'}
        fontWeight={'100'}
        textTransform={'uppercase'}
        fontSize={'xs'}
        textAlign={'center'}
        pb={1}
      >
        Crafted by CraftyBi with ReactJS
      </Text>
    </footer>
  );
};

export default Footer;
