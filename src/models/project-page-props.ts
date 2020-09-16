import { Project } from "./project";
import { ProjectGroup } from "./project-group";
import { ImageSharp } from "./image-sharp";

export interface ProjectPageProps {
  data: {
    allProjects: {
      edges: {
        node: Project;
      }[];
    };
    allProjectGroups: {
      edges: {
        node: ProjectGroup;
      }[];
    };
    project: {
      edges: {
        node: Project;
      }[];
    };
    mainImage: ImageSharp;
  };
}
