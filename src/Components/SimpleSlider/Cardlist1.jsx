import { Badge, Box, Image,StarIcon, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
// import { StarIcon } from '@chakra-ui/icons'

function AirbnbCard({img_url1,title,rating,id}) {
    const property = {
    //   imageUrl= img_url1,
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
    
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
      <Link to={`/home/${id}`}>
      <Box cursor={"pointer"} mr={5} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image height="300px" src={img_url1} alt={property.imageAlt} />
  
        <Box p='0'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={2}
          >
             <Text as='ins'>{title}</Text>
          </Box>
  
          <Box>
            {property.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
            {/* {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))} */}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box></Link>
    )
  }
  export default AirbnbCard