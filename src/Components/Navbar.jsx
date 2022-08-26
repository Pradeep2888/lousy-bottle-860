import React from 'react'
import { Icon, Tab, Text } from '@chakra-ui/react'
// import { MdSettings } from 'react-icons/md'
import { Box,SimpleGrid,Image,Button,Stack,Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,Portal } from '@chakra-ui/react'


import {AiOutlineHome } from 'react-icons/ai';
import {MdFlight } from 'react-icons/md';
// import {IoRestaurantOutline } from 'react-icons/io';
import { TbRoad} from 'react-icons/tb';
import { GiByzantinTemple} from 'react-icons/gi';
import {BiBed ,BiRestaurant} from 'react-icons/bi';
import {BsThreeDots,BsChatLeft } from 'react-icons/bs';


function Navbar() {
  return (
    <div>
        <Box>
      <SimpleGrid mt={10} columns={4} spacing={3}>
  <Box _hover={{color:"white",bg:'black'}} cursor={"pointer"}  borderRadius={10} border={"1px solid black"} display={"flex"} justifyContent="space-between" p={"5px"} fontSize={24} bg='white' height='auto'><Text fontSize={20} as='samp' >Hotel</Text><BiBed/></Box>
  <Box _hover={{color:"white",bg:'black'}} cursor={"pointer"}  borderRadius={10} border={"1px solid black"} display={"flex"} justifyContent="space-between" p={"5px"} fontSize={24} bg='white' height='auto'><Text fontSize={20} as='samp' >Holiday Homes</Text><AiOutlineHome/></Box>
  <Box _hover={{color:"white",bg:'black'}} cursor={"pointer"}  borderRadius={10} border={"1px solid black"} display={"flex"} justifyContent="space-between" p={"5px"} fontSize={24} bg='white' height='auto'><Text fontSize={20} as='samp' >Things to Do</Text><TbRoad/></Box>
  <Box _hover={{color:"white",bg:'black'}} cursor={"pointer"}  borderRadius={10} border={"1px solid black"} display={"flex"} justifyContent="space-between" p={"5px"} fontSize={24} bg='white' height='auto'><Text fontSize={20} as='samp' >Restaurants</Text><BiRestaurant/></Box>
  <Box _hover={{color:"white",bg:'black'}} cursor={"pointer"}  borderRadius={10} border={"1px solid black"} display={"flex"} justifyContent="space-between" p={"5px"} fontSize={24} bg='white' height='auto'><Text fontSize={20} as='samp' >Travel Forums</Text><BsChatLeft/></Box>
  <Box _hover={{color:"white",bg:'black'}} cursor={"pointer"}  borderRadius={10} border={"1px solid black"} display={"flex"} justifyContent="space-between" p={"5px"} fontSize={24} bg='white' height='auto'><Text fontSize={20} as='samp' >Flight</Text><MdFlight/></Box>
  <Box _hover={{color:"white",bg:'black'}} cursor={"pointer"}  borderRadius={10} border={"1px solid black"} display={"flex"} justifyContent="space-between" p={"5px"} fontSize={24} bg='white' height='auto'><Text fontSize={20} as='samp' >Cruises</Text><GiByzantinTemple/></Box>
 

  <Popover>
  <PopoverTrigger>
  <Box _hover={{color:"white",bg:'black'}} cursor={"pointer"}  borderRadius={10} border={"1px solid black"} display={"flex"} justifyContent="space-between" p={"5px"} fontSize={24} bg='white' height='auto'><Text fontSize={20} as='samp' >More</Text><BsThreeDots/></Box>
  </PopoverTrigger>
  <Portal >
    <PopoverContent>
      {/* <PopoverCloseButton /> */}
      <PopoverBody>
        <Stack  direction={["column"]}>
        <Button>Add a Place</Button>
        <Button>Airlines</Button>
        <Button>Cruises</Button>
        <Button>Flights</Button>
        <Button>Help Centere</Button>
        <Button>Hire a Trip Designer</Button>
        <Button>Package Holiday</Button>
        <Button>Travel Articles</Button>
        <Button>Travellers Choise</Button>
        </Stack>
      </PopoverBody>
    </PopoverContent>
  </Portal>
</Popover>

</SimpleGrid>
</Box>
    </div>
  )
}

export default Navbar