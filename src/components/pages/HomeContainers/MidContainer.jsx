import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import "../../../index.css";
import ProjectsContainer from "./ProjectsContainer";
const MidContainer = () => {
  return (
    <Box marginTop={143}>
      <Heading
        id="about-me"
        as="h3"
        fontFamily="h1"
        color="white.60"
        fontSize="3xl"
      >
        Sobre mim
      </Heading>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="15px 0"
      >
        <Box
          bgGradient="linear(to-r, firstGrad.500, secondGrad.500)"
          borderRadius={3}
          width={4}
          marginRight={2}
          marginLeft={-3}
          height={62}
        />
        <Text
          fontFamily="body"
          fontSize="lg"
          color="white.50"
          textAlign="justify"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
          massa sit amet libero dapibus sollicitudin sit amet ac nunc.
          Pellentesque dignissim vulputate vehicula. Integer lacinia elit urna,
          quis laoreet quam euismod vel. Nulla scelerisque neque tortor, a
          tempus nunc interdum sed. In a nibh luctus, rhoncus tortor id,
          tristique orci. Nullam ullamcorper lacus venenatis, pretium dolor et,
          fermentum purus. Ut non finibus justo, tempor fringilla velit.
        </Text>
      </Box>
      <ProjectsContainer />
    </Box>
  );
};
export default MidContainer;
