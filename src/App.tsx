import About from "./components/about/About";
import CommonEntryComp from "./components/entryCard/EntryCard";
import Section from "./components/section/Section";
import profile from "./constants";

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 relative max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 px-4 py-8 lg:h-dvh lg:sticky top-0 left-0">
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
      <div className=" px-4 py-8 flex flex-col gap-10 lg:gap-20">
        <Section title="About">
          <About />
        </Section>
        <Section title="Experience">
          <div className="flex flex-col gap-5">
            {profile.experience.map((exp) => (
              <CommonEntryComp commonEntry={exp} />
            ))}
          </div>
        </Section>
           <Section title="Sample Projects">
          <div className="flex flex-col gap-5">
            {profile.projects.map((proj) => (
             <CommonEntryComp commonEntry={proj} />
            ))}
          </div>
        </Section>
          <Section title="Education">
          <div className="flex flex-col gap-5">
            {profile.education.map((educ) => (
             <CommonEntryComp commonEntry={educ} />
            ))}
          </div>
        </Section>
        
      </div>
    </div>
  );
};

export default App;
