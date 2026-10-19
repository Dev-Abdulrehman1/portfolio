import { Link } from "react-router-dom";
import { ArrowUpRight, Github, MapPin, Mail } from "lucide-react";
import CtaFooter from "../components/CtaFooter";
import { profile, skills } from "../data/portfolio";

const About = () => {
  return (
    <>
      <section className="pt-40 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-white/50 mb-5">
            About
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.85] mb-10">
            Developer, based in {profile.location.split(",")[0]}.
          </h1>

          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2 space-y-5">
              <p className="text-white/70 font-body font-light text-base md:text-lg leading-relaxed">
                I'm {profile.name} — a {profile.role.toLowerCase()} focused on
                web applications. I work across the stack: Flask and SQLAlchemy
                on the backend, React and Tailwind on the front.
              </p>
              <p className="text-white/70 font-body font-light text-base md:text-lg leading-relaxed">
                Most of my recent work is AI infrastructure: RAG pipelines that
                answer from private documentation with citations, and MCP tool
                servers that expose internal systems to any LLM client —
                Claude, ChatGPT, or an agent of my own.
              </p>
              <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
                My favorite projects are the ones where structure matters as
                much as polish — clean routes, sensible models, and interfaces
                that don't fight the person using them. I learn by building:
                every project here started as something I wanted to exist.
              </p>
              <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
                Currently open to collaborations and new opportunities.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body"
                >
                  <Github className="h-4 w-4" />
                  {profile.githubHandle}
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="bg-white text-black rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors font-body"
                >
                  <Mail className="h-4 w-4" />
                  Email me
                </a>
              </div>
            </div>

            {/* Fact card */}
            <div className="liquid-glass-strong rounded-3xl p-6">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-16 h-16 rounded-full mb-4 border border-white/20"
              />
              <p className="font-heading italic text-2xl text-white mb-1">
                {profile.name}
              </p>
              <p className="text-white/50 font-body text-xs mb-5">
                {profile.role}
              </p>
              <div className="space-y-2.5 text-xs font-body text-white/60">
                <p className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-white/40" />
                  {profile.location}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-white/40" />
                  {profile.email}
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-24">
            <h2 className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-none mb-12">
              Skills
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

          {/* CTA row */}
          <div className="mt-24 text-center">
            <Link
              to="/work"
              className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white inline-flex items-center gap-2 hover:bg-white/10 transition-all font-body"
            >
              See my work
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaFooter />
    </>
  );
};

export default About;
