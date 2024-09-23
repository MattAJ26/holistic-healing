import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Spinner, Box, Text, Button, Input, FormControl, FormLabel, VStack, Divider } from '@chakra-ui/react';
import { QUERY_SERVICES, QUERY_PRACTITIONERS } from '../../utils/queries';
import { CREATE_SERVICE, UPDATE_SERVICE, DELETE_SERVICE } from '../../utils/mutations';

export default function DashboardServices() {
  const { loading: loadingServices, data: servicesData, refetch } = useQuery(QUERY_SERVICES);
  const { loading: loadingPractitioners, data: practitionersData } = useQuery(QUERY_PRACTITIONERS);
  
  const [createService] = useMutation(CREATE_SERVICE, { onCompleted: () => refetch() });
  const [updateService] = useMutation(UPDATE_SERVICE, { onCompleted: () => refetch() });
  const [deleteService] = useMutation(DELETE_SERVICE, { onCompleted: () => refetch() });

  const [isEditing, setIsEditing] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [serviceData, setServiceData] = useState({ name: '', description: '', duration: '', price: '', practitioner: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  const handleCreateService = () => {
    if (!serviceData.name || !serviceData.description || !serviceData.duration || !serviceData.price || !serviceData.practitioner) {
      console.error('All fields are required.');
      return;
    }

    if (parseInt(serviceData.duration) <= 0 || parseInt(serviceData.price) <= 0) {
      console.error('Duration and price must be positive numbers.');
      return;
    }

    createService({
      variables: {
        practitioner: serviceData.practitioner,
        name: serviceData.name,
        description: serviceData.description,
        duration: parseInt(serviceData.duration),
        price: parseInt(serviceData.price),
      },
    })
    .then(response => {
      console.log('Service created successfully:', response.data.addService);
      refetch();
      setServiceData({ name: '', description: '', duration: '', price: '', practitioner: '' });
      setIsAdding(false);
    })
    .catch(error => {
      console.error('Error creating service:', error.message);
    });
  };

  const handleUpdateService = (serviceId) => {
    updateService({
      variables: {
        updateServiceId: serviceId,
        name: serviceData.name,
        description: serviceData.description,
        duration: parseInt(serviceData.duration),
        price: parseInt(serviceData.price),
      },
    });
    setIsEditing(null);
    setServiceData({ name: '', description: '', duration: '', price: '', practitioner: '' });
  };

  const handleDeleteService = (serviceId) => {
    deleteService({ variables: { serviceId } });
  };

  if (loadingServices || loadingPractitioners) return <Spinner size="xl" />;

  const services = [...(servicesData?.services || [])];

  return (
    <Box p={4} display="flex" justifyContent="center">
      <Box width="60%">
        <Text fontSize="2xl" mb={8} textAlign="center">Manage Services</Text>
        <Button colorScheme="blue" mb={4} onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? 'Cancel' : 'Add Service'}
        </Button>
        
        {isAdding && (
          <FormControl mb={4}>
            <FormLabel>Add New Service</FormLabel>
            <select name="practitioner" value={serviceData.practitioner} onChange={handleInputChange}>
              <option value="">Select Practitioner</option>
              {practitionersData.practitioners.map(practitioner => (
                <option key={practitioner._id} value={practitioner._id}>{practitioner.name}</option>
              ))}
            </select>
            <Input name="name" placeholder="Service Name" value={serviceData.name} onChange={handleInputChange} />
            <Input name="description" placeholder="Description" value={serviceData.description} onChange={handleInputChange} />
            <Input name="duration" type="number" placeholder="Duration (min)" value={serviceData.duration} onChange={handleInputChange} />
            <Input name="price" type="number" placeholder="Price" value={serviceData.price} onChange={handleInputChange} />
            <Button colorScheme="blue" mt={2} onClick={handleCreateService}>Add Service</Button>
          </FormControl>
        )}

        <VStack spacing={4} align="stretch">
          {services.map(service => (
            <Box key={service._id} p={4} borderWidth="1px" borderRadius="md" mb={4} bg="white" boxShadow="md">
              {isEditing === service._id ? (
                <Box>
                  <FormControl>
                    <Input name="name" value={serviceData.name} onChange={handleInputChange} placeholder="Service Name" />
                    <Input name="description" value={serviceData.description} onChange={handleInputChange} placeholder="Description" />
                    <Input name="duration" type="number" value={serviceData.duration} onChange={handleInputChange} placeholder="Duration (min)" />
                    <Input name="price" type="number" value={serviceData.price} onChange={handleInputChange} placeholder="Price" />
                  </FormControl>
                  <Button colorScheme="green" mt={2} onClick={() => handleUpdateService(service._id)}>Save</Button>
                  <Button mt={2} ml={2} onClick={() => setIsEditing(null)}>Cancel</Button>
                </Box>
              ) : (
                <Box>
                  <Text><strong>Name:</strong> {service.name}</Text>
                  <Text><strong>Description:</strong> {service.description}</Text>
                  <Text><strong>Duration:</strong> {service.duration} mins</Text>
                  <Text><strong>Price:</strong> ${service.price}</Text>
                  <Button colorScheme="blue" mt={2} onClick={() => {
                    setIsEditing(service._id);
                    setServiceData({ name: service.name, description: service.description, duration: service.duration, price: service.price });
                  }}>Edit</Button>
                  <Button colorScheme="red" mt={2} ml={2} onClick={() => handleDeleteService(service._id)}>Delete</Button>
                </Box>
              )}
              <Divider mt={4} /> {/* Divider between services */}
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
