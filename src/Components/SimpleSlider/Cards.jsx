import { Button } from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { AuthContext } from "../../Context/AppContext";
import AirbnbCard from "./Cardlist1";

export default function SimpleSlider() {
  const {placeToVisit}=useContext(AuthContext)
  // console.log(placeToVisit)

  const ref=useRef()
  // console.log(ref)

  const handelClick1=()=>{
    ref.current.slickNext()
  }
  const handelClick2=()=>{
    ref.current.slickPrev()
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div style={{marginTop:"80px"}}>
   
      <div className="row1"  >
      <div><p className="heading">Top experiences on Tripadvisor</p></div>
      <div><Button className="btn" onClick={handelClick2}>Previous</Button>
      <Button className="btn" onClick={handelClick1}>Next</Button></div>
      </div>
   

    <Slider  ref={ref} {...settings}>
     
      {
        placeToVisit?.map((item)=>(

          <div className="card" key={item.id} >
            <AirbnbCard {...item} />
            </div>
        ))
      }
     
    </Slider>
  </div>
  );
}