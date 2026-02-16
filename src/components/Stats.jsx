import CountUp from "react-countup";
import { motion } from "framer-motion";

function Stats() {

  const stats = [
    { value: 4, label: "Projects" },
    { value: 1, label: "Internship" },
    { value: 10, label: "Skills" },
    { value: 2026, label: "Graduate Year" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto text-center">

      {stats.map((s, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-xl"
        >
          <h3 className="text-3xl font-bold text-blue-400">
            <CountUp end={s.value} duration={2} />
            +
          </h3>
          <p className="text-gray-400">{s.label}</p>
        </motion.div>
      ))}

    </div>
  );
}

export default Stats;
