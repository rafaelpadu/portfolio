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
          <a rel="noreferrer" target="_blank" href="">
            <Image src={Gmail} w="41.13px" />
          </a>
        </Box>
        <Box
          width="fit-content"
          bgGradient="linear(to-r, firstGrad.500, secondGrad.500)"
          borderRadius="80px"
          padding="0.7rem"
        >
          <a
            href="https://www.linkedin.com/in/rafael-padua-corona/"
            rel="noreferrer"
            target="_blank"
          >
            <Image src={Linkedin} w="28px" />
          </a>
        </Box>
        <Box
          width="fit-content"
          bgGradient="linear(to-r, firstGrad.500, secondGrad.500)"
          borderRadius="100%"
          padding="0.29rem"
        >
          <a
            href="https://github.com/rafaelpadu/rafaelpadu"
            rel="noreferrer"
            target="_blank"
          >
            <Image src={GitHub} w="41.13px" />
          </a>
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
