import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';
import { UPDATE_USER, REMOVE_USER } from '../../utils/mutations';
import { Box, Text, Button, Select, Input, VStack, Divider } from '@chakra-ui/react';

export default function DashboardMembers() {
  const { loading, data, refetch } = useQuery(QUERY_USERS);
  const [updateUser] = useMutation(UPDATE_USER, { onCompleted: refetch });
  const [removeUser] = useMutation(REMOVE_USER, { onCompleted: refetch });

  const [expandedUser, setExpandedUser] = useState(null);
  const [updateData, setUpdateData] = useState({});

  if (loading) return <div>Loading...</div>;

  const users = data?.users || [];

  const toggleExpandUser = (userId) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleUpdateUser = (userId) => {
    updateUser({
      variables: { userId, ...updateData },
    });
    setExpandedUser(null); // Collapse after updating
    setUpdateData({}); // Reset the form
  };

  const handleRemoveUser = (userId) => {
    removeUser({
      variables: { userId },
    });
  };

  return (
    <Box p={4} display="flex" justifyContent="center">
      <Box width="60%">
        <Text fontSize="2xl" mb={4} textAlign="center">Manage Members</Text>
        <VStack spacing={4} align="stretch">
          {users.map((user) => (
            <Box key={user._id} p={4} borderWidth="1px" borderRadius="md" bg="white" boxShadow="md">
              <Text 
                fontWeight="bold" 
                cursor="pointer" 
                onClick={() => toggleExpandUser(user._id)}
                _hover={{ textDecoration: 'underline', color: 'blue.500' }} // Hover effect
                textAlign="center" // Center the username
              >
                {user.username}
              </Text>
              {expandedUser === user._id && (
                <Box mt={2}>
                  <Input 
                    name="username" 
                    placeholder="Username" 
                    defaultValue={user.username} 
                    onChange={handleUpdateChange} 
                    mb={2} 
                  />
                  <Input 
                    name="email" 
                    placeholder="Email" 
                    defaultValue={user.email} 
                    onChange={handleUpdateChange} 
                    mb={2} 
                  />
                  <Select 
                    name="role" 
                    defaultValue={user.role} 
                    onChange={handleUpdateChange} 
                    mb={2}
                  >
                    <option value="customer">Customer</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                  </Select>
                  <Button 
                    colorScheme="blue" 
                    mt={2} 
                    onClick={() => handleUpdateUser(user._id)}
                    mr={2} // Margin to separate buttons
                  >
                    Update
                  </Button>
                  <Button 
                    colorScheme="red" 
                    mt={2} 
                    onClick={() => handleRemoveUser(user._id)}
                  >
                    Remove User
                  </Button>
                </Box>
              )}
              <Divider mt={4} /> {/* Divider between users */}
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
