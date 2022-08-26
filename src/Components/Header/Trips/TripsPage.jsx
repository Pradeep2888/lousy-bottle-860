import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Header from '../../Header'
import Navbar from '../../Navbar'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function TripsPage() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Text mt={10} fontSize={34} fontWeight="bold">Trips</Text>


      <Box mt={20}>
      <Tabs ml={10} variant='soft' scrollBehavior={"none"} >
  <TabList>
    <Box display={"flex"} gap={10}>
    <Tab  className='tabs'>All Trips</Tab>
    <Tab  className='tabs'>Private Trips</Tab>
    <Tab className='tabs'>Public Trips</Tab>
    <Tab className='tabs'>My Saves</Tab>
    </Box>
  </TabList>
  <TabPanels>
    {/* one */}
    <TabPanel>
      <Box display={"flex"}>
        <Box textAlign={"left"} mt={10} ml={40} width={"50%"}>
          <Text fontSize={24} fontWeight={"bold"}>Create Your First Trip</Text>
          <Text>Save traveller-recommended places for your trip</Text>
          <Text>View the things to do, restaurants and hotels you saved on a map</Text>
          <Text>Easily access all your saves while travelling, wherever you go</Text>
          <Button color={"white"}  borderRadius={"20px"} bg={"black"}>Get Started</Button> 
        </Box>
        <Box width={"50%"}>
          <Image src='https://static.tacdn.com/img2/trips/trips-logged-out-page-image-v4-small.png' />
        </Box>
      </Box>
    </TabPanel>
    {/* Two */}
    <TabPanel>
    <Box>
    <Text fontSize={34} fontWeight={"bold"}>You haven’t created any private Trips</Text>
    <Text>Have great travel ideas? Bring them together by creating your first private Trip today!</Text>
    <Button    className="tabs" mt={10}>Create a Trip</Button> 
    </Box>
    </TabPanel>
    <TabPanel>
    <Box>
    <Text fontSize={34} fontWeight={"bold"}>You haven’t shared any public Trips</Text>
    <Text>Have great travel ideas? Bring them together by creating your first private Trip today!</Text>
    <Button    className="tabs" mt={10}>Create a Trip</Button> 
    </Box>
    </TabPanel>
    <TabPanel>
    <Box>
    <Text fontSize={34} fontWeight={"bold"}>You haven’t saved anything yet</Text>
    <Text>To save, search for hotels, restaurants and things to do, then tap the heart</Text>
    <Button    className="tabs" mt={10}>Start Trip</Button> 
    </Box>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </div>
  )
}

export default TripsPage