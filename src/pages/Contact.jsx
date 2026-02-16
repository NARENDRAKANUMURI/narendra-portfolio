import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-10">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10"
      >
        Contact Me
      </motion.h1>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">

        {/* GitHub */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://github.com/NARENDRAKANUMURI"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-6 rounded-2xl flex items-center gap-4 shadow-lg"
        >
          <FaGithub size={30} className="text-blue-400" />
          <div>
            <h2 className="font-bold">GitHub</h2>
            <p className="text-gray-400">
              github.com/NARENDRAKANUMURI
            </p>
          </div>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://www.linkedin.com/in/narendra-kanumuri-6b4649276/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-6 rounded-2xl flex items-center gap-4 shadow-lg"
        >
          <FaLinkedin size={30} className="text-blue-500" />
          <div>
            <h2 className="font-bold">LinkedIn</h2>
            <p className="text-gray-400">
              linkedin.com/in/narendra-kanumuri
            </p>
          </div>
        </motion.a>

        {/* Email */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:narendrakanumurib@gmail.com"
          className="bg-gray-800 p-6 rounded-2xl flex items-center gap-4 shadow-lg"
        >
          <FaEnvelope size={30} className="text-red-400" />
          <div>
            <h2 className="font-bold">Email</h2>
            <p className="text-gray-400">
              narendrakanumurib@gmail.com
            </p>
          </div>
        </motion.a>

        {/* Phone */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="tel:+919010656727"
          className="bg-gray-800 p-6 rounded-2xl flex items-center gap-4 shadow-lg"
        >
          <FaPhone size={30} className="text-green-400" />
          <div>
            <h2 className="font-bold">Mobile</h2>
            <p className="text-gray-400">
              +91 9010656727
            </p>
          </div>
        </motion.a>

      </div>

      

    </div>
  );
}

export default Contact;
