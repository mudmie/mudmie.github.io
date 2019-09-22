import { Project } from "./project";
import { ImageSharp } from "./image-sharp";

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
    mainImage: ImageSharp;
  };
}
