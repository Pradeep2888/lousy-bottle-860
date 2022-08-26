import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../../Header'
import Navbar from '../../Navbar'
import { Tabs,Text, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function AlertPage() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Box><Text mt={10} fontSize={34} fontWeight="bold">Inbox</Text></Box>

      <Box>
      <Tabs ml={10}>
  <TabList>
    <Tab>Newest</Tab>
    <Tab>Unread</Tab>
    <Tab>Enquiries</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>No alerts or messages at this time</p>
    </TabPanel>
    <TabPanel>
      <p>No alerts or messages at this time</p>
    </TabPanel>
    <TabPanel>
      <p>No alerts or messages at this time</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </div>
  )
}

export default AlertPage