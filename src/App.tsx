import { useEffect, useRef, useState } from "react";
import About from "./components/about/About";
import CommonEntryComp from "./components/entryCard/EntryCard";
import profile from "./constants";
import resume from "../public/CV-Mark_Lumba.pdf";
import { ArrowUpRight } from "lucide-react";

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          console.log(visible.target.id);
        }
      },
      { threshold: 0.6 } // 60% visible
    );

    [aboutRef, projectsRef, experienceRef, educationRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 relative max-w-7xl mx-auto ">
      <div className=" flex flex-col p-8 lg:p-16 gap-4 lg:h-dvh lg:sticky top-0 left-0">
        <h1 className="font-bold text-5xl">{profile.name}</h1>
        <h1 className="text-xl">{profile.title}</h1>
        <p className="max-w-100">{profile.tagLine}</p>
        <div className="flex gap-5 mt-5 lg:mt-auto">
          {profile.socials.map(({ icon: Icon, url, platform }) => (
            <a href={url} title={platform}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div className=" lg:!pl-0  lg:p-16 flex flex-col p-8 gap-15  lg:gap-25 ">
        <section ref={aboutRef} id="about">
          <h1 className="mb-5 font-medium">About</h1>
          <About />
        </section>
        <section
          onMouseEnter={() => setCurrentSection("Experience")}
          onMouseLeave={() => setCurrentSection("")}
          ref={experienceRef}
          id="experience"
        >
          <h1 className="lg:mb-5 font-medium">Experience</h1>
          <div className="flex flex-col gap-5 lg:gap-5">
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
        </section>
        <section
          onMouseEnter={() => setCurrentSection("Projects")}
          onMouseLeave={() => setCurrentSection("")}
          ref={projectsRef}
          id="projects"
        >
          <h1 className="lg:mb-5 font-medium">Personal Projects</h1>
          <div className="flex flex-col gap-5 lg:gap-5">
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
        >
          <h1 className="lg:mb-5 font-medium">Education</h1>
          <div className="flex flex-col gap-5 lg:gap-5">
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
  );
};

export default App;
