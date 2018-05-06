import { Project } from "./project";

export interface ProjectPageProps {
  data: {
    allProjects: {
      edges: {
        node: Project;
      }[];
    };
    project: {
      edges: {
        node: Project;
      }[];
    };
    mainImage: {
      childImageSharp: {
        sizes: any;
      };
    };
  };
}
