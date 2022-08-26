import React, { useEffect, useState } from 'react'


export const AuthContext = React.createContext();

function AppContext({children}) {
    const [placeToVisit,setPlaceToVisit]=useState([])
    const [places,setPlaces]=useState([])

    const getData=async()=>{
       try{
       let res=await fetch(`https://limitless-basin-87162.herokuapp.com/place-to-visit`)
       let dat=await res.json()
       setPlaceToVisit(dat)
       }
       catch(err){
        console.log(err)
       }
    }
    const getPlaces=async()=>{
       try{
       let res=await fetch(`https://limitless-basin-87162.herokuapp.com/places`)
       let dat=await res.json()
       setPlaces(dat)
       }
       catch(err){
        console.log(err)
       }
    }
 useEffect(()=>{
  getData()
  getPlaces()
 },[])
  return (
    <div>
        < AuthContext.Provider value={{placeToVisit,places}} >
            {children}
        </ AuthContext.Provider>
    </div>
  )
}

export default AppContext