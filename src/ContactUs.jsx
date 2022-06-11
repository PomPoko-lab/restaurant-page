import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  SlideFade,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';

const ContactUs = () => {
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
      <Container px={'2'}>
        <Text
          style={{ letterSpacing: '0.2em' }}
          lineHeight={'2'}
          fontSize={'xl'}
          textAlign={'center'}
          color={'gray.100'}
          fontWeight={'100'}
          textTransform={'uppercase'}
          marginBottom={'3em'}
        >
          Get in Touch
        </Text>

        <FormControl>
          <Container centerContent={true} marginBottom={'3em'} px={'5em'}>
            <FormLabel
              htmlFor='name'
              lineHeight={'2'}
              color={'gray.100'}
              fontWeight={'100'}
              textTransform={'uppercase'}
              letterSpacing={'widest'}
            >
              Name
            </FormLabel>
            <Input
              id='name'
              type={'text'}
              color={'whiteAlpha.800'}
              borderTop={'none'}
              borderX={'none'}
              borderRadius={'none'}
              marginBottom={'2em'}
              textAlign={'center'}
              variant={'outline'}
            ></Input>
            <FormLabel
              htmlFor='email'
              lineHeight={'2'}
              color={'gray.100'}
              fontWeight={'100'}
              textTransform={'uppercase'}
              letterSpacing={'widest'}
            >
              Email
            </FormLabel>
            <Input
              id='email'
              type={'email'}
              color={'whiteAlpha.800'}
              borderTop={'none'}
              borderX={'none'}
              borderRadius={'none'}
              textAlign={'center'}
            ></Input>
          </Container>
          <Container centerContent={true}>
            <Button variant={'outline'} color={'whiteAlpha.900'}>
              Submit
            </Button>
          </Container>
        </FormControl>
      </Container>
    </SlideFade>
  );
};

export default ContactUs;
