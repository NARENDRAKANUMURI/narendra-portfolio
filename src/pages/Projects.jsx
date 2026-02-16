import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "Smart Apparel Narrator",
      desc: "Research-based deep learning system for apparel image captioning using YOLOv8, ConvNeXt-L, and LSTM with attention.",
      tech: "Python, TensorFlow, YOLOv8, OpenCV",
      highlight: "AI-based Computer Vision Project",
      github: "#",
      live: "#"
    },
    {
      title: "Customer Churn Prediction",
      desc: "Machine learning model predicting telecom customer churn using Logistic Regression, Random Forest, and XGBoost.",
      tech: "Python, Pandas, Scikit-learn, Matplotlib",
      highlight: "Achieved 92% Accuracy",
      github: "#",
      live: "#"
    },
    {
      title: "Certificate Automation System",
      desc: "Full stack web platform for automating caste, income, and residence certificate issuance with authentication and PDF generation.",
      tech: "React.js, Node.js, MongoDB, JWT",
      highlight: "Government Workflow Automation",
      github: "#",
      live: "#"
    },
    {
      title: "Financial Planning & Analytics Tool",
      desc: "Internal platform for financial planning, budget tracking, and dashboards with secure backend services.",
      tech: "Python, Flask, SQL, Power BI, Google Cloud",
      highlight: "Enterprise Analytics System",
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-10">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-10 text-center">
        Projects
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
          >

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2">
              {project.title}
            </h2>

            {/* Highlight */}
            <p className="text-blue-400 text-sm mb-3">
              {project.highlight}
            </p>

            {/* Description */}
            <p className="text-gray-400 mb-4">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <p className="text-gray-500 text-sm mb-4">
              <span className="font-semibold text-gray-300">
                Tech:
              </span>{" "}
              {project.tech}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">

              <a
                href={project.github}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.live}
                className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-700 transition"
              >
                <FaExternalLinkAlt />
                Live
              </a>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Projects;
