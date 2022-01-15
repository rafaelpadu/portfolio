import { Box, Center, Heading, Image } from "@chakra-ui/react";
import React from "react";

const SkillBox = ({ img, title }) => {
  return (
    <Box margin="1.5rem 2.5rem">
      <Box minHeight="150px">
        <Center>
          <Image src={img} maxHeight="150px" />
        </Center>
      </Box>
      <Heading
        as="h4"
        fontFamily="body"
        fontSize="md"
        color="white.50"
        textAlign="center"
        marginTop="1rem"
      >
        {title.toUpperCase()}
      </Heading>
    </Box>
  );
};

export default SkillBox;
