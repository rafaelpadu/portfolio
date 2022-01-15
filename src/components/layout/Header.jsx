import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Box
        w="100%"
        h="100px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          w="100%"
          h="100px"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Link to="/">
            <Heading fontSize="lg" fontFamily="h1">
              <Button variant="unstyled" color="white.50">
                Home
              </Button>
            </Heading>
          </Link>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          w="30%"
          height="100px"
        >
          <Link to="/projects">
            <Heading as="a" fontSize="lg" fontFamily="h1">
              <Button variant="unstyled" color="white.50">
                Projects
              </Button>
            </Heading>
          </Link>
          <Link to="/contact">
            <Heading as="a" fontSize="lg" fontFamily="h1">
              <Button
                variant="ghost"
                color="black.50"
                _hover={{ color: "black", bg: "white.50" }}
                bgGradient="linear(to-r, firstGrad.500, secondGrad.500)"
              >
                Contact
              </Button>
            </Heading>
          </Link>
        </Box>
      </Box>
    </header>
  );
};
export default Header;
