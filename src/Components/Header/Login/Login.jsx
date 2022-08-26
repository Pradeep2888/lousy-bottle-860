import { Box, Button, Image, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { SetLoginAuth } from '../../../Context/LoginAuth'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import GoogleLogin from 'react-google-login'

function Login() {

  const {isAuth,handelLogin}=useContext(SetLoginAuth)
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
// console.log(onClose)
//   const handleFailure=(result)=>{
//      console.log(result)
//   }
//   const handleLogin=(googleData)=>{
//  console.log(googleData)
//   }

const responseGoogle = (response) => {
 console.log(response)
if(response.error==="popup_closed_by_user"){
  handelLogin(true)
}

}

  if(isAuth===false){
    return (
      <div>
        <Button onClick={onOpen} borderRadius={"20px"} bg={"black"} color="white" _hover={"none"}>Sign in</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <GoogleLogin
              clientId="547442183737-14p2mq7ta9h5v1d2r9vi8sjdauqu3b68.apps.googleusercontent.com"
              buttonText="Log in With Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              ></GoogleLogin>
          </ModalBody>

          <ModalFooter>
  
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    )
  }
 else if(isAuth===true){
   return (
    <div>
      <Popover>
  <PopoverTrigger>
    <Box  borderRadius={"50px"} height="50px" ><Image height={"100%"} borderRadius={"50px"} src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f4/5d/default-avatar-2020-32.jpg?w=100&h=-1&s=1'/></Box>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverBody>
        <Button >Vew Profile</Button>
        <Button >Bookings</Button>
        <Button >Account Info</Button>
        <Button onClick={()=>{handelLogin(false)}} >Sign Out</Button>
      </PopoverBody>
    </PopoverContent>
  </Portal>
</Popover>
    </div>
   )
  }
 
}

export default Login