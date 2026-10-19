import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Lock } from "lucide-react";
import CtaFooter from "../components/CtaFooter";
import { profile, skills, featuredProjects, services } from "../data/portfolio";

// Boomerang clip (forward + reverse baked in) — loops seamlessly natively
const VIDEO_SRC = "/background-loop.mp4";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.src = VIDEO_SRC;
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div
          className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
          style={{
            height: "250px",
            background: "linear-gradient(to bottom, black, transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
          style={{
            height: "250px",
            background: "linear-gradient(to top, black, transparent)",
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-white/50 mb-6">
            {profile.role} — {profile.location}
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading italic text-white tracking-tight leading-[0.85] mb-6">
            Abdul Rehman
          </h1>
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mx-auto mb-10">
            I build web applications and AI systems — Flask backends, React
            frontends, RAG pipelines, and MCP tools. Clean code, clear
            interfaces, shipped work.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link
              to="/work"
              className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body"
            >
              View Work
              <ArrowUpRight className="h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors font-body"
            >
              About Me
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-none">
              Selected work
            </h2>
            <Link
              to="/work"
              className="font-body text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              All projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/work/${p.slug}`}
                className="liquid-glass-strong rounded-3xl overflow-hidden group block"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${p.accent} relative overflow-hidden`}
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
                  {p.private && (
                    <span className="absolute top-4 right-5 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-2.5 py-1 font-body text-[9px] uppercase tracking-widest text-white/80 backdrop-blur-sm">
                      <Lock className="h-2.5 w-2.5" />
                      Private
                    </span>
                  )}
                  <span className="absolute bottom-4 left-5 font-heading italic text-2xl text-white drop-shadow">
                    {p.title}
                  </span>
                </div>
                <div className="p-6 text-left">
                  <p className="text-white/60 font-body font-light text-sm mb-4">
                    {p.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase tracking-wider text-white/50 border border-white/10 rounded-full px-2.5 py-1 font-body"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-body text-white/70 group-hover:text-white transition-colors">
                    Case study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-none">
              AI automation
            </h2>
            <Link
              to="/services"
              className="font-body text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              All services →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services"
                className="liquid-glass-strong rounded-3xl p-6 group"
              >
                <h3 className="text-lg font-heading italic text-white mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-white/50 font-body font-light text-xs leading-relaxed mb-4">
                  {s.short}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-body text-white/60 group-hover:text-white transition-colors">
                  Learn more
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-none mb-14 text-center">
            Toolbox
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-body text-sm text-white/80">
                    {s.name}
                  </span>
                  <span className="font-body text-xs text-white/40">
                    {s.level}%
                  </span>
                </div>
                <div className="h-px bg-white/10">
                  <div
                    className="h-px bg-white/70"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFooter />
    </>
  );
};

export default Home;
