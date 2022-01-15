import { Box, Heading, Image, Text, Center } from "@chakra-ui/react";
import React from "react";
import Img from "../../../assets/image.png";
const ProjectBox = ({ title, text, stacks, imgSrc }) => {
  return (
    <Box
      bgColor="black.60"
      maxWidth="fit-content"
      maxHeight="fit-content"
      margin="3rem 1rem 1rem 0"
      borderRadius="7px"
    >
      <Image src={Img} maxWidth="100%" marginTop="15px" />
      <Heading
        as="h4"
        fontSize="xl"
        fontFamily="h1"
        margin="1rem 0 0 1rem"
        color="white.70"
      >
        {title.toUpperCase()}
      </Heading>
      <Box h={stacks.length >= 1 ? "134px" : "fit-content"}>
        <Box
          display="flex"
          margin="1rem 0 0 1rem"
          paddingBottom="1.5rem"
          flexWrap="wrap"
        >
          {stacks &&
            stacks.map((title, index) => (
              <Box
                bgGradient="linear(to-r, firstGrad.500, secondGrad.500)"
                padding="8px"
                borderRadius="5px"
                maxWidth="150px"
                margin="0 15px 15px 0"
                key={`item-${index}`}
              >
                <Center>
                  <Text fontFamily="body" fontSize="medium" color="black.60">
                    {title.toUpperCase()}
                  </Text>
                </Center>
              </Box>
            ))}
        </Box>
      </Box>
      <Text
        fontFamily="body"
        textAlign="justify"
        fontSize="medium"
        style={{ textIndent: 10 }}
        padding="1.5rem"
        color="white.50"
      >
        {text}
      </Text>
    </Box>
  );
};

export default ProjectBox;
