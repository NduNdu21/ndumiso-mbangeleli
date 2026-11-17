import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="max-w-215 mx-auto px-6 py-20">
      <p className="text-amber">
        ndumiso@portfolio:~$ <span className="text-text">cd {pathname}</span>
      </p>
      <p className="mt-4 text-text-dim">
        cd: no such file or directory: {pathname}
      </p>
      <Link
        to="/"
        className="mt-6 inline-block border-b-0 before:content-['>_'] before:text-amber-dim"
      >
        cd ~
      </Link>
    </div>
  );
}
