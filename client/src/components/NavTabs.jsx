import { color } from 'framer-motion';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import './style/NavTabs.css';

// using Chakra==============
import { Box, Text, Flex, Button, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { createBreakpoints } from '@chakra-ui/theme-tools';
// ===========================

// const breakpoints = createBreakpoints ({
//   sm: '30em', 
//   md: '48em', 
//   lg: '62em', 
//   xl: '80em', 

// });

export default function NavTabs() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const profile = Auth.getProfile();
  const username = profile ? profile.data.username : '';  // Handle null case
  const [display, changeDisplay] = useState('none');
// using Chakra==============
  return (
    <Flex 
      bg="#1b8445"
    >

      <Flex
        // pos="fixed"
        top="1rem"
        right="1rem"
        align="center"
      >
            <Flex
              display={['none', 'none', 'flex', 'flex']}
            >
                  <Link 
                      to="/" 
                      textDecoration="none"
                      _hover={{ textDecoration: 'none' }}
                      _focus={{ textDecoration: 'underline' }}
                      color="#d6d5c9"
                  > 
                    <Button
                      _hover={{ color: '#d6d5c9'}}
                      fontSize="25px"
                      color="#d6d5c9"
                      as="a"
                      variant="ghost"
                      aria-lable="Home"
                      m={5}
                      w="100%"
                    >
                      Home
                    </Button>
                  </Link>

                  <Link 
                      to="/about"
                      textDecoration="none"
                      _hover={{ textDecoration: 'none' }}
                      _focus={{ textDecoration: 'underline' }}
                      color="#d6d5c9"
                  >
                    <Button
                      _hover={{ color: '#d6d5c9'}}
                      fontSize="25px"
                      color="#d6d5c9"
                      as="a"
                      variant="ghost"
                      aria-lable="About"
                      m={5}
                      w="100%"
                    >
                      About Us
                    </Button>
                    </Link>

                  <Link 
                      to="/services"
                      textDecoration="none"
                      _hover={{ textDecoration: 'none' }}
                      _focus={{ textDecoration: 'underline' }}
                      color="#d6d5c9"
                  >
                    <Button
                      _hover={{ color: '#d6d5c9'}}
                      fontSize="25px"
                      color="#d6d5c9"
                      as="a"
                      variant="ghost"
                      aria-lable="Services"
                      m={5}
                      w="100%"
                    >
                      Services
                    </Button>
                    </Link>

                  <Link 
                      to="/dashboard"
                      textDecoration="none"
                      _hover={{ textDecoration: 'none' }}
                      _focus={{ textDecoration: 'underline' }}
                      color="#d6d5c9"
                  >
                    <Button
                      _hover={{ color: '#d6d5c9'}}
                      fontSize="25px"
                      color="#d6d5c9"
                      as="a"
                      variant="ghost"
                      aria-lable="Dashboard"
                      m={5}
                      w="100%"
                    >
                      Dashboard
                    </Button>
                    </Link>

                  <Link 
                  to="/contact"
                  textDecoration="none"
                  _hover={{ textDecoration: 'none' }}
                  _focus={{ textDecoration: 'underline' }}
                  color="#d6d5c9"
                  >
                    <Button
                      _hover={{ color: '#d6d5c9'}}
                      fontSize="25px"
                      color="#d6d5c9"
                      as="a"
                      variant="ghost"
                      aria-lable="Contact"
                      m={5}
                      w="100%"
                    >
                      Contact
                    </Button>
                    </Link>
            </Flex>

            <IconButton
              aria-label="Open Menu"
              size="lg"
              mr={2}
              icon={<HamburgerIcon/>}
              display={['flex', 'flex','none', 'none']}
              onClick={() => changeDisplay('flex')}
            />
      </Flex>

      {/* The Menu from the Hamberger icon: */}

      <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
          <Flex justify="flex-end">
            <IconButton
                mt={2}
                mr={2}
                aria-label="Close Menu"
                size="lg"
                icon={
                  <CloseIcon />
                }
                onClick={() => changeDisplay('none')}
            />
          </Flex> 

          <Flex
            flexDir="column"
            align="center"
          >
            <Link to="/">
              <Button
                as="a"
                variant="ghost"
                aria-lable="Home"
                m={5}
                w="100%"
              >
                Home
              </Button>
            </Link>

            <Link to="/about">
              <Button
                as="a"
                variant="ghost"
                aria-lable="About"
                m={5}
                w="100%"
              >
                About Us
              </Button>
              </Link>

            <Link to="/services">
              <Button
                as="a"
                variant="ghost"
                aria-lable="Services"
                m={5}
                w="100%"
              >
                Services
              </Button>
              </Link>

            <Link to="/dashboard" >
              <Button
                as="a"
                variant="ghost"
                aria-lable="Dashboard"
                m={5}
                w="100%"
              >
                Dashboard
              </Button>
              </Link>

            <Link to="/contact">
              <Button
                as="a"
                variant="ghost"
                aria-lable="Contact"
                m={5}
                w="100%"
              >
                Contact
              </Button>
              </Link>
          </Flex>
      </Flex>

      {/* The login-signup Menu: */}

      <Flex>
      {Auth.loggedIn() ? (
                  <>
                  <span>Hey there, {username}!</span>
                  <button className="btn btn-lg btn-light m-2" onClick={Auth.logout}>
                    Logout
                  </button>
                  </>
                ) : (
                    <>
                  <Link className="btn btn-lg btn-info m-2" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-lg btn-light m-2" to="/signup">
                  Signup
                  </Link>
                  </>
                )}
      </Flex>


    </Flex>



    
  );
// // ==========================

  // return (
  //   // <nav className="navbar navbar-expand-lg bg-secondary" style={styles.navContainer}>
  //   <nav className="navbar navbar-expand-lg bg-secondary" >
  //     <div className="container-fluid">
  //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //         <div className="navbar-nav me-auto mb-2 mb-lg-0 navContainer">
  //           <div className="rightHand navLink">
  //               <div className="navLink">
  //                 <Link className="titleLink" to="/">Home</Link>
  //               </div>
  //               <div className="navLink">
  //                 <Link className="titleLink" to="/about">About Us</Link>
  //               </div>
  //               <div className="navLink">
  //                 <Link className="titleLink" to="/services">Services</Link>
  //               </div>
  //                <div className="navLink">
  //                 <Link className="titleLink" to="/dashboard">Dashboard</Link>
  //               </div>
  //               <div className="navLink">
  //                 <Link className="titleLink" to="/contact">Contact</Link>
  //               </div>
  //           </div>
  //           <div className="leftHand navLink">
  //               {/* <div className="navLink">
  //                 <Link className="titleLink" to="/signup">Sign Up</Link>
  //               </div> */}
  //               <div className="navLink">
  //                 {Auth.loggedIn() ? (
  //                   <>
  //                   <span>Hey there, {username}!</span>
  //                   <button className="btn btn-lg btn-light m-2" onClick={Auth.logout}>
  //                     Logout
  //                   </button>
  //                   </>
  //                ) : (
  //                    <>
  //                  <Link className="btn btn-lg btn-info m-2" to="/login">
  //                    Login
  //                  </Link>
  //                   <Link className="btn btn-lg btn-light m-2" to="/signup">
  //                   Signup
  //                  </Link>
  //                   </>
  //                 )}
  //               </div>
  //               {/* <div className="navLink">
  //                 <Link className="titleLink" to="/logout">Logout</Link>
  //               </div> */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // );



}
