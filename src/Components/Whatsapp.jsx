import React from 'react'
import ReactWhatsapp from 'react-whatsapp';
import { BsWhatsapp } from 'react-icons/bs';
import { IconButton, useColorModeValue } from '@chakra-ui/react';

const Whatsapp = () => {
  return (
   
        <ReactWhatsapp number="7708615022" message="Hello Sathan, How are you!!">
            <IconButton
                  color={"#319795"}
                  variant="ghost"
                  size="lg"
                  fontSize="3xl"
                  icon={<BsWhatsapp/>}
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                  isRound
                />
        </ReactWhatsapp>
    
  )
}

export default Whatsapp;