import { useEffect, useRef, useState } from "react";
import About from "./components/about/About";
import CommonEntryComp from "./components/entryCard/EntryCard";
import profile from "./constants";
import resume from "/CV-Mark_Lumba.pdf";
import { ArrowUpRight } from "lucide-react";
import Indicator from "./components/indicator/Indicator";
import FallingList from "./components/animations/FallingList";
import Hover from "./components/animations/Hover";
import Stars from "./components/animations/Starts";
import AnimatedName from "./components/animations/AnimatedName";

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentIndicator, setCurrentIndicator] = useState("");

  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const sections = [aboutRef, experienceRef, projectsRef, educationRef];
      let currentId = "";
      let maxVisibleHeight = 0;

      sections.forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          // Calculate visible height of section in viewport
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            currentId = ref.current.id;
          }
        }
      });

      if (currentId) {
        setCurrentIndicator(currentId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Stars />
      <div className="grid grid-cols-1 lg:grid-cols-2 relative max-w-7xl mx-auto ">
        <div className=" flex flex-col p-8 lg:p-16 gap-4 lg:h-dvh lg:sticky top-0 left-0">
          <FallingList>
          <AnimatedName name={profile.name} className="text-5xl"/>
            <h1 className="text-xl">{profile.title}</h1>
            <p className="max-w-100">{profile.tagLine}</p>
            <div className="mt-10">
              <Indicator currentIndicator={currentIndicator} />
            </div>
            <div className="flex gap-5 mt-5 lg:mt-auto">
              {profile.socials.map(({ icon: Icon, url, platform }) => (
                <Hover>
                  <a href={url} title={platform}>
                    <Icon />
                  </a>
                </Hover>
              ))}
            </div>
          </FallingList>
        </div>
        <div className=" lg:!pl-0  lg:p-16 flex flex-col p-8 gap-15  lg:gap-25 ">
          <section ref={aboutRef} id="about">
            <FallingList>
              <h1 className="mb-5 font-medium">About</h1>
              <About />
            </FallingList>
          </section>

          <section
            onMouseEnter={() => setCurrentSection("Experience")}
            onMouseLeave={() => setCurrentSection("")}
            ref={experienceRef}
            id="experience"
          >
            <FallingList>
              <h1 className="lg:mb-5 font-medium">Experience</h1>
              <div className="flex flex-col gap-5 lg:gap-0">
                {profile.experience.map((exp) => (
                  <CommonEntryComp
                    commonEntry={exp}
                    section="Experience"
                    currentSection={currentSection}
                    currentTitle={currentTitle}
                    setCurrentTitle={setCurrentTitle}
                  />
                ))}
              </div>
              <a
                className="group inline-block hover:text-teal-400 mt-10 font-medium text-lg"
                href={resume}
              >
                View Resume
                <ArrowUpRight
                  className=" inline ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-[1000ms]"
                  size={25}
                />
              </a>
            </FallingList>
          </section>

          <section
            onMouseEnter={() => setCurrentSection("Projects")}
            onMouseLeave={() => setCurrentSection("")}
            ref={projectsRef}
            id="projects"
          >
            <h1 className="lg:mb-5 font-medium">Personal Projects</h1>
            <div className="flex flex-col gap-5 lg:gap-0">
              {profile.projects.map((proj) => (
                <CommonEntryComp
                  commonEntry={proj}
                  section="Projects"
                  currentSection={currentSection}
                  currentTitle={currentTitle}
                  setCurrentTitle={setCurrentTitle}
                />
              ))}
            </div>
          </section>
          <section
            onMouseEnter={() => setCurrentSection("Education")}
            onMouseLeave={() => setCurrentSection("")}
            id="education"
            ref={educationRef}
            className="mb-[300px]"
          >
            <h1 className="lg:mb-5 font-medium">Education</h1>
            <div className="flex flex-col gap-5 lg:gap-0">
              {profile.education.map((educ) => (
                <CommonEntryComp
                  commonEntry={educ}
                  section="Education"
                  currentSection={currentSection}
                  currentTitle={currentTitle}
                  setCurrentTitle={setCurrentTitle}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
