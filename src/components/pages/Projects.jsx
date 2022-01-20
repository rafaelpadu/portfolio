import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ProjectBox from "./HomeContainers/ProjectBox";
import Img from "../../assets/image.png";
const Projects = () => {
  useEffect(() => {
    const unlisten = () => {
      window.scrollTo(0, 0);
    };
    return () => {
      unlisten();
    };
  }, []);

  return (
    <Box>
      <Heading>Projetos</Heading>
      <Grid h="fit-content" templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem w="90%">
          <ProjectBox
            imgSrc={Img}
            title="Primeiro Projeto"
            stacks={["typescript", "react", "chakra", "node-js", "mongodb"]}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum vel justo quis pretium. Nullam nunc dolor, sollicitudin at aliquet in, dignissim et turpis. Proin luctus mollis purus, in mollis metus cursus ultrices. Duis ultrices pellentesque leo. Fusce sed porta augue, ac iaculis tellus. Curabitur ultrices magna non sem consequat tristique. Fusce risus ligula, sagittis at consectetur quis, efficitur eget sem. Nunc pulvinar, massa sed congue consequat, ipsum mi iaculis sem, quis dapibus arcu nulla in purus."
          />
        </GridItem>
        <GridItem w="90%">
          <ProjectBox
            imgSrc={Img}
            title="Segundo Projeto"
            stacks={["typescript", "react", "chakra", "node-js", "mongodb"]}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum vel justo quis pretium. Nullam nunc dolor, sollicitudin at aliquet in, dignissim et turpis. Proin luctus mollis purus, in mollis metus cursus ultrices. Duis ultrices pellentesque leo. Fusce sed porta augue, ac iaculis tellus. Curabitur ultrices magna non sem consequat tristique. Fusce risus ligula, sagittis at consectetur quis, efficitur eget sem. Nunc pulvinar, massa sed congue consequat, ipsum mi iaculis sem, quis dapibus arcu nulla in purus."
          />
        </GridItem>
        <GridItem w="90%">
          <ProjectBox
            imgSrc={Img}
            title="Terceiro Projeto"
            stacks={["typescript", "react", "chakra", "node-js", "mongodb"]}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum vel justo quis pretium. Nullam nunc dolor, sollicitudin at aliquet in, dignissim et turpis. Proin luctus mollis purus, in mollis metus cursus ultrices. Duis ultrices pellentesque leo. Fusce sed porta augue, ac iaculis tellus. Curabitur ultrices magna non sem consequat tristique. Fusce risus ligula, sagittis at consectetur quis, efficitur eget sem. Nunc pulvinar, massa sed congue consequat, ipsum mi iaculis sem, quis dapibus arcu nulla in purus."
          />
        </GridItem>
        <GridItem w="90%">
          <ProjectBox
            imgSrc={Img}
            title="Quarto Projeto"
            stacks={["typescript", "react", "chakra", "node-js", "mongodb"]}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum vel justo quis pretium. Nullam nunc dolor, sollicitudin at aliquet in, dignissim et turpis. Proin luctus mollis purus, in mollis metus cursus ultrices. Duis ultrices pellentesque leo. Fusce sed porta augue, ac iaculis tellus. Curabitur ultrices magna non sem consequat tristique. Fusce risus ligula, sagittis at consectetur quis, efficitur eget sem. Nunc pulvinar, massa sed congue consequat, ipsum mi iaculis sem, quis dapibus arcu nulla in purus."
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Projects;
