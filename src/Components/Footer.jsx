import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
    <Box 
    w={"100%"}
    bg={"#f7fafc"}
    padding={"15px"}
    boxSizing={"border-box"}>
        <Text fontSize={{base: "xs", sm:"sm", md:"md"}} textAlign={"center"}>© 2022 Built by Sathan kothandam.</Text>
    </Box>
    </>
  )
}

export default Footer