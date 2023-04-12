import { Box, Center, Heading, SimpleGrid, Spacer, Stack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import GitHubCalendar from 'github-calendar';
import { useMediaQuery } from "@chakra-ui/react"


const GitHubStatus = () => {

    // const [displayCalender, setDisplayCalender] = useState(true)
    const [isMobileView] = useMediaQuery("(max-width: 1040px)")

    useEffect(() => {
        const username = 'Shanky43';

        GitHubCalendar('.calendar', username);
        GitHubCalendar('.calendar', username, { responsive: true });

        GitHubCalendar('.calendar', username, {
            proxy(username) {
                return fetch(`https://your-proxy.com/github?user=${username}`);
            }
        }).then(r => r.text());
    }, []);

    return (
        <div >
            <Box pt="5%" textAlign={"center"} bgColor={"black"} margin={["auto", "auto", "auto", "auto"]}><Heading as={"h1"} size={"2xl"} color="#e4002b">GIT-HUB STATS</Heading></Box>
            <Box style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                <Center>
                    <VStack>

                        <Box pt="15%">
                            <a href="https://git.io/streak-stats" id="github-streak-stats" >
                                <img src="https://github-readme-streak-stats.herokuapp.com?user=Shanky43&theme=dark&date_format=M%20j%5B%2C%20Y%5D&type=png&fire=DF2929&stroke=FF5B5B&ring=FF182C" alt="GitHub Streak" />
                            </a>
                        </Box>
                    </VStack>

                </Center>
            </Box>
            <Center style={{ backgroundColor: 'black' }} pt="5%">
                <Stack direction={{ base: 'column', md: 'column', lg: 'row' }} gap={["1", "5"]} >
                    <Box>
                        <picture style={{ backgroundColor: 'black', }} h={["100vh", "100vh", "100vh", "100vh"]}>
                            <source
                                srcSet="https://github-readme-stats.vercel.app/api?username=Shanky43&show_icons=true&theme=dark&count_private=true&title_color=e4002b&icon_color=e4002b&ring=e4002b&hide_border=true"
                                media="(prefers-color-scheme: dark)" id="github-stats-card"
                            />
                            <source
                                srcSet="https://github-readme-stats.vercel.app/api?username=Shanky43&show_icons=true&count_private=true&title_color=e4002b&icon_color=e4002b&ring=e4002b&hide_border=true"
                                media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" id="github-stats-card"
                            />
                            <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=Shanky43&show_icons=true&count_private=true&title_color=e4002b&icon_color=e4002b&ring=e4002b&hide_border=true" alt="" style={{ border: '1px solid white', borderRadius: "10px" }} />
                        </picture>
                    </Box>
                    <Spacer />
                    <Box>
                        <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Shanky43&layout=compact&langs_count=8&theme=dark&title_color=e4002b" alt="Top Languages" width={["100%", "100vw", "100vw", "100vw"]} height={["80vh", "80vh", "80vh", "100vh"]} />

                    </Box>

                </Stack>
            </Center>
            {!isMobileView ? <Center style={{ backgroundColor: 'black' }}>
                <Box p="5%" aspectRatio="1">
                    <script p="2" src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"></script>
                    <link p="10" rel="stylesheet" textAlign="Center" class="react-activity-calendar" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css" />

                    <div className="calendar" data-username="Shanky43"></div>
                </Box>
            </Center> : null}



        </div >
    )
}

export default GitHubStatus