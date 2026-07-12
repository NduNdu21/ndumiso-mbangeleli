import { useEffect, useState } from "react";

const NAME = "Ndumiso Mbangeleli";
const ROLE = "Software Developer";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = "whoami";

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center py-10"
    >
      <div className="max-w-215 mx-auto px-6 w-full">
        <div className="border border-border rounded-sm bg-bg-raised shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Titlebar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#1c1712] border-b border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-red-alert" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber" />
            <span className="w-2.5 h-2.5 rounded-full bg-text-dim" />
            <span className="ml-2 text-xs text-text-dim">
              ndumiso@portfolio: ~
            </span>
          </div>

          {/* Body */}
          <div className="px-6 py-10 min-h-80">
            <p className="text-base">
              <span className="text-amber">ndumiso@portfolio:~$</span> {typed}
              {typed.length < fullText.length && (
                <span className="blink-cursor" />
              )}
            </p>

            {typed.length === fullText.length && (
              <div className="mt-6 animate-[reveal_0.4s_ease_both]">
                <h1 className="text-[clamp(3rem,9vw,5.5rem)] leading-none">
                  {NAME}
                </h1>
                <p className="mt-2 text-amber-dim text-lg">{ROLE}</p>
                <p className="mt-4 max-w-[46ch] text-text-dim">
                  I build things for the web. Scroll down, or jump straight
                  to the projects.
                </p>
                <nav className="mt-6 flex flex-wrap gap-6">
                  {[
                    { href: "#projects", label: "./projects" },
                    { href: "#about", label: "./about" },
                    { href: "#contact", label: "./contact" },
                    { href: "/blog", label: "./blog" },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="border-b-0 before:content-['>_'] before:text-amber-dim"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}