import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaChartBar,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiFlask,
  SiDjango
} from "react-icons/si";

function Skills() {

  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "SQL", icon: <FaDatabase /> }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "Django", icon: <SiDjango /> }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Power BI", icon: <FaChartBar /> },
        { name: "Tableau", icon: <FaChartBar /> },
        { name: "Excel", icon: <FaChartBar /> },
        { name: "Machine Learning", icon: <FaChartBar /> }
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGitAlt /> },
        { name: "Google Cloud", icon: <FaDatabase /> }
      ]
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
        Technical Skills
      </motion.h1>

      {/* Skill Categories */}
      <div className="max-w-6xl mx-auto space-y-12">

        {skillCategories.map((category, index) => (
          <div key={index}>

            <h2 className="text-2xl font-bold mb-6 text-blue-400">
              {category.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-blue-500/20 transition"
                >
                  <div className="text-4xl mb-3 text-blue-400">
                    {skill.icon}
                  </div>
                  <p className="text-gray-300">{skill.name}</p>
                </motion.div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Skills;
