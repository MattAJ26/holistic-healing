import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  useDisclosure, 
  Box, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  Button, 
  VStack, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalFooter, 
  ModalBody, 
  ModalCloseButton, 
  Flex, 
  Heading, 
  Text 
} from '@chakra-ui/react';

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6thn1ir', 'template_2de1svh', form.current, 'baT40mDhsq67bU9vc')
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); 
          onOpen();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        align="center"
        p={8}
        mt={10}
        bg="gray.50"
      >
       
        <Box
          flex="1"
          p={8}
          bg="white"
          borderWidth={1}
          borderRadius="lg"
          boxShadow="xl"
          // Set width to 80% on large screens
          width={{ base: "100%", lg: "80%" }}
        >
          <Heading as="h2" size="xl" mb={6}>
            Contact Us
          </Heading>

          <form onSubmit={sendEmail} ref={form}>
            <VStack spacing={4} align="flex-start">
              <FormControl isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input name="name" placeholder="Enter your name" type="text" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input name="email" placeholder="Enter your email" type="email" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea name="message" placeholder="Type your message here" />
              </FormControl>

              <Button type="submit" colorScheme="teal" width="full">
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>

        
        <Box
          flex="1"
          p={8}
          bg="white"
          borderWidth={1}
          borderRadius="lg"
          boxShadow="xl"
          ml={{ base: 0, lg: 10 }}  
          mt={{ base: 10, lg: 0 }}  
          width={{ base: "100%", lg: "80%" }}
        >
          <Heading as="h2" size="lg" mb={6}>
            Contact Information
          </Heading>

          <Text fontSize="lg" mb={4}>
            Phone: +1 801-669-2282
          </Text>
          <Text fontSize="lg" mb={4}>
            Email: sjenergydoula@gmail.com
          </Text>
          <Text fontSize="lg" mb={4}>
            Address: 123 Business Street, City, Country
          </Text>
        </Box>
      </Flex>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Email Sent Successfully</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Your message has been sent. We will get back to you shortly.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Contact;
