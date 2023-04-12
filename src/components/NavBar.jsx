import {
  // GridItem, Container, Grid, Text, VStack,Input, DrawerFooter, Center,
  Box, Wrap, WrapItem, Avatar, Flex, Heading,
  HStack, Stack,
  IconButton, Button, Spacer, Drawer,
  DrawerHeader, DrawerBody, DrawerOverlay,
  DrawerContent, DrawerCloseButton, useColorMode,
} from '@chakra-ui/react'
import React from 'react'
// import AnimatePresence from '@chakra-ui/transition'  MoonIcon, SunIcon;
import { Link } from 'react-scroll';
import resume from "../files/Shankar-S-Resume.pdf"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import { useDisclosure } from "@chakra-ui/react"


const fornav = {

  letterSpacing: "1px",
  textAlign: "center",
  alignItems: "center"

}
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div id="nav-menu">
      <Flex maxW='100%' style={{ margin: "0%", padding: "0%" }} justifyContent="flex-end" >
        <Flex
          pos={"fixed"}
          display={["none", "none", 'none', "flex"]}
          width="100%"
          // style={fornav}
          pt={6} pb={3} bg={"black"} pl={10} style={fornav} color="white"
          justifyContent={"space-between"}
        >
          <Flex>
            <HStack>
              <Wrap >
                <WrapItem >
                  <Avatar name='Shankar S' class="home-img" src='https://avatars.githubusercontent.com/u/112791993?v=4' bg="yellow" />
                </WrapItem>
              </Wrap>
              <Heading id="user-detail-name">SHANKAR S</Heading>
            </HStack>
          </Flex>
          <Spacer />
          <Flex zIndex={1000}>
            <Box >
              <Button

                variant="ghost"
                arial-label="home"
                _hover={{
                  color: "white",
                  bg: "#e4002b"
                }}
              >
                <Link to="home" class="nav-link home" spy={true} smooth={true} offset={50} duration={500}>HOME</Link>
              </Button>
            </Box>


            <Box>
              <Button
                variant="ghost"
                arial-label="ABOUT"
                _hover={{
                  color: "white",
                  bg: "#e4002b"
                }}
              >
                <Link to="about" class="nav-link about" spy={true} smooth={true} offset={50} duration={500}>ABOUT</Link>
              </Button>
            </Box>
            <Box>
              <Button
                variant="ghost"
                arial-label="SKILLS"
                _hover={{
                  color: "white",
                  bg: "#e4002b"
                }}
              >
                <Link to="skills" class="nav-link skills" spy={true} smooth={true} offset={50} duration={500}>SKILLS</Link>
              </Button>
            </Box>
            <Box>
              <Button
                variant="ghost"
                arial-label="PROJECTS"
                _hover={{
                  color: "white",
                  bg: "#e4002b"
                }}
              >
                <Link to="projects" class="nav-link projects" spy={true} smooth={true} offset={50} duration={500}>PROJECTS</Link>
              </Button>
            </Box>
            <Box>
              <Button
                variant="ghost"
                arial-label="CONTACT"
                _hover={{
                  color: "white",
                  bg: "#e4002b"
                }}
              >
                <Link to="contact" class="nav-link contact" spy={true} smooth={true} offset={50} duration={500}>CONTACT</Link>
              </Button>
            </Box>
            <Box>
              <Button
                variant="ghost"
                arial-label="RESUME"
                _hover={{
                  color: "white",
                  bg: "#e4002b"
                }}
              >
                <a href={resume} class="nav-link resume" download>RESUME</a>
              </Button>
            </Box>
          </Flex>
          <Stack direction={'row'} spacing={7} placement="right">
            <Button onClick={toggleColorMode} bg="black" _hover={{ bg: "black" }}>
              {/* {colorMode === 'light' ? <MoonIcon /> : <SunIcon />} */}
            </Button>
          </Stack>
        </Flex>
      </Flex>


      {/* //---------------------- */}

      <Box
        display="flex"
        justifyContent="flex-end"
        bgColor="black"
      // overflow={"overlay"}
      >
        <Box ml="auto">
          <IconButton
            aria-label='Open Menu'
            size={"lg"}
            mr={2}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={["flex", "flex", "flex", "none"]}
            onClick={onOpen}
            bg="black"
            _hover={colorMode === "light" ? {
              bg: "white",
              color: "black"
            } : {
              bg: "black",
              color: "white"
            }}
            color={colorMode === "light" ? "white" : "white"}
            zIndex={20}
          />
        </Box>
      </Box>
      <Flex>


        <Flex display={["flex", "flex", "none", "none"]} >
          <Drawer
            isOpen={isOpen}
            placement='roght'
            onClose={onClose}
            finalFocusRef={btnRef}
            display={["flex", "flex", "none", "none"]}
            overflow={"overlay"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">  <Flex>
                <HStack>
                  <Wrap>
                    <WrapItem>
                      <Avatar name='Shankar S'  src='https://avatars.githubusercontent.com/u/112791993?v=4' bg="yellow" />
                    </WrapItem>
                  </Wrap>
                  <Heading>SHANKAR S</Heading>
                </HStack>
              </Flex >

              </DrawerHeader>

              <DrawerBody  >
                <Flex >

                  <Flex flexDir={"column"}
                    className="nav-link home"
                    w={"100px"}
                    align="right"
                    display={["flex", "flex", "flex", "none"]}
                    height="30vh"
                  >
                    <Box>
                      <Button
                        variant="ghost"
                        arial-label="home"
                        _hover={{
                          color: "black",
                          bg: "white"
                        }}
                      >
                        <Link to="home" >HOME</Link>
                      </Button>
                    </Box>


                    <Box>
                      <Button
                        variant="ghost"
                        arial-label="ABOUT"
                        _hover={{
                          color: "black",
                          bg: "white"
                        }}
                      >
                        <Link to="about" >ABOUT</Link>
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        variant="ghost"
                        arial-label="SKILLS"
                        _hover={{
                          color: "black",
                          bg: "white"
                        }}
                      >
                        <Link to="skills" >SKILLS</Link>
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        variant="ghost"
                        arial-label="PROJECTS"
                        _hover={{
                          color: "black",
                          bg: "white"
                        }}
                      >
                        <Link to="projects" >PROJECTS</Link>
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        variant="ghost"
                        arial-label="CONTACT"
                        _hover={{
                          color: "black",
                          bg: "white"
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
                          color: "black",
                          bg: "white"
                        }}
                      >
                        <a href={resume}  download>RESUME</a>
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

  )
}

export default NavBar