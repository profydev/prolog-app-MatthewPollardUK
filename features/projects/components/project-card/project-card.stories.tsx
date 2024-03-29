import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ProjectCard } from "./project-card";
import { ProjectLanguage, ProjectStatus } from "@api/projects.types";

export default {
  title: "Project/ProjectCard",
  component: ProjectCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof ProjectCard>;

const Template: StoryFn<typeof ProjectCard> = (props) => (
  <div style={{ width: 500, padding: 50 }}>
    <ProjectCard {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  project: {
    id: "xzy",
    name: "Frontend - Web",
    language: ProjectLanguage.react,
    numIssues: 420,
    numEvents24h: 721,
    status: ProjectStatus.info,
  },
};
Default.parameters = {
  viewMode: "docs",
};
