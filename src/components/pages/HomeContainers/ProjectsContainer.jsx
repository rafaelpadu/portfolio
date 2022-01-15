import { Box, Button, Center, Heading } from "@chakra-ui/react";
import React from "react";
import ProjectBox from "./ProjectBox";

const ProjectsContainer = () => {
  return (
    <Box marginTop="12rem">
      <Heading as="h3" fontSize="3xl" fontFamily="h1" color="white.60">
        Projetos
      </Heading>
      <Box display="flex" width="100%">
        <ProjectBox
          title="Primeiro Projeto"
          stacks={["javascript", "react", "chakra"]}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum vel justo quis pretium. Nullam nunc dolor, sollicitudin at aliquet in, dignissim et turpis. Proin luctus mollis purus, in mollis metus cursus ultrices. Duis ultrices pellentesque leo. Fusce sed porta augue, ac iaculis tellus. Curabitur ultrices magna non sem consequat tristique. Fusce risus ligula, sagittis at consectetur quis, efficitur eget sem. Nunc pulvinar, massa sed congue consequat, ipsum mi iaculis sem, quis dapibus arcu nulla in purus."
        />
        <ProjectBox
          title="Segundo Projeto"
          stacks={["typescript", "react", "chakra", "node-js"]}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum vel justo quis pretium. Nullam nunc dolor, sollicitudin at aliquet in, dignissim et turpis. Proin luctus mollis purus, in mollis metus cursus ultrices. Duis ultrices pellentesque leo. Fusce sed porta augue, ac iaculis tellus. Curabitur ultrices magna non sem consequat tristique. Fusce risus ligula, sagittis at consectetur quis, efficitur eget sem. Nunc pulvinar, massa sed congue consequat, ipsum mi iaculis sem, quis dapibus arcu nulla in purus."
        />
        <ProjectBox
          title="Terceiro Projeto"
          stacks={["typescript", "react", "chakra", "node-js", "mongodb"]}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum vel justo quis pretium. Nullam nunc dolor, sollicitudin at aliquet in, dignissim et turpis. Proin luctus mollis purus, in mollis metus cursus ultrices. Duis ultrices pellentesque leo. Fusce sed porta augue, ac iaculis tellus. Curabitur ultrices magna non sem consequat tristique. Fusce risus ligula, sagittis at consectetur quis, efficitur eget sem. Nunc pulvinar, massa sed congue consequat, ipsum mi iaculis sem, quis dapibus arcu nulla in purus."
        />
      </Box>
      <Center marginTop="2.7rem">
        <Button
          bgGradient="linear(to-r, firstGrad.500, secondGrad.500)"
          variant="outline"
        >
          <Center>
            <Heading
              as="p"
              fontFamily="body"
              fontSize="md"
              color="black.50"
              padding={4}
            >
              MAIS PROJETOS...
            </Heading>
          </Center>
        </Button>
      </Center>
    </Box>
  );
};

export default ProjectsContainer;
