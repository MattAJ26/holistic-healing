import { Outlet } from 'react-router-dom';
import { Box, Flex, Text, Stat, StatLabel, StatNumber, SimpleGrid, Spinner, Alert } from '@chakra-ui/react';
import SideNavBar from './SideNavBar';
import { useQuery } from '@apollo/client';
import { QUERY_SERVICES, QUERY_APPOINTMENTS, QUERY_PRACTITIONERS, QUERY_USERS } from '../../utils/queries';
import Auth from '../../utils/auth';

const Dashboard = () => {
  const styles = {
    margin: 0,
    padding: 0,
    backgroundColor: 'white',
    width: '100%',
    height: '100vh',
  };

  // Fetch data for services, appointments, practitioners, and members
  const { loading: loadingServices, error: errorServices, data: servicesData } = useQuery(QUERY_SERVICES);
  const { loading: loadingAppointments, error: errorAppointments, data: appointmentsData } = useQuery(QUERY_APPOINTMENTS);
  const { loading: loadingPractitioners, error: errorPractitioners, data: practitionersData } = useQuery(QUERY_PRACTITIONERS);
  const { loading: loadingMembers, error: errorMembers, data: membersData } = useQuery(QUERY_USERS);

  // Show spinner while loading data
  if (loadingServices || loadingAppointments || loadingPractitioners || loadingMembers) {
    return <Spinner size="xl" />;
  }

  // Handle errors
  // if (!errorServices || !errorAppointments || !errorPractitioners || !errorMembers) {
  //   return (
  //     <Alert status="error">
  //       <Text>An error occurred while fetching data.</Text>
  //     </Alert>
  //   );
  // }

  // Get the total counts from the fetched data, using optional chaining
  const totalServices = servicesData?.services?.length || 0;
  const totalAppointments = appointmentsData?.appointments?.length || 0;
  const activePractitioners = practitionersData?.practitioners?.length || 0;
  const totalMembers = membersData?.members?.length || 0; // Adjust this based on your actual data structure

  // Get the user's role
  const role = Auth.getProfile()?.data?.role;
  console.log(role);

  // Role-based access control
  if (role !== 'Admin') {
    return (
      <Box p={4}>
        <Text>You do not have permission to view this dashboard.</Text>
      </Box>
     );
  }

  return (
    <Flex style={styles}> 
      <SideNavBar />
      <Box flex="1" p={4} className="dashboardContent">
        <Text fontSize="2xl" mb={4}>Dashboard Overview</Text>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md" backgroundColor="white">
            <Stat>
              <StatLabel>Total Services</StatLabel>
              <StatNumber>{totalServices}</StatNumber>
            </Stat>
          </Box>
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md" backgroundColor="white">
            <Stat>
              <StatLabel>Total Appointments</StatLabel>
              <StatNumber>{totalAppointments}</StatNumber>
            </Stat>
          </Box>
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md" backgroundColor="white">
            <Stat>
              <StatLabel>Active Practitioners</StatLabel>
              <StatNumber>{activePractitioners}</StatNumber>
            </Stat>
          </Box>
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md" backgroundColor="white">
            <Stat>
              <StatLabel>Total Members</StatLabel>
              <StatNumber>{totalMembers}</StatNumber>
            </Stat>
          </Box>
        </SimpleGrid>

        {/* Render the outlet for nested routes */}
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Dashboard;
