import {
  Container,
  Box,
  Image,
  Link,
  List,
  ListItem,
  Heading,
} from '@chakra-ui/react';
import logo from './img/LOGO.png';

const Header = ({ setViewState }) => {
  return (
    <header style={{ marginBottom: '3em' }}>
      <Container py={4}>
        <List
          display={'flex'}
          justifyContent={'space-between'}
          marginBottom={'5em'}
        >
          <ListItem
            color={'gray.100'}
            fontWeight={'100'}
            letterSpacing={'wider'}
            textTransform={'uppercase'}
          >
            <Link
              style={{ textDecoration: 'none' }}
              href='#'
              onClick={() => setViewState('home')}
            >
              Home
            </Link>
          </ListItem>
          <ListItem
            color={'gray.100'}
            fontWeight={'100'}
            letterSpacing={'wider'}
            textTransform={'uppercase'}
          >
            <Link
              style={{ textDecoration: 'none' }}
              href='#'
              onClick={() => setViewState('contact')}
            >
              Contact us
            </Link>
          </ListItem>
          <ListItem
            color={'gray.100'}
            fontWeight={'100'}
            letterSpacing={'wider'}
            textTransform={'uppercase'}
          >
            <Link
              style={{ textDecoration: 'none' }}
              href='#'
              onClick={() => setViewState('menu')}
            >
              Menu
            </Link>
          </ListItem>
        </List>
        <Box>
          <Heading as={'h1'}>
            <Image src={logo} alt={`BB's DreamLand logo`} margin={'auto'} />
          </Heading>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
