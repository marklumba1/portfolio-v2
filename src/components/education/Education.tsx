import type { Education } from "../../constants";
interface EducationProps {
  education: Education;
}
const EducationComp: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm uppercase tracking-wider">{education.year}</p>
      <a>{education.degree}</a>
      <p>{education.school}</p>
    </div>
  );
};
export default EducationComp;
