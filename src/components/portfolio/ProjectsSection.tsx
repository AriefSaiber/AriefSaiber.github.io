import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/portfolio/common/SectionTitle";
import { useProjectFilter } from "@/hooks/useProjectFilter";
import {
  projectSectionMessages,
  projectsMessages,
} from "@/messages/work.messages";
import "@/components/portfolio/styles/ProjectsSection.css";

export function ProjectsSection() {
  const { filter, setFilter, filteredProjects } =
    useProjectFilter(projectsMessages);

  return (
    <section id="projects" className="projects">
      <div className="projectsContainer">
        <SectionTitle
          eyebrow={projectSectionMessages.eyebrow}
          title={projectSectionMessages.title}
          description={projectSectionMessages.description}
        />

        <div className="projectsFilters">
          {projectSectionMessages.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`projectsFilterBtn ${
                filter === tab
                  ? "projectsFilterBtnActive"
                  : "projectsFilterBtnInactive"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="projectsGrid">
          {filteredProjects.map((project) => (
            <article key={project.title} className="projectsCard group">
              <div className="relative h-56 overflow-hidden rounded-t-3xl bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="projectsImage"
                />

                <span className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  {project.type}
                </span>
              </div>

              <div className="projectsCardContent">
                <p className="projectsCategory">{project.category}</p>

                <h3 className="projectsTitle">{project.title}</h3>

                <p className="projectsSummary">{project.summary}</p>

                <div className="projectsImpactBox">
                  <p className="projectsImpact">{project.impact}</p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="projectsArrowWrap"
                  >
                    <ArrowUpRight className="projectsArrow" />
                  </a>
                </div>

                <div className="projectsTechList">
                  {project.tech.map((tech) => (
                    <span key={tech} className="projectsTech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
