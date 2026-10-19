import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, Github, ArrowLeft, Lock } from "lucide-react";
import CtaFooter from "../components/CtaFooter";
import { profile, projects } from "../data/portfolio";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/work" replace />;

  const others = projects.filter((p) => p.slug !== slug);

  return (
    <>
      <section className="pt-40 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All work
          </Link>

          <p className="font-body text-xs uppercase tracking-[0.3em] text-white/50 mb-5">
            {project.role} — {project.year}
            {project.private && (
              <span className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 px-2.5 py-1 text-[10px] tracking-widest text-white/60 align-middle">
                <Lock className="h-2.5 w-2.5" />
                Private
              </span>
            )}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.85] mb-6">
            {project.title}
          </h1>
          <p className="text-white/60 font-body font-light text-base md:text-lg max-w-2xl">
            {project.tagline}
          </p>

          {/* Hero visual */}
          <div
            className={`mt-12 h-64 md:h-96 rounded-3xl bg-gradient-to-br ${project.accent} relative overflow-hidden`}
          >
            {project.image && (
              <img
                src={project.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <span className="absolute bottom-6 left-7 font-heading italic text-3xl md:text-5xl text-white drop-shadow">
              {project.title}
            </span>
          </div>

          {/* Meta */}
          <div className="mt-12 grid sm:grid-cols-2 gap-8 pb-12 border-b border-white/10">
            <div>
              <h3 className="font-body text-[10px] uppercase tracking-widest text-white/40 mb-3">
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs text-white/70 border border-white/10 rounded-full px-3 py-1 font-body"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex sm:justify-end gap-4">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body"
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>
              )}
              {project.private && (
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(`Walkthrough: ${project.title}`)}`}
                  className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body"
                >
                  <Lock className="h-4 w-4" />
                  Request walkthrough
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-black rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors font-body"
                >
                  Live site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="py-12 max-w-2xl">
            {project.description.map((para, i) => (
              <p
                key={i}
                className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed mb-5"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Features */}
          <div className="pb-16 border-b border-white/10">
            <h3 className="font-body text-[10px] uppercase tracking-widest text-white/40 mb-6">
              Highlights
            </h3>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-white/70 font-body font-light"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Next projects */}
          <div className="pt-14">
            <h3 className="font-body text-[10px] uppercase tracking-widest text-white/40 mb-6">
              More work
            </h3>
            <div className="flex flex-wrap gap-4">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/work/${p.slug}`}
                  className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body"
                >
                  {p.title}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </>
  );
};

export default ProjectDetail;
