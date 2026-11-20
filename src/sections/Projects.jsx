import projects from "../data/projects";

const featured = projects.filter((project) => project.featured !== false);
const other = projects.filter((project) => project.featured === false);

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-215 mx-auto px-6">
        <p className="text-amber">
          ndumiso@portfolio:~$ <span className="text-text">ls ./projects</span>
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 items-start">
          {featured.map((project) => (
            <div
              key={project.id}
              className="border border-border rounded-sm bg-bg-raised flex flex-col overflow-hidden"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  loading="lazy"
                  className="w-full aspect-video object-cover object-top border-b border-border"
                />
              )}

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-2xl">{project.name}/</h3>
                <p className="mt-2 text-text-dim text-sm flex-1">
                  {project.description}
                </p>

                {project.highlight && (
                  <p className="mt-3 text-sm text-amber before:content-['*_'] before:text-amber-dim">
                    {project.highlight}
                  </p>
                )}

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
            </div>
          ))}
        </div>

        {other.length > 0 && (
          <div className="mt-10">
            <p className="text-amber-dim text-sm mb-3">other/</p>
            <ul className="flex flex-col gap-2 text-sm">
              {other.map((project) => (
                <li key={project.id} className="flex flex-wrap gap-x-4 gap-y-1">
                  <span className="text-text">{project.name}</span>
                  <span className="text-text-dim">{project.stack.join(", ")}</span>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    ./github
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      ./live
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
