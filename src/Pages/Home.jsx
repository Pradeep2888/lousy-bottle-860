import { Box } from '@chakra-ui/react'
import React from 'react'
import Card2 from '../Components/Card2'
import SimpleSlider from '../Components/Cards'
import Header from '../Components/Header'
import HolidayCard from '../Components/HolidayCard'
import SearchBar from '../Components/SearchBar'
import Navbar from '../Components/Navbar'
import TripCard from '../Components/TripCard'
import { Link } from 'react-router-dom'

// import '/Image/gaara.png'




function Home() {
  return (
    <div>
      {/* <div><Link to="/tripspage">TripPage</Link></div> */}
  <Header/>
<Navbar/>
<SearchBar/>
{/* <SimpleSlider/> */}
<Card2/>
{/* <TripCard/> */}
{/* <HolidayCard/> */}
<Card2/>
    </div>
  )
}

export default Home