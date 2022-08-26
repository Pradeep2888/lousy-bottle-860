import { Button } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import {BiHeart } from 'react-icons/bi';
import TripsPage from './TripsPage';
import { Link, Navigate } from "react-router-dom";
import { SetTripContext } from '../../../Context/TripAuth';

function Trip() {
const {handelClick,status}=useContext(SetTripContext)
  // if(status===true){
  //   return ()
  // }
  return (
    <div>
      <Button  borderRadius={"20px"} bg={"white"}><BiHeart/><Link to="/tripspage">Trips</Link></Button>  
    </div>
  )
}

export default Trip