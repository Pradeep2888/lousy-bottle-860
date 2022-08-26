import { Box, Img, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi';

function SearchBar() {
  return (
    <div>
        <Box>
            <Box   pos={"relative"} left={20} top={180}>
            <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<BiSearch fontSize={30} />}
                mt={3}
                />

            <Input fontSize={30} borderRadius={"20px"} width={"800px"} height="60px" bgColor={"white"} placeholder='Where To ?' />
            </InputGroup>
            </Box>
            <Box>

          
            <Img src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.png"/>
            
            </Box>
            </Box>
        
    </div>
  )
}

export default SearchBar