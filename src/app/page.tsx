"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profileData } from "@/data/profile";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState({
    hero: true,
    about: false,
    skills: false,
  });

  useEffect(() => {
    // Set initial window size
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth || 1,
        height: window.innerHeight || 1,
      });
    };
    updateWindowSize();

    // Optimized mouse tracking with requestAnimationFrame
    let lastMouseX = 0;
    let lastMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      // Use requestAnimationFrame for smooth updates
      if (animationFrameRef.current === null) {
        animationFrameRef.current = requestAnimationFrame(() => {
          setMousePosition({ x: lastMouseX, y: lastMouseY });
          animationFrameRef.current = null;
        });
      }
    };

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute("data-section");
            if (section) {
              setIsVisible((prev) => ({ ...prev, [section]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    // Observe sections after a small delay to ensure refs are set
    const observeSections = () => {
      const refs = [heroRef.current, aboutRef.current, skillsRef.current];
      refs.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
          // Check if section is already in view
          const rect = ref.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight && rect.bottom > 0;
          if (isInView) {
            const section = ref.getAttribute("data-section");
            if (section) {
              setIsVisible((prev) => ({ ...prev, [section]: true }));
            }
          }
        }
      });
    };

    // Use setTimeout to ensure DOM is ready
    const timeoutId = setTimeout(observeSections, 100);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", updateWindowSize, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateWindowSize);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Optimized calculations with safe division
  const mouseX =
    windowSize.width > 0 ? (mousePosition.x / windowSize.width) * 20 : 0;
  const mouseY =
    windowSize.height > 0 ? (mousePosition.y / windowSize.height) * 20 : 0;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:w-auto focus:h-auto focus:p-4 focus:m-0 focus:overflow-visible focus:clip-auto focus:whitespace-normal focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-purple-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        Skip to main content
      </a>

      {/* Background Gradient Layer */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section
        id="main-content"
        ref={heroRef}
        data-section="hero"
        className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-10"
        aria-label="Hero section"
      >
        <div
          className="relative w-32 h-32 mb-8 cursor-pointer group"
          style={{
            transform: `translate(${mouseX * 0.1}px, ${
              mouseY * 0.1
            }px) rotate(${mouseX * 0.05}deg)`,
            transition: "transform 0.1s ease-out",
          }}
          role="img"
          aria-label={`${profileData.name} profile avatar`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-75 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl">
            {profileData.initials}
          </div>
        </div>

        <h1
          className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible.hero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {profileData.name}
        </h1>
        <p
          className={`text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl transition-all duration-1000 delay-100 ${
            isVisible.hero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {profileData.title}
        </p>
        <p
          className={`text-lg text-gray-300 mb-12 max-w-3xl transition-all duration-1000 delay-200 ${
            isVisible.hero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {profileData.bio}
        </p>

        <div
          className={`flex gap-4 mb-8 transition-all duration-1000 delay-300 ${
            isVisible.hero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://github.com/f-steel"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 relative overflow-hidden inline-block focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="View projects on GitHub"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        <div
          className={`flex gap-6 text-2xl transition-all duration-1000 delay-400 ${
            isVisible.hero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href={profileData.socialLinks.github}
            rel="noopener noreferrer"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-full p-2"
            aria-label="Visit GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href={profileData.socialLinks.linkedin}
            rel="noopener noreferrer"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-full p-2"
            aria-label="Visit LinkedIn profile"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 animate-bounce"
          aria-hidden="true"
          role="presentation"
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        data-section="about"
        className="py-20 px-4 bg-black/20 relative z-10"
        aria-labelledby="about-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="about-heading"
            className={`text-4xl font-bold text-white text-center mb-16 transition-all duration-1000 ${
              isVisible.about
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center transition-all duration-1000 delay-100 ${
              isVisible.about
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {profileData.description}
          </p>
          <div
            className={`flex justify-center mb-16 transition-all duration-1000 delay-150 ${
              isVisible.about
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-8 border-2 border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 max-w-2xl w-full">
              <div className="text-5xl font-bold text-purple-400 mb-2">
                {profileData.stats.experience}
              </div>
              <div className="text-gray-300 text-lg font-medium mb-3">
                Years Experience
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Working on several different applications, both frontend and
                backend, with 3 separate employers.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div
              className={`space-y-4 transition-all duration-1000 delay-200 ${
                isVisible.about
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Professional Background
              </h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col min-h-[180px]">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Education
                </h4>
                <div className="flex-1">
                  <p className="text-gray-300 text-base">
                    {profileData.education.degree}
                  </p>
                  <p className="text-purple-400 text-base">
                    {profileData.education.school}, {profileData.education.year}
                    <br />
                    <a
                      href={profileData.education.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:text-purple-300 underline transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                      aria-label={`View details about ${profileData.education.degree} at ${profileData.education.school}`}
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col min-h-[180px]">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Current Role
                </h4>
                <div className="flex-1">
                  <p className="text-gray-300 text-base">
                    {profileData.currentRole.title}
                  </p>
                  <p className="text-purple-400 text-base">
                    <a
                      href={profileData.currentRole.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:text-purple-300 underline transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                      aria-label={`Visit ${profileData.currentRole.company} website`}
                    >
                      {profileData.currentRole.company}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`space-y-4 transition-all duration-1000 delay-300 ${
                isVisible.about
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Major Achievements
              </h3>
              {profileData.majorAchievements &&
              profileData.majorAchievements.length > 0 ? (
                <div className="space-y-4">
                  {profileData.majorAchievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col min-h-[180px]"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-300 leading-relaxed text-base">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        data-section="skills"
        className="py-20 px-4 bg-black/30 relative z-10"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="skills-heading"
            className={`text-4xl font-bold text-white text-center mb-16 transition-all duration-1000 ${
              isVisible.skills
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(profileData.skills).map(
              ([category, skills], categoryIndex) => (
                <div
                  key={category}
                  className={`transition-all duration-1000 ${
                    isVisible.skills
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-6 capitalize text-center">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 border border-white/20 hover:bg-purple-400/20 hover:border-purple-400 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-default"
                        style={{
                          animationDelay: `${
                            categoryIndex * 100 + skillIndex * 50
                          }ms`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 text-center border-t border-white/10 relative z-10">
        <p className="text-gray-400">{profileData.footerText}</p>
      </footer>
    </main>
  );
}
