import { useRef, useState } from "react";
import type { CommonEntry } from "../../constants";
import { ArrowUpRight } from "lucide-react";
interface CommonEntryComp {
  commonEntry: CommonEntry;
  section: string;
  currentSection: string;
  currentTitle: string;
  setCurrentTitle: (title: string) => void;
}
const CommonEntryComp: React.FC<CommonEntryComp> = ({
  commonEntry,
  section,
  currentSection,
  setCurrentTitle,
  currentTitle,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const handleParentClick = () => linkRef.current?.click();
  const isSectionActive = section === currentSection;
  const isHovered = commonEntry.title === currentTitle;
  const isLarge = window.matchMedia("(min-width: 1024px)").matches;

  const opacityClass =
    isSectionActive && isLarge
      ? isHovered
        ? "opacity-100 bg-slate-600/20"
        : "opacity-50"
      : "opacity-100";

  return (
    <div
      onClick={handleParentClick}
      onMouseEnter={() => setCurrentTitle(commonEntry.title)}
      className={`${opacityClass} -ml-5 px-5 py-5 rounded-xl transition-[200ms] flex flex-col lg:flex-row lg:gap-5 gap-3 group hover:cursor-pointer`}
    >
      <div>
        {commonEntry.period && (
          <p className="text-sm uppercase tracking-wider whitespace-nowrap lg:w-40">
            {commonEntry.period}
          </p>
        )}
        {commonEntry.imageSrc && (
          <img className="h-auto w-50  lg:min-w-40" src={commonEntry.imageSrc} />
        )}
      </div>
      <div className="flex flex-col gap-3">
        <a
          className="group-hover:text-teal-400"
          href={commonEntry.url || ""}
          title={commonEntry.title}
          ref={linkRef}
        >
          {commonEntry.title}{" "}
          {commonEntry.organization && `- ${commonEntry.organization}`}
          <ArrowUpRight
            className=" inline ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-[1000ms]"
            size={20}
          />
        </a>
        {commonEntry.summary && <p className="text-sm">{commonEntry.summary}</p>}
        {commonEntry.tags && (
          <div className="flex gap-2 flex-wrap">
            {commonEntry.tags?.map((tag) => (
              <p className=" px-2 py-1 border rounded-4xl text-xs text-teal-400 bg-teal-200/20">
                {tag}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default CommonEntryComp;
