import FadeOnScroll from "../utilComponents/FadeOnScroll";
import SectionContainer from "../utilComponents/SectionContainer";
import ProjectCard from "./ProjectCard";
import { projectsList } from "./projectsData";

export default function Projects() {
  return (
    <FadeOnScroll>
      <SectionContainer
        id="projects"
        title="My Projects"
        additionalStyle="mt-16 md:mt-28"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {projectsList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </SectionContainer>
    </FadeOnScroll>
  );
}
