import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      className="w-full py-4 px-6 bg-background border-b border-border"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Logo placeholder - replace with actual logo */}
          <div className="h-10 w-40 flex items-center">
            <img src="/logo.png" className="w-3/4" />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
