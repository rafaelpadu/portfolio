import { Button } from "@chakra-ui/react";
import React from "react";

const PersonalButton = ({ buttonText, variant, type, margin, width }) => {
  return (
    <Button
      type={type}
      variant={variant}
      color="black.50"
      _focus={{ outlineStyle: "none" }}
      _hover={{ color: "black", bg: "white.50" }}
      margin={margin}
      w={width}
      bgGradient="linear(to-r, firstGrad.500, secondGrad.500)"
    >
      {buttonText}
    </Button>
  );
};

export default PersonalButton;
