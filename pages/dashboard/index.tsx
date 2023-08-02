import type { NextPage } from "next";
import { ApplicationPageContainer } from "@features/layout";
import { ProjectList } from "@features/projects";

const Home: NextPage = () => {
  return (
    <ApplicationPageContainer
      title="Projects"
      info="Overview of your projects sorted by alert level."
    >
      <ProjectList />
    </ApplicationPageContainer>
  );
};

export default Home;
