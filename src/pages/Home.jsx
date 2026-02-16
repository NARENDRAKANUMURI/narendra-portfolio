import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Stats from "../components/Stats";
import ProjectCarousel from "../components/ProjectCarousel";
import ParticlesBg from "../components/ParticlesBg";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 relative overflow-hidden">

      {/* Background Particles */}
      <ParticlesBg />

      {/* ================= HERO SECTION ================= */}
      <div className="flex flex-col md:flex-row items-center justify-center pt-24 max-w-7xl mx-auto">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-500">Narendra Kanumuri</span>
          </h1>

          <h2 className="text-xl text-blue-400 mb-4">
            <Typewriter
              words={[
                "Software Engineer",
                "Full Stack Developer",
                "Data Analyst",
                "AI Enthusiast"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h2>

          <p className="text-gray-400 max-w-xl mb-6">
            Passionate Computer Science student building scalable web
            applications, AI systems, and data-driven solutions using
            modern technologies like Python, React, and Cloud.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-700 transition"
            >
              Download Resume
            </a>

            <a
              href="/contact"
              className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/NARENDRAKANUMURI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/narendra-kanumuri-6b4649276/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["Python", "React", "Machine Learning", "SQL", "Cloud"].map(
              (skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <img
            src="/profile.jpeg"
            alt="profile"
            className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-gray-700 shadow-2xl"
          />
        </motion.div>

      </div>

      {/* ================= STATS SECTION ================= */}
      <Stats />

      {/* ================= PROJECT CAROUSEL ================= */}
      <ProjectCarousel />

      {/* ================= TESTIMONIALS ================= */}
      <section className="mt-24 max-w-4xl mx-auto text-center px-4">

        <h2 className="text-3xl font-bold mb-10">
          Testimonials
        </h2>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-8 rounded-xl"
        >
          <p className="text-gray-300">
            "Narendra demonstrates strong technical skills and problem-solving
            ability. His dedication and curiosity make him a promising software engineer."
          </p>

          
        </motion.div>

      </section>

      {/* ================= SCROLL INDICATOR ================= */}
      

    </div>
  );
}

export default Home;
