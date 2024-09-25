import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Container, Box, SimpleGrid, Heading, Text, Spinner, Flex, Badge, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import { QUERY_SERVICES } from '../utils/queries';

export default function Services() {
  const { loading, data } = useQuery(QUERY_SERVICES);
  const serviceList = data?.services || [];
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [selectedService, setSelectedService] = useState(null);

  if (loading) return <Spinner size="xl" />;

  const handleBookingClick = (service) => {
    setSelectedService(service);
    onOpen(); 
  };

  const handleBookAppointment = (service) => {
    console.log(`Book appointment clicked ${service._id}`);
  }

  return (
    <Container as="section" maxWidth="container.xl" mt={6} p={8} bg="#d6d5c9" borderRadius="lg" shadow="lg">
      <Heading as="h2" size="lg" mb={6} textAlign="center" color="black" fontFamily="var(--chakra-fonts-body)" letterSpacing="wider">
        Our Luxury Services
      </Heading>
      <div className="card-body m-5">
        <SimpleGrid mx="auto" columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 10 }}>
          {serviceList.map((service) => (
            <Box
              key={service._id}
              p={6}
              shadow="lg"
              borderRadius="xl"
              borderColor="gray.200"
              borderWidth="1px"
              bg="white"
              _hover={{ shadow: '2xl', transform: 'translateY(-5px)', transition: '0.3s ease-in-out' }}
              mx="auto"
            >
              <Heading fontSize="xl" textAlign="center" className="titleService" fontFamily="var(--chakra-fonts-body)" color="black">
                {service.name}
              </Heading>
              <Text mt={4} color="gray.600" fontWeight="medium" textAlign="center">
                Duration: {service.duration} minutes
              </Text>
              <Text mt={4} color="gray.500" fontSize="sm" textAlign="center">
                {service.description}
              </Text>
              <Flex justify="space-between" align="center" mt={4}>
                <Text fontWeight="bold" color="black" display="inline" fontSize="lg">
                  ${service.price}
                </Text>
              </Flex>
              <Badge mt={4} colorScheme="gray" fontSize="md" textAlign="center" display="block">
                {service.practitioners.length} Practitioner(s)
              </Badge>
              <Box mt={6}>
                <Heading size="sm" textTransform="uppercase" fontFamily="var(--chakra-fonts-body)" color="black" mb={2}>
                  Practitioners
                </Heading>
                {service.practitioners.map((practitioner) => (
                  <Text key={practitioner._id} fontSize="sm" color="gray.700" mt={1} textAlign="center">
                    {practitioner.name}
                  </Text>
                ))}
              </Box>
              {/* Booking Button */}
              <Box textAlign="center" mt={6}>
                <Button
                  colorScheme="teal"
                  size="lg"
                  variant="solid"
                  _hover={{ bg: 'orange.400', color: 'white', transform: 'scale(1.05)' }}
                  px={8}
                  borderRadius="full"
                  boxShadow="md"
                  onClick={() => handleBookingClick(service)}
                >
                  Book Now
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </div>

      {/* Modal for booking details */}
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedService?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>{selectedService?.description}</Text>
            <Text mt={4}>Price: ${selectedService?.price}</Text>
            <Text mt={4}>Duration: {selectedService?.duration} minutes</Text>
            <Text mt={4}>Practitioner(s):</Text>
            <ul>
              {selectedService?.practitioners.map((practitioner) => (
                <li key={practitioner._id}>{practitioner.name}</li>
              ))}
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => handleBookAppointment(selectedService)}>
              Book Now
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}