import { Avatar, Box, Stack, VStack,Text } from '@chakra-ui/react';
import React from 'react'
import Foundersrc from "../assets/Founder.jpg"

const Footer = () => {
  return <Box 
  bgColor={"blackAlpha.900"}
  color={"whiteAlpha.700"}
  minH={"48"}
  px={"16"}
  py={["16", "8"]}
  >
    <Stack 
    direction={["column","row"]}
    h={"full"}
    alignItems={"center"}
     >
<VStack w={"full"} alignItems={["center","flex-start"]}>
<Text  fontFamily={"Righteous"} fontWeight={"bold"}>About us:</Text>
<Text fontFamily={"Jost"}fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>
    We are the best CRYPTO trading app we provide our guidence 
    at a very cheap price
</Text>
</VStack>
<VStack>
    <Avatar boxSize={"28"} mt={["4","0"]} src={Foundersrc} />
    <Text fontFamily={"Arvo"}>Our Founder</Text>
</VStack>

     </Stack>
  </Box>;
};

export default Footer;
