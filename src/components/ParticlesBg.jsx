import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBg() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { speed: 1 },
          opacity: { value: 0.3 },
          links: { enable: true }
        }
      }}
      className="absolute inset-0 -z-10"
    />
  );
}

export default ParticlesBg;
