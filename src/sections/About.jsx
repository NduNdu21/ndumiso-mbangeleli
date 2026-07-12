export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="max-w-215 mx-auto px-6">
        <p className="text-amber">
          ndumiso@portfolio:~$ <span className="text-text">cat ./about.md</span>
        </p>

        <div className="mt-8 border border-border rounded-sm bg-bg-raised p-6">
          <p className="text-text-dim leading-relaxed">
            Computer Science graduate from Aston University Birmingham. I build full-stack web applications using React, Node.js/Express, and PostgreSQL. My most recent project is EpiskopOS, a Progressive Web App for church event management.
 
            I have frontend development experience from internships at YCX and WoodLess, and have also worked in customer-facing roles including door-to-door sales and hospitality. I received an Industry Recognition Award from the Aston University CS Industry Club.
 
            Currently looking for graduate software engineering roles where I can contribute across the full stack.

          </p>

          <div className="mt-6">
            <p className="text-amber-dim text-sm mb-2">stack/</p>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "React", "Node.js", "Python", "Java", "PostgreSQL", "Express", "Laravel", "Tailwind CSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 border border-amber-dim text-amber-dim rounded-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}