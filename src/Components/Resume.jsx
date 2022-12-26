import { Button, Link } from '@chakra-ui/react'
import React from 'react'
import RESUME from "../assets/Sathan_Resume.pdf"
import { FiDownload } from 'react-icons/fi';
const Resume = () => {
  return (
    <Link onClick={() => window.open("https://drive.google.com/file/d/19axX1WjYJE60ovQ2pueKvgZsFORhn_MB/view?usp=share_link")} download href={RESUME} target="_blank">
    {/* <a href="https://drive.google.com/file/d/19axX1WjYJE60ovQ2pueKvgZsFORhn_MB/view?usp=share_link"> */}
    <Button rightIcon={<FiDownload />} bg={"#319795"}>RESUME</Button>
    {/* </a> */}
    </Link>
  )
}

export default Resume