import { Box, Image, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AuthContext } from '../../Context/AppContext'
import { Grid, GridItem } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import Header from '../Header'
import Navbar from '../Navbar'

const data1=[
  {
    "id": "1",
    "place": "Mussoorie",
    "distric": "Dehradun Distric",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/b7/mussoorie.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e6/c1/4b/kempty-falls.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/7b/b4/bc/gushing-waters-of-kempty.jpg?w=400&h=200&s=1"
    ],
    "about": "Established in the Himalaya foothills by a British Army officer in 1820, the Queen of the Hills stands above the rest with its deep woods, favorable climate and Doon Valley views. Its name is derived from the berry-covered Mansur shrub found in abundance around this trekker-friendly area. Vestiges of its colonial past are still reflected in the cuisine and architecture. For stunning natural sights, head to Gun Hill or Childer's Lodge, the two highest peaks, or the famous Kempty waterfall.",
    "do": "Places to see, ways to wander, and signature experiences.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "eat": "Can't-miss spots to dine, drink, and feast."
  },
  {
    "id": "2",
    "place": "New Delhi",
    "distric": "National Capital Territory Of Delhi",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/03/3f/fd/caption.jpg?w=700&h=500&s=1&cx=2294&cy=1952&chk=v1_c3b28b866491ff3722ce",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/03/81/3b/caption.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/03/80/cf/caption.jpg?w=400&h=200&s=1"
    ],
    "about": "Laid out by British architect Edwin Lutyens, the Indian capital is a striking modern metropolis. A gracious contrast to Old Delhi's winding streets, the grand avenues and stately buildings of New Delhi are rich with history and culture, from Gandhi's Delhi home (and the site of his assassination) to the tomb of Humayun, a complex of Mughal buildings reminiscent of the Taj Mahal. Chaotic traffic is best left to the locals. Negotiate a good price for taxis or travel on the new Delhi Metro.",
    "do": "Places to see, ways to wander, and signature experiences.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "eat": "Can't-miss spots to dine, drink, and feast."
  },
  {
    "id": "3",
    "place": "Agra",
    "distric": "Agra",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/fc/agra.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/0b/04/29/fort-amber-rajastan-indien.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/72/d5/de/photo5jpg.jpg?w=400&h=200&s=1"
    ],
    "about": "Where better to go for a romantic holiday than to the great testament of love, the Taj Mahal? Built by the grieving Mughal Emperor Shah Jahan in memory of his late wife Mumtaz Mahal, the Taj Mahal’s unrivaled beauty explains why it’s regarded as one of the eight wonders of the world. A visit to India wouldn’t be complete without it. Other must-experience destinations in Agra are two other UNESCO World Heritage Sites, the sandstone Red Fort and Fatehpur Sikri.",
    "do": "Places to see, ways to wander, and signature experiences.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "eat": "Can't-miss spots to dine, drink, and feast."
  },
  {
    "id": "4",
    "place": "Pushkar",
    "distric": "Ajmer",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/bf/5d/0c/pushkar-lake.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/de/21/b1/brahma-s-temple.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/39/88/2d/savitri-tempal-on-hill.jpg?w=400&h=200&s=1"
    ],
    "about": "Where better to go for a romantic holiday than to the great testament of love, the Taj Mahal? Built by the grieving Mughal Emperor Shah Jahan in memory of his late wife Mumtaz Mahal, the Taj Mahal’s unrivaled beauty explains why it’s regarded as one of the eight wonders of the world. A visit to India wouldn’t be complete without it. Other must-experience destinations in Agra are two other UNESCO World Heritage Sites, the sandstone Red Fort and Fatehpur Sikri.",
    "do": "Places to see, ways to wander, and signature experiences.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "eat": "Can't-miss spots to dine, drink, and feast."
  },
  {
    "id": "5",
    "place": "Rishikesh",
    "distric": "Dehradun",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/47/32/rishikesh.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/0a/af/5b/haridwar-indien.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/c9/f3/1f/lakshman-jhula-suspension.jpg?w=400&h=200&s=1"
    ],
    "about": "The holy city of Rishikesh, in the base of the Himalayas, holds deep cultural and spiritual significance for local Hindus. Sacred rivers and mountains set the scene for yoga and reflective hikes, and rafting here is an absolute must. The Beatles got in touch with their Eastern spiritual side here, writing several songs during a 1968 stint at a local ashram..",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences.",
    "eat": "Can't-miss spots to dine, drink, and feast."
  },
  {
    "id": "6",
    "place": "Nainital",
    "distric": "Nainital",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/30/3a/3c/mesmerizing.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/47/3a/05/20170507-082837-largejpg.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/00/2e/a0/naini-lake.jpg?w=400&h=200&s=1"
    ],
    "about": "Natural beauty abounds in the state of Uttaranchal's Lake District. Boaters flock to hill-ringed Naini Lake, which according to mythology is one of the emerald eyes of Shiva's wife. A hike or horseback ride to the top of Naina Peak (aka China Peak), the highest point, provides stunning views of the snow-capped Himalayas. To share a prime vantage point with family members of all ages, take the aerial lift up to Snow View; there's also a small marble temple at the top dedicated to Dev Mundi.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences.",
    "eat": "Can't-miss spots to dine, drink, and feast."
  },
  {
    "id": "7",
    "place": "Alwar",
    "distric": "Alwar",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/46/65/04/photo3jpg.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/56/25/6d/palace.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/f4/b9/c7/siliserh-lake.jpg?w=400&h=200&s=1"
    ],
    "about": "Natural beauty abounds in the state of Uttaranchal's Lake District. Boaters flock to hill-ringed Naini Lake, which according to mythology is one of the emerald eyes of Shiva's wife. A hike or horseback ride to the top of Naina Peak (aka China Peak), the highest point, provides stunning views of the snow-capped Himalayas. To share a prime vantage point with family members of all ages, take the aerial lift up to Snow View; there's also a small marble temple at the top dedicated to Dev Mundi.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences.",
    "eat": "Can't-miss spots to dine, drink, and feast."
  },
  {
    "id": "8",
    "place": "Ramnagar",
    "distric": "Ramnagar",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/80/8e/5d/jim-corbett.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/76/47/f3/mountain-blue-sky-nature.jpg?w=400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/8a/30/98/img-20190515-162433-largejpg.jpg?w=400&h=200&s=1"
    ],
    "about": "Situated in Nainital district of Uttarakhand, Corbett has long been a haunt for tourists and wildlife lovers. The oldest national park in India, Corbett, has over 400 different species of flora and over 550 different species of fauna. The park is best known as a protected area for the critically endangered Bengal tiger of India. Tourism is allowed in selected areas of Corbett Tiger Reserve so that people get an opportunity to see its splendid landscape and the diverse wildlife living here. There are many accommodation facilities at Ramnagar as well as at the Corbett National Park. Being one of the most frequently visited parks in the country, the forest department and other agencies have their hotels, lodges, rest houses, log huts for the visitors.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences.",
    "eat": "Can't-miss spots to dine, drink, and feast."
  },
  {
    "id": "9",
    "place": "Sawai Madhopur",
    "distric": "Sawai Madhopur",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/67/60/06/ranthambore-national.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/19/df/08/photo1jpg.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/88/43/8c/nahargarh-ranthambhore.jpg?w=400&h=200&s=1"
    ],
    "about": "Situated in Nainital district of Uttarakhand, Corbett has long been a haunt for tourists and wildlife lovers. The oldest national park in India, Corbett, has over 400 different species of flora and over 550 different species of fauna. The park is best known as a protected area for the critically endangered Bengal tiger of India. Tourism is allowed in selected areas of Corbett Tiger Reserve so that people get an opportunity to see its splendid landscape and the diverse wildlife living here. There are many accommodation facilities at Ramnagar as well as at the Corbett National Park. Being one of the most frequently visited parks in the country, the forest department and other agencies have their hotels, lodges, rest houses, log huts for the visitors.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences.",
    "eat": "Can't-miss spots to dine, drink, and feast."
  },
  {
    "id": "10",
    "place": "Dubai",
    "distric": "Dubai",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/ff/2a/caption.jpg?w=700&h=500&s=1&cx=7014&cy=3760&chk=v1_14690e40614ca9b48b73",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/80/55/c7/caption.jpg?w=400&h=200&s=1&cx=2804&cy=1471&chk=v1_16563620470e85f917a2",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/80/58/7b/caption.jpg?w=400&h=-1&s=1"
    ],
    "about": "From luxury hospitality and cutting-edge architecture to world-class shopping, culture and nature, discover what makes Dubai the best of the best",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences.",
    "eat": "Can't-miss spots to dine, drink, and feast."
  },
  {
    "id": "11",
    "place": "Bengaluru",
    "state": "India",
    "distric": "Bengaluru",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/2f/7a/palace-from-the-outside.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/ce/5d/91/bangalore-palace-windsor.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/47/a2/f7/wonderla-amusement-park.jpg?w=400&h=200&s=1"
    ],
    "about": "Known as both the Garden City and The Silicon Valley of India, Bangalore (officially Bengaluru) is a techie’s paradise, boasting the highest concentration of IT companies in the country. When you’re done geeking out, there are plenty of gardens, museums, natural features, palaces and temples to fill your dance card. Visit Vidhana Soudha, Cubbon Park and the Ulsoor Lake of Bangalore, well known for its beautiful locales and boating facilities. Bangalore is also a major centre of Indian classical music and dance, and of vivid, cutting-edge nightlife.",
    "eat": "Can't-miss spots to dine, drink, and feast.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences."
  },
  {
    "id": "12",
    "place": "Pune",
    "state": "India",
    "distric": "Pune",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/59/ac/b6/lavasa-international.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/92/46/b5/img-20151121-094118-largejpg.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/16/21/4f/photo4jpg.jpg?w=400&h=200&s=1"
    ],
    "about": "Love garlic? You’ll love the food in Pune. Unlike other cuisines of the subcontinent, Pune cuisine relies heavily on the aromatic bulb. Soothe your palate with sweets like bhakarwadi, a pastry rolled with coriander, tamarind and sesame seeds, or cool off with a thick milkshake made with dried fruit..",
    "eat": "Can't-miss spots to dine, drink, and feast.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences."
  },
  {
    "id": "13",
    "place": "Hyderabad",
    "state": "India",
    "distric": "Hyderabad",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/10/83/cb/ramoji-film-city-hyderabad.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/53/6e/57/chowmahalla-palace.jpg?w=400&h=200&s=1"
    ],
    "about": "Want a taste of being royal? Eat in Hyderabad, where culinary traditions have been passed down from the Nizam monarchy. Arabic, Turkish and Mughlai influences are easily recognisable. The city is famous for its rich, aromatic biryani made with lamb, chicken or vegetables and served with fragrant basmati rice. Satisfy your sweet tooth with double-ka-meetha, a bread pudding.",
    "eat": "Can't-miss spots to dine, drink, and feast.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences."
  },
  {
    "id": "14",
    "place": "Kolkata (Calcutta)",
    "state": "India",
    "distric": "Kolkata (Calcutta)",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fe/ac/kolkata-calcutta.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/33/8f/36/victoria-memorial-beauty.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/6c/53/e0/the-howrah-bridge.jpg?w=400&h=200&s=1"
    ],
    "about": "This former British colonial stronghold boasts evidence of over two millennia of habitation, with ornate, architecturally diverse buildings, ranging from crumbing ruins to Victorian treasures. Home to lively festivals and a vibrant artistic community, clamorous markets and packed temples, this city is crowded and polluted, but ultimately invigorating.",
    "eat": "Can't-miss spots to dine, drink, and feast.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences."
  },
  {
    "id": "15",
    "place": "Gurugram (Gurgaon)",
    "state": "India",
    "distric": "Gurugram (Gurgaon)",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/00/d5/bf/visit-india-tours-sightseeing.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/37/ad/98/nautanki-mahal.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f9/c3/e1/photo0jpg.jpg?w=400&h=200&s=1"
    ],
    "about": "Located near the National Capital Region of Delhi, this upcoming district houses numerous multinational companies and as a result, has plenty of tourist-friendly malls, hotels and restaurants. The area's top attraction is the Sheetla Mata temple, a popular pilgrimage site named for the Indian goddess who could dispel small pox; a festival is held there in March and July. For a more rural setting, visit nearby Sohna, which is surrounded by ancient ruins and known for its hot springs.",
    "eat": "Can't-miss spots to dine, drink, and feast.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences."
  },
  {
    "id": "16",
    "place": "London",
    "state": "England",
    "distric": "London",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c0/b1/4b/caption.jpg?w=700&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5b/5b/caption.jpg?w=400&h=200&s=1&cx=2213&cy=1756&chk=v1_fca2aca26ffc8ef0585f",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0e/77/a5/caption.jpg?w=400&h=200&s=1&cx=684&cy=481&chk=v1_0214a220a10e5598abdc"
    ],
    "about": "London is layered with history, where medieval and Victorian complement a rich and vibrant modern world. The Tower of London and Westminster neighbour local pubs and markets, and time-worn rituals like the changing of the guards take place as commuters rush to catch the Tube. It’s a place where travellers can time-hop through the city, and when they’re weary, do as Londoners do and grab a “cuppa” tea.",
    "eat": "Can't-miss spots to dine, drink, and feast.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences."
  },
  {
    "id": "17",
    "place": "Singapore",
    "state": "Singapore",
    "distric": "Singapore",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/60/00/caption.jpg?w=700&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/60/05/caption.jpg?w=400&h=200&s=1&cx=2485&cy=1775&chk=v1_ed879bfc530dcfb7056e",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c1/a4/b8/caption.jpg?w=400&h=200&s=1"
    ],
    "about": "This tiny island city-state is a study of fusions and contrasts bursting with wonders waiting to be explored. Tranquil parks abut futuristic skyscrapers and luxe shopping centres. A thriving street food scene and world-class restaurants offer countless ways to taste and sip your way through Singapore’s culinary melting pot. Your first trip to Singapore will prove that sometimes the best things come in small packages.",
    "eat": "Can't-miss spots to dine, drink, and feast.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences."
  },
  {
    "id": "18",
    "place": "Jaipur",
    "state": "India",
    "distric": "Jaipur",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a3/3b/8a/screenshot-2017-09-12.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/41/a8/07/jai-mahal-lake-palace.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/e6/86/9d/hawa-mahal.jpg?w=400&h=200&s=1"
    ],
    "about": "If you take one look at the glorious stucco buildings that line Jaipur's wide streets, you'll understand why this is nicknamed The Pink City. Spend your days exploring City Palace, Hawa Mahal, and Amber and Jaigarh forts. And if you're looking for a unique souvenir, head to one of the bazaars, where you can pick up a pair of camel-leather slippers.",
    "eat": "Can't-miss spots to dine, drink, and feast.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences."
  },
  {
    "id": "19",
    "place": "Chennai (Madras)",
    "state": "India",
    "distric": "Jaipur",
    "img": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/46/b8/chennai-madras.jpg?w=700&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/14/d9/98/very-nice-outside.jpg?w=400&h=200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/bb/60/b2/chennai-view-from-the.jpg?w=400&h=200&s=1"
    ],
    "about": "The people of Tamil Nadu consider providing food to others a service to humanity. Thus the service in the state capital, Chennai, is first-rate. Treat your senses to some of the richest South Indian flavours in traditional dishes like sambar, rasam, fish curry or kootu. And don't forget to have a cup of full-bodied Tamil coffee, enhanced with chicory—no visit is complete without it.",
    "eat": "Can't-miss spots to dine, drink, and feast.",
    "stay": "A mix of the charming, modern, and tried and true.",
    "do": "Places to see, ways to wander, and signature experiences."
  }
]

function SingleTripCard() {
  const param=useParams()
 const [data,setData]=useState([])
  const {placeToVisit,places,direction,highlight,information,covid,dothing}=useContext(AuthContext)
  console.log(param.id)
  useEffect(()=>{
    setData(data1[param.id-1])
  },[param.id])

  return (
    <div>
      <Box ml={10} mr={10}>
        <Header/>
        <Navbar/>

        <Box display={"flex"} gap={1} height={"400px"}>
        <Box width={"50%"}><Image height={"100%"} width={"100%"} src={data.img[0]} /></Box>
        <Box width={"50%"}>
          <Box  height={"200px"} mb={1}><Image height={"100%"} width={"100%"}  src={data.img[1]} /></Box>
          <Box  height={"196px"}><Image height={"100%"} width={"100%"} src={data.img[2]} /></Box>
        </Box>
        </Box>

       <Box textAlign={"left"} mt={10} >
       <Heading as='h3' size='lg'>About {data.place}</Heading>
       </Box>

       <Box display={"flex"}>
        <Box mt={5} textAlign={"left"} width={"50%"}>
        <Text fontSize='20px'>{data.about}</Text>
        </Box>
        <Box></Box>
       </Box>
         
         <Box>
         {/* <Heading as='h3' size='lg'>Essential Bengaluru</Heading> */}
            
          {/* <Box textAlign={"left"} mt={5} display={"flex"}>
            <Box  mt={10} width={"20%"}>
            <Heading as='h5' size='md'>Do</Heading>
            <Text>Places to see, ways to wander, and signature experiences.</Text>
            <Text textDecor={"underLine"} cursor="pointer">See All</Text>
            </Box>
            <Box></Box>
          </Box>
           */}
         </Box>

      </Box>
    </div>
  )
}

export default SingleTripCard



// {
//   "id": "2",
//   "place": "New Delhi",
//   "distric": "National Capital Territory Of Delhi",
//   "img": [
//       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/03/3f/fd/caption.jpg?w=700&h=500&s=1&cx=2294&cy=1952&chk=v1_c3b28b866491ff3722ce",
//       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/03/81/3b/caption.jpg?w=400&h=200&s=1",
//       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/03/80/cf/caption.jpg?w=400&h=200&s=1"
//   ],
//   "about": "Laid out by British architect Edwin Lutyens, the Indian capital is a striking modern metropolis. A gracious contrast to Old Delhi's winding streets, the grand avenues and stately buildings of New Delhi are rich with history and culture, from Gandhi's Delhi home (and the site of his assassination) to the tomb of Humayun, a complex of Mughal buildings reminiscent of the Taj Mahal. Chaotic traffic is best left to the locals. Negotiate a good price for taxis or travel on the new Delhi Metro.",
//   "do": "Places to see, ways to wander, and signature experiences.",
//   "stay": "A mix of the charming, modern, and tried and true.",
//   "eat": "Can't-miss spots to dine, drink, and feast."
// }