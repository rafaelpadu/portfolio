import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import PersonalButton from "./Button";
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
              <Button
                variant="unstyled"
                color="white.50"
                _focus={{ outlineStyle: "none" }}
              >
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
          <Link to="/projetos">
            <Heading as="a" fontSize="lg" fontFamily="h1">
              <Button
                variant="unstyled"
                color="white.50"
                _focus={{ outlineStyle: "none" }}
              >
                Projects
              </Button>
            </Heading>
          </Link>
          <Link to="/contato">
            <Heading as="a" fontSize="lg" fontFamily="h1">
              <PersonalButton
                variant="ghost"
                type="button"
                buttonText="Contato"
              />
            </Heading>
          </Link>
        </Box>
      </Box>
    </header>
  );
};
export default Header;
