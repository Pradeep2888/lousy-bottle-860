import React, { useEffect, useState } from 'react'


export const AuthContext = React.createContext();

function AppContext({children}) {
    const [placeToVisit,setPlaceToVisit]=useState([])
    const [places,setPlaces]=useState([])
    const [direction,setDirection]=useState([])
    const [information,setInformation]=useState([])
    const [highlight,setHighlight]=useState([])
    const [covid,setCovid]=useState([])
    const [dothing,setDothing]=useState([])

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
    const getDirection=async()=>{
       try{
       let res=await fetch(`https://limitless-basin-87162.herokuapp.com/direction`)
       let dat=await res.json()
       setDirection(dat)
       }
       catch(err){
        console.log(err)
       }
    }
    const getInformation=async()=>{
       try{
       let res=await fetch(`https://limitless-basin-87162.herokuapp.com/places`)
       let dat=await res.json()
       setInformation(dat)
       }
       catch(err){
        console.log(err)
       }
    }
    const getCovid=async()=>{
       try{
       let res=await fetch(`https://limitless-basin-87162.herokuapp.com/places`)
       let dat=await res.json()
       setCovid(dat)
       }
       catch(err){
        console.log(err)
       }
    }
    const getDothing=async()=>{
       try{
       let res=await fetch(`https://limitless-basin-87162.herokuapp.com/places`)
       let dat=await res.json()
       setDothing(dat)
       }
       catch(err){
        console.log(err)
       }
    }
    const getHighlights=async()=>{
       try{
       let res=await fetch(`https://limitless-basin-87162.herokuapp.com/places`)
       let dat=await res.json()
       setHighlight(dat)
       }
       catch(err){
        console.log(err)
       }
    }
 useEffect(()=>{
  getData()
  getPlaces()
  getCovid()
  getDirection()
  getInformation()
  getDothing()
  getHighlights()
 },[])
  return (
    <div>
        < AuthContext.Provider value={{placeToVisit,places,direction,highlight,information,covid,dothing}} >
            {children}
        </ AuthContext.Provider>
    </div>
  )
}

export default AppContext