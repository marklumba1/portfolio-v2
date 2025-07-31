interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h1 className="font-bold uppercase tracking-wider lg:hidden">{title}</h1>
      <div className="mt-5 lg:mt-0">{children}</div>
    </section>
  );
};

export default Section;
