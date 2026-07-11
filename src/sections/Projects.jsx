import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-215 mx-auto px-6">
        <p className="text-amber">
          guest@portfolio:~$ <span className="text-text">ls ./projects</span>
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-border rounded-sm bg-bg-raised p-5 flex flex-col"
            >
              <h3 className="text-2xl">{project.name}/</h3>
              <p className="mt-2 text-text-dim text-sm flex-1">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 border border-amber-dim text-amber-dim rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4 text-sm">
                <a href={project.github} target="_blank" rel="noreferrer">
                  ./github
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    ./live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}