import { Project } from "./project";

export interface ProjectPageProps {
  data: {
    allProjectsJson: {
      edges: {
        node: Project;
      }[];
    };
  };
}
