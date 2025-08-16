import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDownload,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { profileData } from '@/data/profile';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-75"></div>
          <div className="relative w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl font-bold text-white">
            {profileData.initials}
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {profileData.name}
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl">
          {profileData.title}
        </p>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          {profileData.bio}
        </p>

        <div className="flex gap-4 mb-8">
          <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/f-steel"
            >
              View Projects
            </a>
          </button>
        </div>

        <div className="flex gap-6 text-2xl">
          <a
            href={profileData.socialLinks.github}
            rel="noopener noreferrer"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href={profileData.socialLinks.linkedin}
            rel="noopener noreferrer"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {profileData.description}
              </p>

              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">
                    {profileData.stats.experience}
                  </div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Education
                </h3>
                <p className="text-gray-300">{profileData.education.degree}</p>
                <p className="text-purple-400">
                  {profileData.education.school}, {profileData.education.year}
                  <br />
                  <a
                    href={profileData.education.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Details
                  </a>
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Current Role
                </h3>
                <p className="text-gray-300">{profileData.currentRole.title}</p>
                <p className="text-purple-400">
                  {profileData.currentRole.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Frontend
              </h3>
              <div className="space-y-3">
                {profileData.skills.frontend.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Backend
              </h3>
              <div className="space-y-3">
                {profileData.skills.backend.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Tools
              </h3>
              <div className="space-y-3">
                {profileData.skills.tools.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            {"Let's Work Together"}
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            {profileData.contactMessage}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <FaEnvelope className="text-sm" />
              Send Message
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule Call
            </button>
          </div>
        </div>
      </section> */}
      {/* Footer */}

      <footer className="py-8 px-4 text-center border-t border-white/10">
        <p className="text-gray-400">{profileData.footerText}</p>
      </footer>
    </main>
  );
}
