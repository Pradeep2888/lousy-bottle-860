import React from 'react'
import { Route, Routes } from 'react-router'
import AlertPage from '../Components/Header/Alert/AlertPage'
import ReviewPage from '../Components/Header/Reviews/ReviewPage'
import Trip from '../Components/Header/Trips/Trip'
import TripsPage from '../Components/Header/Trips/TripsPage'
import Home from '../Pages/Home'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tripspage" element={<TripsPage/>}/>
            <Route path="/alertpage" element={<AlertPage/>}/>
            <Route path="/reviewpage" element={<ReviewPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes