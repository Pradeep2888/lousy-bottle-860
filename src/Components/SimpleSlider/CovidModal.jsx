import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,

  } from '@chakra-ui/react'

function CovidModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        <Text textDecor={"underline"} cursor="pointer" onClick={onOpen} >Lern More</Text>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </div>
  )
}

export default CovidModal