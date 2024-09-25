import { useQuery } from '@apollo/client';
import { useState } from 'react';

// import required chakra ui components
// -----------------------------------
import { Container, Box, SimpleGrid, Heading, Text, Spinner, Flex, Badge, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalCloseButton, FormControl, ModalBody, FormLabel, Input, Textarea,} from '@chakra-ui/react';

// import queries and mutations
// ----------------------------

import { QUERY_SERVICES } from '../utils/queries';
import '../style/Services.css';
import { CREATE_APPOINTMENT } from '../utils/mutations';
import { QUERY_USERS, QUERY_PRACTITIONERS } from '../utils/queries';





export default function Services() {

  const { loading, data } = useQuery(QUERY_SERVICES);
  const serviceList = data?.services || [];

  if (loading) return <Spinner size="xl" />;


// creating booking
// ----------------

 const [appointmentData, setAppointmentData] = useState({
    user: '',
    practitioner: '',
    appointmentDate: '',
    notes: ''
  });

// find user and practitioner
// ----------------------

const { loading: loadingUser, data: userData } = useQuery(QUERY_USERS);
  const { loading: loadingPractitioner, data: practitionerData } = useQuery(QUERY_PRACTITIONERS);

const [createAppointment] = useMutation(CREATE_APPOINTMENT, {
    onCompleted: () => {
      console.log('Appointment created successfully');
      // Reset form or handle after completion
      setAppointmentData({
        user: '',
        practitioner: '',
        appointmentDate: '',
        notes: ''
      });
    },
    onError: (error) => {
      console.error('Error creating appointment:', error.message);
    }
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  }


  const handleBookings = () => {
    const { user, practitioner, appointmentDate, notes } = appointmentData;

    if (!user || !practitioner) {
      console.log('User and Practitioner are required');
      return;
    }

    if (!appointmentDate || !notes) {
      console.log('All fields are required');
      return;
    }

    createAppointment({
      variables: {
        user,
        practitioner,
        appointmentDate,
        notes
      }
    });
  };

// booking ends
// ------------------------------------------

// opening modal from ska ui
// --------------------------
 const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)



  return (
    <Container as="section" maxWidth="container.xl" mt={6} p={8} bg="white" borderRadius="lg" shadow="lg">
      <Heading as="h2" size="lg" mb={6} textAlign="center" color="black" fontFamily="serif" letterSpacing="wider">
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
              <Heading fontSize="xl" textAlign="center" className="titleService" fontFamily="serif" color="black">
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
                <Heading size="sm" textTransform="uppercase" fontFamily="serif" color="black" mb={2}>
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
                   onClick={onOpen}
                >
                  Book Now
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </div>
{/* ---------------------  end code  ---------------------------------------------- */}


      {/* modal form */}
      {/* ----------- */}

    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Book the Appointment</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isRequired>
            <FormLabel>Appointment Date</FormLabel>
            <Input
              ref={initialRef}
              placeholder='Enter appointment date'
              type="date" 
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>User Name</FormLabel>
            <Input placeholder='Enter user name' />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Practitioner</FormLabel>
            <Input placeholder='Enter practitioner name' />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Notes</FormLabel>
            <Textarea
              placeholder='Enter any notes regarding the appointment'
              rows={4} 
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={() => {}}>
            Book
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    
    </Container>
  );
}
