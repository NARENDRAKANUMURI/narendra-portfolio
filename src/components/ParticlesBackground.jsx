import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { speed: 1 },
          links: { enable: true },
          opacity: { value: 0.3 }
        }
      }}
      className="absolute inset-0 -z-10"
    />
  );
}

export default ParticlesBackground;
