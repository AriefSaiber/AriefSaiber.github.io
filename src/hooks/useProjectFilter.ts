import { useMemo, useState } from "react";
import type { ProjectMessage } from "@/messages/work.messages";

export function useProjectFilter(projects: ProjectMessage[]) {
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter, projects],
  );

  return { filter, setFilter, filteredProjects };
}
