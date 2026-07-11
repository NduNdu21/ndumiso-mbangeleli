const LINKS = [
  { label: "email", href: "mailto:ndumisobm@icloud.com" },
  { label: "github", href: "https://github.com/NduNdu21" },
  { label: "linkedin", href: "https://www.linkedin.com/in/ndumiso-mbangeleli-742a51274/" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-215 mx-auto px-6">
        <p className="text-amber">
          ndumiso@portfolio:~$ <span className="text-text">cat ./contact.txt</span>
        </p>

        <div className="mt-8 border border-border rounded-sm bg-bg-raised p-6">
          <p className="text-text-dim max-w-[46ch]">
            Open to opportunities and collaborations. Reach out through any
            of these:
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="border-b-0 before:content-['>_'] before:text-amber-dim"
                >
                  ./{link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}