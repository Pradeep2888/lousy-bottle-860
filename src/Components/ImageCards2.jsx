import { Badge, Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

function ImageCards2({place,state,img}) {
// console.log(img)
      return (
        <Box mr={4} height={"250px"} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image height={"100%"} src={img[2]} alt={place} />
    
          
            <Box
              fontWeight='bold'
              as='h4'
              lineHeight='tight'
              noOfLines={2}
              position={"absolute"}
              bottom={5}
              fontSize={20}
              color={"white"}
              textAlign="left"
              ml={1}
            >
              <p>{place}</p>
            </Box>
         
        </Box>
      )
    }

export default ImageCards2