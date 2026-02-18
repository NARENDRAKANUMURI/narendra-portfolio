import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className="bg-black text-white flex justify-between items-center px-8 py-4 shadow-lg sticky top-0 z-50"
    >
       <h1 className="text-xl font-bold">Narendra</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </motion.nav>
  );
}

export default Navbar;
