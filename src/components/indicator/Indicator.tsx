import { motion } from "framer-motion";
import AnimatedName from "../animations/AnimatedName";

interface IndicatorProps {
  currentIndicator: string;
}

const Indicator: React.FC<IndicatorProps> = ({ currentIndicator }) => {
  const sectionIds = ["about", "experience", "projects", "education"];

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col">
      {sectionIds.map((id) => {
        const isActive = currentIndicator === id;

        return (
          <motion.div
            key={id}
            className="flex py-2 items-center gap-5 cursor-pointer"
            onClick={() => handleClick(id)}
            initial="rest"
            whileHover="hover"
            animate={isActive ? "active" : "rest"}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <motion.div
              className="h-[2px] border-b"
              variants={{
                rest: { width: 40, borderColor: "#64748b" }, // slate-600
                hover: { width: 100, borderColor: "#ffffff" },
                active: {
                  width: 100,
                  borderColor: "#14b8a6", // teal-400
                  boxShadow: "0 0 6px #14b8a6",
                },
              }}
              transition={{ duration: 0.2 }}
            />
         {isActive ? (
                <AnimatedName name={id} />
              ) : (
                <motion.p
                  className="capitalize font-medium text-slate-500"
                  variants={{
                    hover: {
                      color: "#fff",
                      textShadow: "0 0 6px #fff",
                    },
                  }}
                >
                  {id}
                </motion.p>
              )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Indicator;
