import React from 'react'
import { Route, Routes } from 'react-router'
import AlertPage from '../Components/Header/Alert/AlertPage'
import ReviewPage from '../Components/Header/Reviews/ReviewPage'
import SingleCard from '../Components/SimpleSlider/SingleCard'
import TripsPage from '../Components/Header/Trips/TripsPage'


import Home from '../Pages/Home'
import SingleTripCard from '../Components/TripCard/SingleTripCard'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home/:id" element={<SingleCard/>}/>
            <Route path="/trippage/:id" element={<SingleTripCard/>}/>
            <Route path="/alertpage" element={<AlertPage/>}/>
            <Route path="/reviewpage" element={<ReviewPage/>}/>
            
        </Routes>
    </div>
  )
}

export default AllRoutes