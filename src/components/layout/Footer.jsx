import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import Linkedin from "../../assets/linkedin-icon-seeklogo.com.svg";
import GitHub from "../../assets/github-seeklogo.com.svg";
import Gmail from "../../assets/icons8-gmail.svg";
const Footer = () => {
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        maxWidth="40%"
        margin="2rem auto"
      >
        <Box
          width="fit-content"
          bgGradient="linear(to-r, firstGrad.500, secondGrad.500)"
          borderRadius="80px"
          padding="0.29rem"
        >
          <Image src={Gmail} w="41.13px" />
        </Box>
        <Box
          width="fit-content"
          bgGradient="linear(to-r, firstGrad.500, secondGrad.500)"
          borderRadius="80px"
          padding="0.7rem"
        >
          <Image src={Linkedin} w="28px" />
        </Box>
        <Box
          width="fit-content"
          bgGradient="linear(to-r, firstGrad.500, secondGrad.500)"
          borderRadius="100%"
          padding="0.29rem"
        >
          <Image src={GitHub} w="41.13px" />
        </Box>
      </Box>
      <Center marginBottom="1.2rem">
        <Text as="footer" fontSize="md" fontFamily="body" color="white.50">
          Desenvolvido por Rafael de Pádua - © Copyright 2022
        </Text>
      </Center>
    </Box>
  );
};
export default Footer;
