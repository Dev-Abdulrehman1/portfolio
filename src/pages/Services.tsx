import { Link } from "react-router-dom";
import { ArrowUpRight, Workflow, MessageSquare, Database, Bot } from "lucide-react";
import CtaFooter from "../components/CtaFooter";
import { services, serviceProcess, profile } from "../data/portfolio";

const icons = {
  workflow: Workflow,
  chat: MessageSquare,
  data: Database,
  agents: Bot,
} as const;

const Services = () => {
  return (
    <>
      <section className="pt-40 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-white/50 mb-5">
            Services
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.85] mb-6">
            AI automation,
            <br />
            shipped.
          </h1>
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            I turn repetitive manual work into reliable automated systems —
            scripts, pipelines, and AI assistants built on the Python and React
            stack I already ship with.
          </p>

          {/* Service cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {services.map((s) => {
              const Icon = icons[s.icon];
              return (
                <div
                  key={s.slug}
                  className="liquid-glass-strong rounded-3xl p-7 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="liquid-glass-strong rounded-full p-2.5">
                      <Icon className="h-4 w-4 text-white/80" />
                    </span>
                    <h2 className="text-2xl font-heading italic text-white leading-none">
                      {s.title}
                    </h2>
                  </div>
                  <p className="text-white/60 font-body font-light text-sm mb-5">
                    {s.short}
                  </p>
                  <p className="text-white/50 font-body font-light text-sm leading-relaxed mb-6">
                    {s.description}
                  </p>
                  <ul className="space-y-2.5 mt-auto">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-xs text-white/70 font-body font-light"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-white/40 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Process */}
          <div className="mt-28">
            <h2 className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-none mb-12">
              How it works
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {serviceProcess.map((p) => (
                <div key={p.step} className="border-t border-white/10 pt-5">
                  <span className="font-body text-xs text-white/40 block mb-3">
                    {p.step}
                  </span>
                  <h3 className="text-xl font-heading italic text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-white/50 font-body font-light text-xs leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-24 text-center">
            <p className="text-white/60 font-body font-light text-sm mb-6 max-w-md mx-auto">
              Not sure which one fits? Describe your workflow and I'll tell you
              if it's worth automating.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href={`mailto:${profile.email}?subject=AI%20automation%20inquiry`}
                className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white inline-flex items-center gap-2 hover:bg-white/10 transition-all font-body"
              >
                Start a conversation
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <Link
                to="/work"
                className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2 hover:bg-white/90 transition-colors font-body"
              >
                See my work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </>
  );
};

export default Services;
