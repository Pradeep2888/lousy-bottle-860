import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AuthContext } from '../../Context/AppContext'
import Header from '../Header'
import Navbar from '../Navbar'
import { Grid, GridItem } from '@chakra-ui/react'

import ImageSlider from './ImageSlider'
import CovidModal from './CovidModal'
import Card2 from '../Card2'

function SingleCard() {
    const param=useParams()
    const [data,setData]=useState([])
    const {placeToVisit,places,direction,highlight,information,covid,dothing}=useContext(AuthContext)
    
    // console.log(data)
    useEffect(()=>{
      setData(placeToVisit[param.id-1])
    },[param.id])
   
  return (
    <div >
      <Box ml={10} mr={10}>
      <Header/>
      <Navbar/>
      <Box textAlign={"left"} mt={10}>
        <Text fontSize={45} fontWeight="bold" >{data.title}</Text>
      </Box >
      <Box mt={10} display={"flex"} >
        <Box width={"60%"}><ImageSlider data={data}/></Box>
        <Box width={"40%"} border={"1px solid red"}></Box>
      </Box>

      <Box border={"1px solid black"} padding="30px" mt={20} display="flex">
       <Box textAlign={"left"}  width={"50%"}>
        <Text>Tour snapshot</Text>
        <Text className="heading">A local guide and driver shows you around Agra</Text>
       </Box>
       <Box  width={"50%"}>
       <Grid templateColumns='repeat(3, 1fr)'  gap={6}>
              <Text  >Duration:{data.duration}</Text>
              <Text>Taking Covid-19 safety measures <CovidModal/></Text>
              <Text>Hotel pickup offered</Text>
              <Text>Wheelchair accessible <CovidModal/></Text>
              <Text>Ticket type :Mobile </Text>
              <Text>Free cancellation <CovidModal/></Text>
        </Grid>
       </Box>
      </Box>
      
      <Box mt={10} mb={10} textAlign={"left"}>
        <Text className='heading'>About</Text>
         </Box>
       
       <Box textAlign={"left"}>
        <Text>{data.about}</Text>
       
        </Box> 

        <Box>
        <Grid mt={5} templateColumns='repeat(3, 1fr)'textAlign={"left"}  gap={3}>
              <Box>
              <Heading  as='h5' size='sm'>Know before you go</Heading>
              <Text>Duration:{data.duration}</Text>
              <Text>Mobile tickets accepted</Text>
              <Text>Mobile tickets accepted</Text>
              </Box>
              <Box>
              <Heading  as='h5' size='sm'>Cancellation policy</Heading>
              <Text>{data.cancelation}</Text>
              </Box>
              <Box>
              <Heading  as='h5' size='sm'>Available languages</Heading>
              <Text>{data.language}</Text>
              </Box>
        </Grid>
        </Box>
        
        <Box mt={5} textAlign={"left"}>
        <Heading  as='h5' size='sm'>Highlights</Heading>
        <UnorderedList>
        <ListItem>Lunch at a 5-star hotel is provided (if option selected)</ListItem>
        <ListItem>Round-trip fast train tickets are included; upgrade for first class</ListItem>
        <ListItem>Round-trip transfers from your Delhi hotel to the railway station are included </ListItem>
          </UnorderedList>
        </Box>

        <Box mt={5} textAlign={"left"}>
        <Heading  as='h6' size='md'>What to expect </Heading>
        <Heading mt={3} as='h5' size='sm'>Itinerary </Heading>
        <Text>This is a typical itinerary for this product</Text>
        <Heading mt={3} as='h5' size='sm'>Pass By:</Heading>
        <Text>New Delhi, New Delhi, National Capital Territory of Delhi</Text>
        <Text>Your tour will start with a pick-up from your preferred location in Delhi between 6:30 AM-7 AM. Pick-Up will be done from any hotel in Delhi / NCR or airport in Delhi.</Text>
        <Heading mt={3} as='h5' size='sm'>Pass By:</Heading>
        <Text> Nizamuddin Railway Station, Nizamuddin, Nizamuddin East, New Delhi, Delhi 110013, India</Text>
        <Text>After pick-up from your hotel in Delhi, our drive will drop you to the Nizammuddin Railway Station and help you finding you train coach and make sure you would get seated comfortably. Your train will depart from Agra at 08:00 AM and will arrive in Agra at 09:50 AM. </Text>
        <Heading mt={3} as='h5' size='sm'>Stop At:</Heading>
        <Text> Taj Mahal, Dharmapuri, Forest Colony, Tajganj, Agra 282001 India</Text>
        <Text>At 9:50 AM your train arrives at Agra Railway Station, our guide will meet you outside your train coach holding your name on the sign board. From here you will proceed to visit Taj Mahal, a monument symbol of Love made by Shah Jahan for his beloved wife Mumtaz Mahal.Rest of the history will be explained by your tour guide. Spend around 3 hours in the monument. </Text>
        </Box>


        <Box mt={10} textAlign={"left"}>
        <Heading  as='h5' size='sm'>Inclusions</Heading>
        <UnorderedList>
        <ListItem>Hotel to Station Drop in the morning.</ListItem>
        <ListItem>Station to Hotel Drop in the evening.</ListItem>
        <ListItem>Round Trip Air-Conditioned Train Coach Fare.</ListItem>
        <ListItem>Morning and evening meals in the train.</ListItem>
        <ListItem>Sightseeing by Private Air Conditioned Car in the destination city (Agra)</ListItem>
        <ListItem>Monument Entrance Tickets (If Option Booked)</ListItem>
        <ListItem>Lunch at 5 Star Hotel. (If Option Booked)...</ListItem>
          </UnorderedList>
        </Box>

        <Box mt={10} textAlign={"left"}>
        <Heading  as='h5' size='sm'>Exclusions</Heading>
        <UnorderedList>
        <ListItem>Any kind of personal expenses</ListItem>
        <ListItem>Any drinks served with lunch.</ListItem>
        <ListItem>Gratuities. (Optional)</ListItem>
          </UnorderedList>
        </Box>

        <Box mt={10} textAlign={"left"}>
        <Heading  as='h5' size='sm'>Additional information</Heading>
        <UnorderedList>
        <ListItem>Confirmation will be received at time of booking</ListItem>
        <ListItem>Wheelchair accessible</ListItem>
        <ListItem>Carry a copy of valid id proof.</ListItem>
        <ListItem>Infant seats available</ListItem>
        <ListItem>Transportation is wheelchair accessible</ListItem>
        <ListItem>Surfaces are wheelchair accessible</ListItem>
          </UnorderedList>
        </Box>

        <Box mt={10} textAlign={"left"}>
        <Heading  as='h6' size='md'>Travel safe during COVID-19</Heading>
        <Heading  as='h5' size='sm'>What you can expect during your visit</Heading>
        <UnorderedList>
        <ListItem>Regular temperature checks for staff</ListItem>
        <ListItem>Regularly sanitised high-traffic areas</ListItem>
        <ListItem>Temperature checks for tour participants upon arrival</ListItem>
          </UnorderedList>
        </Box>
        
        <Card2/>
      </Box>
    </div>
  )
}

export default SingleCard



// {
//   "id": 3,
//   "title": "Private Day Tour of Taj Mahal and Agra Fort By Superfast Train - All Inclusive",
//   "rating": "4.1",
//   "img_url1": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/70/73/3b.jpg",
//   "img_url2": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/33/de/cf.jpg",
//   "img_url3": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/70/73/41.jpg",
//   "img_url4": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/33/de/c9.jpg",
//   "img_url5": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/33/de/cc.jpg",
//   "about": "If you're short on time but want the chance to see the Taj Mahal, consider this tour, which gets you from Delhi to Agra and back quickly aboard the Gatimaan Express. Depart Delhi bright and early, getting you to Agra in time for a morning visit to the Taj Mahal. Then visit the 16th-century Agra Fort and the white-marble Tomb of Itimad-ud-Daulah, AKA  before returning to Delhi.",
//   "duration": "12h",
//   "cancelation": "For a full refund, cancel at least 24 hours in advance of the start date of the experience.",
//   "language": [
//       "German",
//       "Chinese",
//       "Russian",
//       "Japanese",
//       "English",
//       "French",
//       "Spanish"
//   ]
// }