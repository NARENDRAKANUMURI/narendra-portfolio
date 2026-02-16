import { motion } from "framer-motion";
import { FaBriefcase, FaChartLine } from "react-icons/fa";

function Experience() {

  const experiences = [
    {
      role: "Data Analyst Intern",
      company: "APSCHE Student Internship Initiative",
      period: "2025 — 2026",
      description:
        "Worked on real-world datasets to develop dashboards and analytics solutions for academic and administrative use cases.",
      achievements: [
        "Developed Power BI dashboards for financial and operational insights",
        "Optimized SQL queries reducing manual reporting effort by 30%",
        "Implemented AI-driven analytics workflows for decision-making",
        "Worked with cloud-hosted datasets and scalable analytics delivery"
      ],
      tech: "Power BI, SQL, Python, Cloud"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-10">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Experience
      </motion.h1>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative border-l-2 border-blue-500 pl-10">

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >

            {/* Icon */}
            <div className="absolute -left-5 bg-blue-600 p-2 rounded-full">
              <FaBriefcase />
            </div>

            {/* Card */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">

              <h2 className="text-2xl font-bold">
                {exp.role}
              </h2>

              <p className="text-blue-400">
                {exp.company}
              </p>

              <p className="text-gray-400 mb-4">
                {exp.period}
              </p>

              <p className="text-gray-300 mb-4">
                {exp.description}
              </p>

              {/* Achievements */}
              <ul className="list-disc ml-6 text-gray-400 mb-4">
                {exp.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Tech */}
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-300">
                  Technologies:
                </span>{" "}
                {exp.tech}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

      {/* Extra Highlight Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
        >
          <FaChartLine size={40} className="mx-auto mb-4 text-green-400" />
          <h2 className="text-2xl font-bold">Impact</h2>
          <p className="text-gray-400 mt-2">
            Improved reporting efficiency by 30% through optimized queries
            and automated dashboards.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
        >
          <FaBriefcase size={40} className="mx-auto mb-4 text-blue-400" />
          <h2 className="text-2xl font-bold">Experience Area</h2>
          <p className="text-gray-400 mt-2">
            Data Analytics, Business Intelligence, Cloud Data Systems,
            and AI-driven analytics workflows.
          </p>
        </motion.div>

      </div>

    </div>
  );
}

export default Experience;
