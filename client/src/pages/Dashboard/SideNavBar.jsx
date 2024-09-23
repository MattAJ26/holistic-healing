import { Link } from 'react-router-dom';
import { Box, VStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const SideNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navStyles = {
    fontSize: "18px",
    padding: '10px',
    color: "white",
    _hover: { textDecoration: "underline" },
    display: "block",
    
  };

  return (
    <Box
      bg="gray.800"
      color="white"
      p={4}
      height="100vh"
      width={{ base: isOpen ? "100%" : "0", md: "250px" }} 
      position="sticky"
      top={0}
      transition="width 0.3s"
      overflow="hidden"
    >
      {/* Hamburger Icon for Mobile Screens */}
      <IconButton
        aria-label="Toggle Menu"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={isOpen ? onClose : onOpen}
        display={{ md: 'none' }} 
        size="lg"
        colorScheme="teal"
        position="absolute" 
        top={4} 
        left={4} 
        zIndex={100000} 
      />

      {/* Navigation Links */}
      <VStack spacing={8} align="stretch" display={{ base: isOpen ? 'block' : 'none', md: 'block' }}>
        <Link style={navStyles} to="/dashboard/services">Services</Link>
        <Link style={navStyles} to="/dashboard/members"> Members</Link>
        <Link style={navStyles} to="/dashboard/appointments">Appointments</Link>
      </VStack>
    </Box>
  );
};

export default SideNavBar;
