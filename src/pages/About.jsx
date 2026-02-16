import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaBrain } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-10">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        About Me
      </motion.h1>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpeg"
            alt="profile"
            className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-gray-700"
          />
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a passionate Computer Science student with strong interests in
            software engineering, data analytics, and artificial intelligence.
            I enjoy building scalable web applications and solving real-world
            problems using data-driven approaches.
          </p>

          <p className="text-gray-400 mb-6">
            During my internship, I developed Power BI dashboards and optimized
            SQL queries that improved reporting efficiency by 30%. I have
            experience working with machine learning models, backend systems,
            and cloud-based analytics tools.
          </p>

          <p className="text-gray-400">
            I am actively seeking opportunities as a Software Engineer,
            Application Engineer, or Data Analyst where I can contribute to
            impactful projects and grow as a technology professional.
          </p>
        </motion.div>

      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

        {/* Education */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
        >
          <FaUserGraduate size={40} className="mx-auto mb-4 text-blue-400" />
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <p className="text-gray-400">
            B.Tech in Computer Science Engineering  
            Narasaraopeta Engineering College  
            2022 – 2026
          </p>
        </motion.div>

        {/* Development */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
        >
          <FaLaptopCode size={40} className="mx-auto mb-4 text-green-400" />
          <h2 className="text-xl font-bold mb-2">Development</h2>
          <p className="text-gray-400">
            Full Stack Development with React, Flask, Node.js,
            and Cloud technologies for scalable applications.
          </p>
        </motion.div>

        {/* AI & Analytics */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
        >
          <FaBrain size={40} className="mx-auto mb-4 text-purple-400" />
          <h2 className="text-xl font-bold mb-2">AI & Analytics</h2>
          <p className="text-gray-400">
            Experience in Machine Learning, Data Analytics,
            Power BI dashboards, and predictive modeling projects.
          </p>
        </motion.div>

      </div>

    </div>
  );
}

export default About;
