import {
  Container,
  Box,
  Image,
  Link,
  List,
  ListItem,
  Heading,
  Fade,
  ScaleFade,
} from '@chakra-ui/react';
import logo from '../img/LOGO.png';

const Header = ({ setViewState }) => {
  return (
    <Container as='header' py={4} marginBottom='3em'>
      <Fade in transition={{ enter: { duration: 1, delay: 1 } }}>
        <Box as='nav'>
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
        </Box>
      </Fade>
      <Box>
        <Heading as={'h1'}>
          <ScaleFade
            in
            initialScale={0.7}
            transition={{ enter: { duration: 0.75, delay: 0.25 } }}
          >
            <Image src={logo} alt={`BB's DreamLand logo`} margin={'auto'} />
          </ScaleFade>
        </Heading>
      </Box>
    </Container>
  );
};

export default Header;
