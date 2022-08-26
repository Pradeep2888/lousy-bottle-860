import { Box, Button, color, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Card2() {
  return (
    <div>
        <Box mt="90px" height={200} display={"flex"} overflow={"hidden"}  bg='#FAF1ED' w='100%' p={4} color='white'>
         <Box width={"60%"}>
          <Box>
          <Box textAlign={"left"}><Text color={"black"} fontWeight={"semibold"} fontSize='24px'>Get out there</Text></Box>
          <Box textAlign={"left"}><Text color={"black"}  fontSize='18px'>Best of the Best tours, attractions & activites you won't want to miss.</Text></Box>
          </Box>
          <Box mt={"10px"} textAlign="left" ><Button p={"25px 20px 25px 20px"} fontSize="18px" borderRadius={"20px"} bg={"black"} color="white" >See the list</Button></Box>
         </Box>
         <Box width={"40%"} ><Image width="100%" height={"100%"} src={`https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=400`} alt="img" /></Box>
      </Box>
    </div>
  )
}

export default Card2

