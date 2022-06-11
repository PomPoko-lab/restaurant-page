import {
  Container,
  Box,
  Text,
  Heading,
  Image,
  SlideFade,
  useMediaQuery,
  useDisclosure,
} from '@chakra-ui/react';
import steamedBuns from './img/steamedbuns.jpg';
import fiveStars from './img/5stars.png';
import fourStars from './img/4stars.png';
import Arrows from './Arrows';
import { useEffect } from 'react';

const Menu = () => {
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
      <Container centerContent={true} px={'12'} position={'relative'}>
        <Arrows />
        <Box
          borderRadius={'sm'}
          shadow={'dark-lg'}
          width={'100%'}
          minHeight={'100%'}
          bg={'gray.50'}
          p={8}
          pt={'38%'}
          position={'relative'}
        >
          <Box
            maxwidth={'12em'}
            minWidth={'10em'}
            position={'absolute'}
            top={'-25%'}
            left={'50%'}
            transform={'auto'}
            translateX={'-50%'}
            shadow={'md'}
          >
            <Image src={steamedBuns} alt='Preview image of Steamed Buns' />
          </Box>
          <Heading
            size={'md'}
            fontWeight={'extrabold'}
            marginBottom={'2'}
            color={'gray.800'}
          >
            Basket of Steamed Buns
          </Heading>
          <Box display={'flex'} gap={'0.5em'} marginBottom={'5'}>
            <Text color={'gray.800'}>5.0</Text>
            <Box maxWidth={'5em'} my={'auto'}>
              <Image src={fiveStars} alt='star rating'></Image>
            </Box>
            <Text color={'gray.800'}>(52)</Text>
          </Box>
          <Text color={'gray.700'} fontWeight='bold' lineHeight={'5'}>
            Meat buns so fresh that they have yet to be removed from the
            steaming basket.
          </Text>
        </Box>
      </Container>
    </SlideFade>
  );
};

export default Menu;
