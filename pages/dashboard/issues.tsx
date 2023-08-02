import { ApplicationPageContainer } from "@features/layout";
import { IssueList } from "@features/issues";
import type { NextPage } from "next";

const IssuesPage: NextPage = () => {
  return (
    <ApplicationPageContainer
      title="Issues"
      info="Overview of errors, warnings, and events logged from your projects."
    >
      <IssueList />
    </ApplicationPageContainer>
  );
};

export default IssuesPage;
