import { Container, Box, Image } from '@chakra-ui/react';
import { List, ListItem } from '@chakra-ui/react';
import logo from './img/LOGO.png';

const Header = () => {
  return (
    <header>
      <Container>
        <Box py={4}>
          <List
            display='flex'
            justifyContent='space-between'
            marginBottom='10em'
          >
            <ListItem
              color='whiteAlpha.900'
              fontWeight='100'
              letterSpacing='wider'
            >
              HOME
            </ListItem>
            <ListItem
              color='whiteAlpha.900'
              fontWeight='100'
              letterSpacing='wider'
            >
              CONTACT US
            </ListItem>
            <ListItem
              color='whiteAlpha.900'
              fontWeight='100'
              letterSpacing='wider'
            >
              MENU
            </ListItem>
          </List>
          <Box>
            <Image src={logo} alt='LOGO' margin='auto' />
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
