import {
  GridItem, Container, Grid, Heading,
  Box, Wrap, WrapItem, Avatar, Flex,
  HStack, Stack, Text, VStack,
  IconButton, Button, Spacer, Drawer,
  DrawerHeader, DrawerBody, DrawerOverlay,
  DrawerContent, DrawerCloseButton, Input, DrawerFooter, useColorMode, Center
} from '@chakra-ui/react'
import React from 'react'
import AnimatePresence from '@chakra-ui/transition';


import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

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
    <>
      <Flex maxW='100%' style={{ margin: "0%", padding: "0%" }} justifyContent="flex-end">
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
                  <Avatar name='Shankar S' src='https://avatars.githubusercontent.com/u/112791993?v=4' bg="yellow" />
                </WrapItem>
              </Wrap>
              <Heading >SHANKAR S</Heading>
            </HStack>
          </Flex>
          <Spacer />
          <Flex>
            <Box>
              <Button
                variant="ghost"
                arial-label="home"
                _hover={{
                  color: "white",
                  bg: "#e4002b"
                }}
              >
                <a href="#">HOME</a>
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
                <a href="#">ABOUT</a>
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
                <a href="#">SKILLS</a>
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
                <a href="#">PROJECTS</a>
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
                <a href="#">CONTACT</a>
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
                <a href="#">RESUME</a>
              </Button>
            </Box>
          </Flex>
          <Stack direction={'row'} spacing={7} placement="right">
            <Button onClick={toggleColorMode} bg="black" _hover={{ bg: "black" }}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>


      {/* //---------------------- */}

      <Box
        display="flex"
        justifyContent="flex-end"
        bgColor="black"
      >
        <Box ml="auto">
          <IconButton
            aria-label='Open Menu'
            size={"lg"}
            mr={2}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={["flex", "flex", "flex", "none"]}
            onClick={onOpen}
            bg={colorMode === "light" ? "black" : "black"}
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
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">  <Flex>
                <HStack>
                  <Wrap>
                    <WrapItem>
                      <Avatar name='Shankar S' src='https://avatars.githubusercontent.com/u/112791993?v=4' bg="yellow" />
                    </WrapItem>
                  </Wrap>
                  <Heading>SHANKAR S</Heading>
                </HStack>
              </Flex >

              </DrawerHeader>

              <DrawerBody  >
                <Flex >

                  <Flex flexDir={"column"}
                  
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
                        <a href="#">HOME</a>
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
                        <a href="#">ABOUT</a>
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
                        <a href="#">SKILLS</a>
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
                        <a href="#">PROJECTS</a>
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
                        <a href="#">CONTACT</a>
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
                        <a href="#">RESUME</a>
                      </Button>
                    </Box>
                  </Flex>
                </Flex>
              </DrawerBody>


            </DrawerContent>
          </Drawer>
        </Flex>

      </Flex>



    </>

  )
}

export default NavBar