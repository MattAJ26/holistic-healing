import { Container, Box, SimpleGrid, Heading, Text, Spinner, Flex, Badge } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_SERVICES } from '../utils/queries';

export default function Services() {
  const { loading, data } = useQuery(QUERY_SERVICES);
  const serviceList = data?.services || [];

  if (loading) return <Spinner size="xl" />;

  return (
    <Container as="section" maxWidth="container.xl" mt={6}>
      <Heading as="h2" size="lg" mb={6} textAlign="center" color="white">Our Services</Heading>
      <SimpleGrid mx="auto" columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 4, md: 8 }}>
        {serviceList.map((service) => (
          <Box
            key={service._id}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.200"
            width={{ base: "90%", md: "80%", lg: "60%" }} // Adjust width for different screen sizes
            mx="auto" // Center the box horizontally
            my={4} // Add vertical margin for spacing
          >
            <Heading fontSize="xl" textAlign="center">{service.name}</Heading>
            <Text mt={2} color="gray.600">Duration: {service.duration} minutes</Text>
            <Text mt={2} color="gray.600">{service.description}</Text>
            <Flex justify="space-between" align="center" mt={4}>
              <Text fontWeight="bold" color="blue.600" display="inline">
                Price: ${service.price}
              </Text>
            </Flex>
            <Badge colorScheme="white">
              {service.practitioners.length} Practitioner(s)
            </Badge>
            <Box mt={4}>
              <Heading size="sm" textTransform="uppercase">Practitioners</Heading>
              {service.practitioners.map((practitioner) => (
                <Text key={practitioner._id} mt={1} fontSize="sm">{practitioner.name}</Text>
              ))}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
