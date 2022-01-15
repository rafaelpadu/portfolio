import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ProjectBox from "./HomeContainers/ProjectBox";

const Projects = () => {
  return (
    <Box>
      <Heading>Projetos</Heading>
      <ProjectBox />
    </Box>
  );
};

export default Projects;
