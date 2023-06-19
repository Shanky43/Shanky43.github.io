import {
  Box,
  Wrap,
  WrapItem,
  Avatar,
  Flex,
  Heading,
  HStack,
  Stack,
  IconButton,
  Button,
  Spacer,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-scroll';
import resume from '../files/Shankar-S-Resume.pdf';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';

const fornav = {
  letterSpacing: '1px',
  textAlign: 'center',
  alignItems: 'center',
};

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Shankar-S-Resume.pdf';
    link.click();
    window.open(
      'https://drive.google.com/file/d/1-VtrxibWLoPWAmMKkBASzBZxDCYIsaQm/view?usp=drive_link',
      '_blank'
    );
  };

  return (
    <div id="nav-menu">
      <Flex
        maxW="100%"
        style={{ margin: '0%', padding: '0%' }}
        justifyContent="flex-end"
      >
        <Flex
          pos="fixed"
          display={['none', 'none', 'none', 'flex']}
          width="100%"
          zIndex={100}
          pt={6}
          pb={3}
          bg={'black'}
          pl={10}
          style={fornav}
          color="white"
          justifyContent="space-between"
        >
          <Flex>
            <HStack>
              <Wrap>

              </Wrap>
              <Heading id="user-detail-name"><Text as="span" color={"#e4002b"}>S</Text>HANKAR <Text as="span" color={"#e4002b"}>S</Text></Heading>
            </HStack>
          </Flex>
          <Spacer />
          <Flex zIndex={1000}>
            <Box>
              <Button
                variant="ghost"
                arial-label="home"
                _hover={{
                  color: 'white',
                  bg: '#e4002b',
                }}
              >
                <Link
                  to="home"
                  className="nav-link home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  HOME
                </Link>
              </Button>
            </Box>

            <Box>
              <Button
                variant="ghost"
                arial-label="ABOUT"
                _hover={{
                  color: 'white',
                  bg: '#e4002b',
                }}
              >
                <Link
                  to="about"
                  className="nav-link about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  ABOUT
                </Link>
              </Button>
            </Box>
            <Box>
              <Button
                variant="ghost"
                arial-label="SKILLS"
                _hover={{
                  color: 'white',
                  bg: '#e4002b',
                }}
              >
                <Link
                  to="skills"
                  className="nav-link skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  SKILLS
                </Link>
              </Button>
            </Box>
            <Box>
              <Button
                variant="ghost"
                arial-label="PROJECTS"
                _hover={{
                  color: 'white',
                  bg: '#e4002b',
                }}
              >
                <Link
                  to="projects"
                  className="nav-link projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  PROJECTS
                </Link>
              </Button>
            </Box>
            <Box>
              <Button
                variant="ghost"
                arial-label="CONTACT"
                _hover={{
                  color: 'white',
                  bg: '#e4002b',
                }}
              >
                <Link
                  to="contact"
                  className="nav-link contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  CONTACT
                </Link>
              </Button>
            </Box>
            <Box class="nav-link resume">
              <Button
                variant="ghost"
                arial-label="RESUME"
                _hover={{
                  color: 'white',
                  bg: '#e4002b',
                }}
                id="resume-button-1"
                onClick={handleDownload}
              >
                RESUME
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Box display="flex" justifyContent="flex-end" bgColor="black">
        <Box ml="auto">
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={['flex', 'flex', 'flex', 'none']}
            onClick={onOpen}
            bg="black"
            _hover={{
              bg: 'black',
              color: 'white',
            }}
            color="white"
            zIndex={20}
          />
        </Box>
      </Box>
      <Flex>
        <Flex display={['flex', 'flex', 'none', 'none']}>
          <Drawer
            isOpen={isOpen}
            placement="roght"
            onClose={onClose}
            finalFocusRef={btnRef}
            display={['flex', 'flex', 'none', 'none']}
            overflow="overlay"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                <Flex>
                  <HStack>
                    <Wrap>
                      <WrapItem>
                        <Avatar
                          name="Shankar S"
                          src="https://avatars.githubusercontent.com/u/112791993?v=4"
                          bg="yellow"
                        />
                      </WrapItem>
                    </Wrap>
                    <Heading>SHANKAR S</Heading>
                  </HStack>
                </Flex>
              </DrawerHeader>

              <DrawerBody>
                <Flex>
                  <Flex
                    flexDir="column"
                    className="nav-link home"
                    w="100px"
                    align="right"
                    display={['flex', 'flex', 'flex', 'none']}
                    height="30vh"
                  >
                    <Box>
                      <Button
                        variant="ghost"
                        arial-label="home"
                        _hover={{
                          color: 'black',
                          bg: 'white',
                        }}
                      >
                        <Link to="home">HOME</Link>
                      </Button>
                    </Box>

                    <Box>
                      <Button
                        variant="ghost"
                        arial-label="ABOUT"
                        _hover={{
                          color: 'black',
                          bg: 'white',
                        }}
                      >
                        <Link to="about">ABOUT</Link>
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        variant="ghost"
                        arial-label="SKILLS"
                        _hover={{
                          color: 'black',
                          bg: 'white',
                        }}
                      >
                        <Link to="skills">SKILLS</Link>
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        variant="ghost"
                        arial-label="PROJECTS"
                        _hover={{
                          color: 'black',
                          bg: 'white',
                        }}
                      >
                        <Link to="projects">PROJECTS</Link>
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        variant="ghost"
                        arial-label="CONTACT"
                        _hover={{
                          color: 'black',
                          bg: 'white',
                        }}
                      >
                        <Link to="contact">CONTACT</Link>
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        variant="ghost"
                        arial-label="RESUME"
                        _hover={{
                          color: 'black',
                          bg: 'white',
                        }}
                        id="resume-button-2"
                        onClick={handleDownload}
                      >
                        RESUME
                      </Button>
                    </Box>
                  </Flex>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </div>
  );
}

export default NavBar;
