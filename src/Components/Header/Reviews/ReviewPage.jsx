import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Header from '../../Header'
import Navbar from '../../Navbar'

function ReviewPage() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Box>
        <Text mt={10} fontSize={54} fontWeight="bold">Share your experience,</Text>
        <Text  fontSize={54} fontWeight="bold">write a review.</Text>
        </Box>
    </div>
  )
}

export default ReviewPage