import { Container, Box, SimpleGrid, Heading, Text, Spinner, Flex, Badge } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_SERVICES } from '../utils/queries';
import '../style/Services.css';

export default function Services() {
  const { loading, data } = useQuery(QUERY_SERVICES);
  const serviceList = data?.services || [];

  if (loading) return <Spinner size="xl" />;

  return (

    <div className="card mainContainer card-rounded w-75">
 
      <div className="card-header bg-dark text-center">
        <h1>Our Services</h1>
      </div>

      <Container as="section" maxWidth="container.xl" mt={6}>
        {/* <Heading as="h2" size="lg" mb={6} textAlign="center" color="white">Our Services</Heading> */}
 
        <div className="card-body m-5">
       
          <SimpleGrid mx="auto" columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 4, md: 8 }}>
            {serviceList.map((service) => (
              



                <Box
                  key={service._id}
                  p={0}
                  m={0}
                  // shadow="md"
                  shadow="10px 10px 15px 5px rgba(0, 0, 0, 0.3)"
                  // borderWidth="1px"
                  borderRadius="lg"
                  borderColor="gray.200"
                  width={{ base: "90%", md: "80%", lg: "60%" }} // Adjust width for different screen sizes
                  mx="auto" // Center the box horizontally
                  my={4} // Add vertical margin for spacing
                >
                    {/* <Heading fontSize="xl" textAlign="center">{service.name}</Heading> */}
                    
                    <Heading m={0} fontSize="xl" textAlign="center"  className="titleService">{service.name}</Heading>
                    <Text p={5} mt={2} color="gray.600">Duration: {service.duration} minutes</Text>

                    <Text p={5} mt={2} color="gray.600">{service.description}</Text>

                    <Flex justify="space-between" align="center" mt={4}>
                      <Text p={5} fontWeight="bold" color="blue.600" display="inline">
                        Price: ${service.price}
                      </Text>
                    </Flex>

                    <Badge p={5} colorScheme="white">
                      {service.practitioners.length} Practitioner(s)
                    </Badge>

                    <Box mt={4}>
                      <Heading p={5} size="sm" textTransform="uppercase">Practitioners</Heading>
                      {service.practitioners.map((practitioner) => (
                        <Text p={5} key={practitioner._id} mt={1} fontSize="sm">{practitioner.name}</Text>
                      ))}
                    </Box>

                </Box>
            
            ))}
          </SimpleGrid>

        </div>
              
      </Container>

    </div>

  );
}
