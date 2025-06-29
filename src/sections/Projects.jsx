import {Suspense, useState} from "react";
import {myProjects} from "../constants/index.js";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    })

  }
  return (
    <section className="c-space my-20" id="work">
      <p className="head-text">
        My Work
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-[#0E0E10]">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl"/>
          </div>
          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img src={currentProject.logo} alt="Project logo" className="w-10 h-10 shadow-sm"/>
          </div>
          <div className="flex flex-col gap-5 text-[#AFB0B6] my-5">
            <p className="text-white text-2xl font-semibold aniamatedText">{currentProject.title}</p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex flex-wrap gap-5 items-center justify-between">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name}/>
                </div>
              ))}
            </div>
            <a href={currentProject.href} target="_blank" rel="noreferrer"
               className="flex items-center gap-2 cursor-pointer text-[#AFB0B6]">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="Arrov up" className="w-3 h-3"/>
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="Arrow left" className="w-4 h-4"/>
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="Arrow right" className="w-4 h-4"/>
            </button>
          </div>
        </div>
        <div className="border border-[#1C1C21] bg-[#0E0E10] rounded-lg h-96 lg:h-full">
          <Canvas>
            <ambientLight intensiti={Math.PI / 2}/>
            <directionalLight position={[10, 10, 5]}/>
            <Center>
              <Suspense fallback={<CanvasLoader/>}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture}/>
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
          </Canvas>
        </div>
      </div>
    </section>
  )
}
export default Projects
