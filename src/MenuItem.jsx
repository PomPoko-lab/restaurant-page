import { Box, Text, Heading, Image } from '@chakra-ui/react';
import fiveStars from './img/5stars.png';
import fourStars from './img/4stars.png';

const MenuItem = ({ item }) => {
  return (
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
        <Image
          src={`${process.env.PUBLIC_URL}${item.imagePath}`}
          alt='Image of Menu Item'
        />
      </Box>
      <Heading
        size={'md'}
        fontWeight={'extrabold'}
        marginBottom={'2'}
        color={'gray.800'}
      >
        {item.name}
      </Heading>
      <Box display={'flex'} gap={'0.5em'} marginBottom={'5'}>
        <Text color={'gray.800'}>5.0</Text>
        <Box maxWidth={'5em'} my={'auto'}>
          <Image
            src={+item.rating === 5 ? fiveStars : fourStars}
            alt='star rating'
          ></Image>
        </Box>
        <Text color={'gray.800'}>({item.reviews})</Text>
      </Box>
      <Text color={'gray.700'} fontWeight='bold' lineHeight={'5'}>
        {item.description}
      </Text>
    </Box>
  );
};

export default MenuItem;