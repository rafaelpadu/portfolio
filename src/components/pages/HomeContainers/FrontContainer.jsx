import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import React from "react";
import Img from "../../../assets/Boy With Glasses.svg";
import { Link, animateScroll as scroll } from "react-scroll";
const FrontContainer = () => {
  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        my="3rem"
      >
        <Box w="50%">
          <Heading as="h2" fontFamily="h2" color="white.60" fontSize="xl">
            Desenvolvedor Web
          </Heading>
          <Heading
            as="h1"
            fontFamily="h1"
            bgGradient="linear(to-r, firstGrad.500, secondGrad.500)"
            bgClip="text"
            fontWeight="semibold"
            fontSize="7xl"
            my="1rem"
          >
            Rafael de Pádua
          </Heading>
          <Text
            fontFamily="body"
            fontSize="md"
            color="white.50"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
            massa sit amet libero dapibus sollicitudin sit amet ac nunc.
            Pellentesque dignissim vulputate vehicula. Integer lacinia elit
            urna, quis laoreet quam euismod vel. Nulla scelerisque neque tortor,
            a tempus nunc interdum sed. In a nibh luctus, rhoncus tortor id,
            tristique orci. Nullam ullamcorper lacus venenatis, pretium dolor
            et, fermentum purus. Ut non finibus justo, tempor fringilla velit.
          </Text>
          <Heading as="a" fontSize="lg" fontFamily="h1">
            <Button
              variant="ghost"
              color="black.50"
              my="1rem"
              _hover={{ color: "black", bg: "white.50" }}
              bgGradient="linear(to-r, firstGrad.500, secondGrad.500)"
            >
              Contact
            </Button>
          </Heading>
        </Box>
        <Box w="50%">
          <Image margin="0 auto" src={Img} h="450px" />
        </Box>
      </Box>
      <Box width="100%" display="flex" justifyContent="center" marginTop="9rem">
        <Button variant="link" _focus={{ outlineStyle: "none" }}>
          <Link
            to="about-me"
            smooth={true}
            offset={-70}
            duration={500}
            spy={true}
          >
            <ArrowDownIcon h={12} w={12} color="white.50" />
          </Link>
        </Button>
      </Box>
    </div>
  );
};
export default FrontContainer;
