import React from 'react'
import {HiOutlineShoppingCart,HiOutlinePencil } from 'react-icons/hi';
import {AiOutlineBell } from 'react-icons/ai';
import { Link, Navigate } from "react-router-dom";
import { Box,SimpleGrid,Image,Button,Stack } from '@chakra-ui/react'
import Login from './Header/Login/Login';
import Trip from './Header/Trips/Trip';

function Header() {
  return (
    <div>
        <SimpleGrid>
    <Box  margin="auto">
 <Image  mt={10} src="https://www.tripadvisor.in/img2/langs/en_IN/popups/house/vr.jpg" />
 </Box>

 <Box mt={10}  height="40px" justifyContent="space-between" display="flex">
<Box  fit="object-fit" width="md" ><Link to="/"><Image height="40px" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"/></Link></Box>
<Stack direction="row"  spacing={4}>
<Button borderRadius={"20px"}  bg={"white"}><HiOutlinePencil/><Link to="/reviewpage">Review</Link></Button>
<Box><Trip/></Box>
<Button borderRadius={"20px"} bg={"white"}><AiOutlineBell/><Link to="/alertpage">Alerts</Link></Button>
<Box><Login/></Box>
<Button borderRadius={"20px"} bg={"white"} ><HiOutlineShoppingCart/> Basket  </Button>
</Stack>
 </Box >
</SimpleGrid>
    </div>
  )
}

export default Header