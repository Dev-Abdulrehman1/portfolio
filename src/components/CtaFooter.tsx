import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

// Boomerang clip (forward + reverse baked in) — loops seamlessly natively
const VIDEO_SRC = "/background-loop.mp4";

const CtaFooter = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.src = VIDEO_SRC;
  }, []);

  return (
    <section className="relative py-32 px-6 md:px-16 lg:px-24 text-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: "200px",
          background: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: "200px",
          background: "linear-gradient(to top, black, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.85] max-w-3xl mx-auto mb-4">
          Let's build something together.
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mx-auto">
          Open to collaborations and new opportunities. Have a project in mind,
          or just want to talk code? My inbox is open.
        </p>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body font-light text-xs">
            &copy; 2026 {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "GitHub", href: profile.github },
              { label: "Services", href: "/services" },
              { label: "Email", href: `mailto:${profile.email}` },
              { label: "About", href: "/about" },
            ].map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/40 hover:text-white/70 font-body font-light text-xs transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-white/40 hover:text-white/70 font-body font-light text-xs transition-colors"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFooter;
