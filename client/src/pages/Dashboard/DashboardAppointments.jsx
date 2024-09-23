import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Spinner, Box, Text, Button, Input, VStack, Divider } from '@chakra-ui/react';
import { QUERY_APPOINTMENTS } from '../../utils/queries'; 
import { CANCEL_APPOINTMENT, UPDATE_APPOINTMENT } from '../../utils/mutations'; 

export default function DashboardAppointments() {
  const { loading, data, refetch } = useQuery(QUERY_APPOINTMENTS);
  const [cancelAppointment, { loading: cancelLoading }] = useMutation(CANCEL_APPOINTMENT, {
    onCompleted: () => refetch(),
  });
  
  const [updateAppointment] = useMutation(UPDATE_APPOINTMENT, {
    onCompleted: () => refetch(),
  });

  const [isEditing, setIsEditing] = useState(null);
  const [newDate, setNewDate] = useState('');
  const [newNotes, setNewNotes] = useState('');

  const appointmentList = data?.appointments || [];

  // Function to handle appointment cancellation
  const handleCancel = (appointmentId) => {
    cancelAppointment({
      variables: { appointmentId },
    });
  };

  // Function to handle appointment update
  const handleUpdate = (updateAppointmentId) => {
    updateAppointment({
      variables: {
        updateAppointmentId,
        appointmentDate: newDate,
        notes: newNotes,
      },
    });
    setIsEditing(null); 
  };

  if (loading || cancelLoading) return <Spinner size="xl" />;

  return (
    <Box p={4} display="flex" justifyContent="center">
      <Box width="60%">
        <Text fontSize="2xl" mb={8} textAlign="center">See All Appointments</Text>
        
        {appointmentList.length > 0 ? (
          <VStack spacing={4} align="stretch">
            {appointmentList.map((appointment) => (
              <Box key={appointment._id} p={4} borderWidth="1px" borderRadius="md" mb={4} bg="white" boxShadow="md">
                {isEditing === appointment._id ? (
                  <Box>
                    <Text><strong>Update Appointment:</strong></Text>
                    <Input
                      type="date"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      placeholder="New Date"
                    />
                    <Input
                      value={newNotes}
                      onChange={(e) => setNewNotes(e.target.value)}
                      placeholder="New Notes"
                      mt={2}
                    />
                    <Button colorScheme="green" mt={2} onClick={() => handleUpdate(appointment._id)}>
                      Save
                    </Button>
                    <Button mt={2} ml={2} onClick={() => setIsEditing(null)}>
                      Cancel
                    </Button>
                  </Box>
                ) : (
                  <Box>
                    <Text><strong>Date:</strong> {new Date(appointment.appointmentDate).toLocaleDateString()}</Text>
                    <Text><strong>Status:</strong> {appointment.status}</Text>
                    <Text>
                      <strong>Practitioner:</strong> {appointment.practitioner?.name || 'N/A'}
                    </Text>
                    <Text>
                      <strong>User:</strong> {appointment.user?.username || 'Anonymous'}
                    </Text>
                    <Text><strong>Notes:</strong> {appointment.notes || 'No notes provided'}</Text>
                    <Button colorScheme="red" mt={2} onClick={() => handleCancel(appointment._id)}>
                      Cancel Appointment
                    </Button>
                    <Button colorScheme="blue" mt={2} ml={2} onClick={() => setIsEditing(appointment._id)}>
                      Update Appointment
                    </Button>
                  </Box>
                )}
                <Divider mt={4} /> {/* Divider between appointments */}
              </Box>
            ))}
          </VStack>
        ) : (
          <Text>No appointments found.</Text>
        )}
      </Box>
    </Box>
  );
};
