import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import SkillBox from "./SkillBox";
import JSLogo from "../../../assets/js-logo.svg";
import TSLogo from "../../../assets/typescript-logo.com.svg";
import JavaLogo from "../../../assets/java-logo.com.svg";
import MongoLogo from "../../../assets/mongodb-logo.svg";
import OracleLogo from "../../../assets/oracle-sql-logo.svg";
import PostgresLogo from "../../../assets/postgresql-logo.svg";
import ReactLogo from "../../../assets/react-logo.svg";
import NodeJS from "../../../assets/nodejs-logo.svg";
import DockerLogo from "../../../assets/docker-logo.png";
import GitLogo from "../../../assets/git-logo.svg";

const BottomContainer = () => {
  return (
    <Box marginTop="8rem" marginBottom="16rem">
      <Heading as="h2" fontFamily="body" color="white.50" fontSize="2xl">
        Skills
      </Heading>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        <SkillBox img={JSLogo} title="Javascript" />
        <SkillBox img={TSLogo} title="Typescript" />
        <SkillBox img={JavaLogo} title="Java" />
        <SkillBox img={MongoLogo} title="MongoDB" />
        <SkillBox img={OracleLogo} title="Oracle SQL Developer" />
        <SkillBox img={PostgresLogo} title="PostgreSQL" />
        <SkillBox img={ReactLogo} title="React.JS" />
        <SkillBox img={NodeJS} title="NODE.JS" />
        <SkillBox img={DockerLogo} title="Docker" />
        <SkillBox img={GitLogo} title="Git" />
      </Box>
    </Box>
  );
};

export default BottomContainer;
