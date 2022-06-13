import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  SlideFade,
} from '@chakra-ui/react';

const ContactUs = () => {
  return (
    <SlideFade
      in={true}
      offsetY={'-20px'}
      transition={{ enter: { duration: 0.75, delay: 0.5 } }}
      unmountOnExit
    >
      <Container as='section' px={'2'}>
        <Heading
          style={{ letterSpacing: '0.2em' }}
          lineHeight={'2'}
          fontSize={'xl'}
          textAlign={'center'}
          color={'gray.100'}
          fontWeight={'hairline'}
          textTransform={'uppercase'}
          marginBottom={'3em'}
        >
          Get in Touch
        </Heading>
        <Box as='form'>
          <Container marginBottom={'3em'} px={'5em'}>
            <FormControl isRequired>
              <FormLabel
                htmlFor='name'
                lineHeight={'2'}
                color={'gray.100'}
                fontWeight={'100'}
                textTransform={'uppercase'}
                letterSpacing={'widest'}
                textAlign='center'
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
              ></Input>
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                htmlFor='email'
                lineHeight={'2'}
                color={'gray.100'}
                fontWeight={'100'}
                textTransform={'uppercase'}
                letterSpacing={'widest'}
                textAlign='center'
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
            </FormControl>
          </Container>
          <Button
            variant={'outline'}
            color={'whiteAlpha.900'}
            display='block'
            mx='auto'
          >
            Submit
          </Button>
        </Box>
      </Container>
    </SlideFade>
  );
};

export default ContactUs;
