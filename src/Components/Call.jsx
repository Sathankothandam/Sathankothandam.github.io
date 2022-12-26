
import React from 'react'
import { BsFillTelephoneFill} from 'react-icons/bs'
import {
    Box,
    IconButton,
    Tooltip,
    useClipboard,
    useColorModeValue,
  } from '@chakra-ui/react';
const Call = () => {
    const { hasCopied, onCopy } = useClipboard('7708615022');
  return (
    <Box>
              <Tooltip
                label={hasCopied ? 'Number Copied!' : '7708615022'}
                closeOnClick={false}
                hasArrow>
                <IconButton
                 color={"#319795"}
                  aria-label="number"
                  variant="ghost"
                  size="lg"
                  fontSize="3xl"
                  icon={<BsFillTelephoneFill/>}
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                  onClick={onCopy}
                  isRound
                />
              </Tooltip>
    </Box>
  )
}

export default Call