import { extendTheme } from "@chakra-ui/react";


export const theme =extendTheme({
    colors:{
        primery:"black"
    },
    components: {
        Button: {
          sizes: {
            sm: {
              fontSize: 'md'
            }
          },
          variants: {
            base: {
              bg: 'white',
              fontSize: 'md',
              color:"black",
              variant:'outline',
             },
            sm: {
              bg: 'white',
              fontSize: 'lg',
              color:"black",
              variant:'outline',
             },
            md: {
              bg: 'white',
              fontSize: 'xl',
              color:"black",
              variant:"outline",
              bordrer:"black"
              
             },
          },
          simplegrid:{
            a:{
              columns:8,
               spacing:2,
               fontSize: 'md',
            },
            b:{
              columns:8,
               spacing:5,
               fontSize: 'lg',
            },
            c:{
              columns:4,
               spacing:8,
               fontSize: 'xl',
            }
          },
        },
      },
})