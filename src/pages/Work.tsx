import { Link } from "react-router-dom";
import { ArrowUpRight, Lock } from "lucide-react";
import CtaFooter from "../components/CtaFooter";
import { projects } from "../data/portfolio";

const Work = () => {
  return (
    <>
      <section className="pt-40 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-white/50 mb-5">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.85] mb-6">
            Work that ships.
          </h1>
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            A selection of projects — backends, interfaces, and full
            applications. Some of this work is private: the code stays under
            NDA, but I am happy to walk you through the build.
          </p>

          <div className="mt-16 flex flex-col gap-6">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                to={`/work/${p.slug}`}
                className="liquid-glass-strong rounded-3xl overflow-hidden group grid md:grid-cols-5 gap-0"
              >
                <div
                  className={`md:col-span-2 h-44 md:h-full min-h-[180px] bg-gradient-to-br ${p.accent} relative overflow-hidden`}
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute top-4 left-5 font-body text-[10px] uppercase tracking-widest text-white/70">
                    {String(i + 1).padStart(2, "0")} / {p.year}
                  </span>
                  {p.private && (
                    <span className="absolute top-4 right-5 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-2.5 py-1 font-body text-[9px] uppercase tracking-widest text-white/80 backdrop-blur-sm">
                      <Lock className="h-2.5 w-2.5" />
                      Private
                    </span>
                  )}
                </div>
                <div className="md:col-span-3 p-7 text-left">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-2xl md:text-3xl font-heading italic text-white leading-tight">
                      {p.title}
                    </h2>
                    {p.private ? (
                      <Lock className="h-5 w-5 text-white/40 group-hover:text-white transition-colors shrink-0 mt-1" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-white transition-colors shrink-0 mt-1" />
                    )}
                  </div>
                  <p className="text-white/60 font-body font-light text-sm mt-3 mb-5">
                    {p.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase tracking-wider text-white/50 border border-white/10 rounded-full px-2.5 py-1 font-body"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.private && (
                    <p className="mt-4 text-[10px] uppercase tracking-widest text-white/30 font-body">
                      Code under NDA — walkthrough on request
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaFooter />
    </>
  );
};

export default Work;
