import Link from "next/link";
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { FaCircleNotch } from "react-icons/fa";

import styled from "@emotion/styled";

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover #fa {
    transform: rotate(20deg);
}
`

const Logo = () => {
    
    return (
         <Link href= "/">
           <a>
             <LogoBox>
             <FaCircleNotch id='fa' width={20} height={20} />
                <Text
                  color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                  fontFamily='M PLUS Rounded 1c'
                  fontWeight="bold"
                  ml={3}>
                    DevelLight
                  </Text>
             </LogoBox>
           </a>
         </Link>
      )
 }  

 export default Logo