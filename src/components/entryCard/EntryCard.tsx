import type { CommonEntry } from "../../constants";
interface CommonEntryComp {
  commonEntry: CommonEntry;
}
const CommonEntryComp: React.FC<CommonEntryComp> = ({ commonEntry }) => {
  return (
    <div className="flex flex-col gap-3">
      {commonEntry.period && (
        <p className="text-sm uppercase tracking-wider">{commonEntry.period}</p>
      )}
      {commonEntry.imageSrc && <img className="h-auto w-50" src={commonEntry.imageSrc} />}
      <a href={commonEntry.url || ""} title={commonEntry.organization}>
        {commonEntry.title} {commonEntry.organization && `- ${commonEntry.organization}`}
      </a>
      <p>{commonEntry.summary}</p>
      <div className="flex gap-2 flex-wrap">
        {commonEntry.tags?.map((tag) => (
          <p className=" px-2 py-1 border rounded-4xl text-xs text-teal-400 bg-teal-200/20">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};
export default CommonEntryComp;
