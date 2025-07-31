import { motion } from "framer-motion";

const Hover: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      className="inline-block p-4 rounded-md bg-gray-800 text-white select-none cursor-pointer"
      whileHover={{
       
        backgroundColor: "#14B8A6", // Tailwind teal-500 hex
        boxShadow: "0 0 15px 5px rgba(20, 184, 166, 0.7)",
        rotate: 360, // spins 360 degrees
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Hover;
