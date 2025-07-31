import { motion } from "framer-motion";

interface AnimatedNameProps {
  name: string;
  className?: string;
  duration?: number
}

const AnimatedName: React.FC<AnimatedNameProps> = ({ name, className, duration = 3 }) => {
  return (
    <motion.h1
      className={`font-bold ${className} text-white capitalize`}
      animate={{
        textShadow: [
          "0 0 20px #14B8A6, 0 0 20px #14B8A6, 0 0 30px #14B8A6",
          "0 0 5px #14B8A6, 0 0 10px #14B8A6, 0 0 15px #14B8A6",
          "0 0 20px #14B8A6, 0 0 20px #14B8A6, 0 0 30px #14B8A6",
        ],
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {name}
    </motion.h1>
  );
};

export default AnimatedName;
