import {
    AspectRatio, Video, Text,
    Box, Button, Center, Container, Heading, HStack, Spacer, SimpleGrid,

} from '@chakra-ui/react'
import React from 'react'
// import { Video,AspectRatioBox } from "@chakra-ui/core";
import FamousFriedFeast from "../videos/fff.mp4"

const Projects = () => {
    return (
        <div>
            <Container bgColor={"black"} maxW="100%" >
                <Center><Heading as="h1" size={"2xl"} color="#e4002b" >PROJECTS</Heading></Center>
                <Center mt="10%" pb="10%">
                    <SimpleGrid  columns={[1,2]} width="90%" height={"80vh"} >
                        <Box  width="40%" height={"60vh"} ml="10" >
                            <Heading as="h4" color="#66d1e5">Kentucky Fried Chicken KFC.</Heading>
                            <Text fontSize="1.5em" fontWeight={"bold"} color='#e4002b'>(clone)</Text>
                            <Box>
                                <Text textAlign={"justify"} color="white" mt={5} fontSize="1.2em">
                                    The KFC website offers a sleek and intuitive platform, providing customers with a seamless online experience to explore the menu, customize orders, and conveniently place an order for delivery or pickup.
                                </Text>
                                <Center m="4"><Button bgColor={"#e4002b"} _hover={{bg:"#e4002b"}}
                                rounded="full"
                                color="white">TECH STACK</Button>  
                                </Center>
                                <Box size="sm">
                              <Center > <HStack gap={5}>
                                <i class="fa-brands fa-3x fa-react"
                                style={{color:"#68d2e5"}}
                                ></i>
                                <i class="fa-solid fa-3x fa-bolt" style={{   color:"#49c8c2"}}></i>
                                <i class="fa-brands fa-3x fa-css3-alt"
                                style={{color:"#2196f3"}}
                                ></i>
                                <i class="fa-brands fa-3x fa-node" style={{color:"#90c53f"}}></i>
                                    </HStack></Center>
                              </Box>  
                            </Box>
                        </Box>
                        <Spacer />
                        <Box  width="50%" height={"60vh"} mr="8"
                            style={{
                                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                                borderRadius: "2%",
                                overflow: "hidden",
                            }}
                        >

                            <video
                                src={FamousFriedFeast}
                                autoPlay
                                loop
                                controls={false}
                                muted
                                style={{
                                    objectFit: "fill",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "2%"
                                }}
                            />
                        </Box>
                    </SimpleGrid>

                </Center>
                {/* <Center mt="0%" pb="10%">
                    <HStack  width="90%" height={"80vh"} >
                       
                        <Box  width="50%" height={"60vh"} mr="8"
                            style={{
                                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                                borderRadius: "2%",
                                overflow: "hidden",
                            }}
                        >

                            <video
                                src={FamousFriedFeast}
                                autoPlay
                                loop
                                controls={false}
                                muted
                                style={{
                                    objectFit: "fill",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "2%"
                                }}
                            />
                        </Box>
                        <Spacer />
                        <Box border={"2px solid black"} width="40%" height={"60vh"} ml="10" >
                            <Heading as="h4" color="#66d1e5">Kentucky Fried Chicken KFC.</Heading>
                            <Text fontSize="1.5em" fontWeight={"bold"} color='#e4002b'>(clone)</Text>
                            <Box>
                                <Text textAlign={"justify"} color="white" mt={5} fontSize="1.2em">
                                    The KFC website offers a sleek and intuitive platform, providing customers with a seamless online experience to explore the menu, customize orders, and conveniently place an order for delivery or pickup.
                                </Text>
                                <Center m="4"><Button bgColor={"#e4002b"} _hover={{bg:"#e4002b"}}
                                rounded="full"
                                color="white">TECH STACK</Button>  
                                </Center>
                                <Box size="sm">
                              <Center > <HStack gap={5}>
                                <i class="fa-brands fa-3x fa-react"
                                style={{color:"#68d2e5"}}
                                ></i>
                                <i class="fa-solid fa-3x fa-bolt" style={{   color:"#49c8c2"}}></i>
                                <i class="fa-brands fa-3x fa-css3-alt"
                                style={{color:"#2196f3"}}
                                ></i>
                                <i class="fa-brands fa-3x fa-node" style={{color:"#90c53f"}}></i>
                                    </HStack></Center>
                              </Box>  
                            </Box>
                        </Box>
                       
                    </HStack>

                </Center>
                <Center mt="0%" pb="10%">
                    <HStack  width="90%" height={"80vh"} >
                        <Box border={"2px solid black"} width="40%" height={"60vh"} ml="10" >
                            <Heading as="h4" color="#66d1e5">Kentucky Fried Chicken KFC.</Heading>
                            <Text fontSize="1.5em" fontWeight={"bold"} color='#e4002b'>(clone)</Text>
                            <Box>
                                <Text textAlign={"justify"} color="white" mt={5} fontSize="1.2em">
                                    The KFC website offers a sleek and intuitive platform, providing customers with a seamless online experience to explore the menu, customize orders, and conveniently place an order for delivery or pickup.
                                </Text>
                                <Center m="4"><Button bgColor={"#e4002b"} _hover={{bg:"#e4002b"}}
                                rounded="full"
                                color="white">TECH STACK</Button>  
                                </Center>
                                <Box size="sm">
                              <Center > <HStack gap={5}>
                                <i class="fa-brands fa-3x fa-react"
                                style={{color:"#68d2e5"}}
                                ></i>
                                <i class="fa-solid fa-3x fa-bolt" style={{   color:"#49c8c2"}}></i>
                                <i class="fa-brands fa-3x fa-css3-alt"
                                style={{color:"#2196f3"}}
                                ></i>
                                <i class="fa-brands fa-3x fa-node" style={{color:"#90c53f"}}></i>
                                    </HStack></Center>
                              </Box>  
                            </Box>
                        </Box>
                        <Spacer />
                        <Box  width="50%" height={"60vh"} mr="8"
                            style={{
                                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                                borderRadius: "2%",
                                overflow: "hidden",
                            }}
                        >

                            <video
                                src={FamousFriedFeast}
                                autoPlay
                                loop
                                controls={false}
                                muted
                                style={{
                                    objectFit: "fill",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "2%"
                                }}
                            />
                        </Box>
                    </HStack>

                </Center> */}
                
            </Container>

        </div>
    )
}

export default Projects