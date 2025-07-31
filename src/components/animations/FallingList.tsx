import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";
import { Children } from "react";

const container: Variants = {
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12 },
  },
};

interface FallingListProps {
  children: React.ReactNode;
  className?: string;
}

const FallingList: React.FC<FallingListProps> = ({ children, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={container}
      className={`space-y-3 ${className}`}
    >
      {Children.map(children, (child, index) => (
        <motion.div key={index} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FallingList;
