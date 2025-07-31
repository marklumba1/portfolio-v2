import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Stars: React.FC = () => {
  // More stars now - 100 instead of 50
  const stars = React.useMemo(
    () =>
      Array.from({ length: 1000 }).map(() => ({
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        size: Math.random() * 1 + 0.5,
        delay: Math.random() * 5,
      })),
    []
  );

  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Map scroll progress (0 to 1) to vertical movement (0 to -400px)
  const y = useTransform(smoothScrollProgress, [0, 1], [0, -400]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "200%", // taller container so stars have space to flow up
        pointerEvents: "none",
        zIndex: -10,
        y, // vertical movement instead of x
      }}
    >
      {stars.map(({ top, left, size, delay }, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top,
            left,
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: 0.3,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default Stars;
