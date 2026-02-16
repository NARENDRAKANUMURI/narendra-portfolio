import Slider from "react-slick";
import { motion } from "framer-motion";

function ProjectCarousel() {

  const projects = [
    "Smart Apparel Narrator",
    "Customer Churn Prediction",
    "Certificate Automation System",
    "FP&A Analytics Platform"
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto mt-20">

      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Projects
      </h2>

      <Slider {...settings}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl m-4"
          >
            <h3 className="text-xl font-bold mb-2">{p}</h3>
            <p className="text-gray-400 text-sm">
              Innovative project showcasing technical expertise.
            </p>
          </motion.div>
        ))}
      </Slider>

    </div>
  );
}

export default ProjectCarousel;
