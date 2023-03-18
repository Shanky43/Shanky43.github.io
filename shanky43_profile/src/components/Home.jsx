import {
    GridItem, Container, Grid, Heading,
    Box, Wrap, WrapItem, Avatar, Flex,
    HStack, Stack, Text, VStack,
    IconButton, Button, Spacer, Drawer,
    DrawerHeader, DrawerBody, DrawerOverlay,
    DrawerContent, DrawerCloseButton, Input, DrawerFooter, useColorMode, Center
} from '@chakra-ui/react'
import TypeWriterEffect from 'react-typewriter-effect';
import Design from './Design';

const Home = () => {
    const height="600px"
    return (
        <div>

            <Container maxW={"100%"}  h={["80%","80%","80%","100%"]} bgColor={"black"} color="white">
             <Box >   <Design height={height} /></Box>
                <Center pt={"15%"}>
                    <VStack>
                        <HStack>
                            <Heading as={"h1"} size={"3xl"} m="10" textAlign={"center"}>HEY, I'M  
                            <Text as={"span"} color='#e4002b'> SHANKAR S</Text> 
                                <TypeWriterEffect
                                    textStyle={{
                                        fontFamily: 'inherit',
                                        color: '#66d1e5',
                                        fontWeight: "bold",
                                        fontSize: '0.3em',
                                        textAlign: "center",
                                        marginTop: "5%",
                                      

                                    }}
                                    startDelay={1000}
                                    cursorColor="#66d1e5"
                                    multiText={[
                                        "A FULL STACK WEB DEVELOPER.", "FRONT END DEVELOPER.", "REACT DEVELOPER.", "MERN STACK DEVELOPER."
                                    ]}
                                    multiTextDelay={2000}
                                    typeSpeed={25}
                                    multiTextLoop
                                />

                            </Heading>
                        </HStack>
                        <Center> <Text w={"70%"} fontSize="2em" textAlign="center">A Full Stack Web Developer focused on building the Frontend of Websites and Web Applications that leads to the success of the overall product</Text></Center>
                    </VStack>
                </Center>
            </Container>
        </div>
    )
}

export default Home