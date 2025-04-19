import React from "react";
import { motion } from "framer-motion";
import ComingSoonSection from "./ComingSoonSection";
import SubscriptionForm from "./SubscriptionForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className=" h-screen overflow-hidden flex flex-col justify-between bg-background">
      <Navbar />
      <motion.main
        className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-4xl mx-auto space-y-12 text-center">
          <ComingSoonSection />
        </div>
        <Footer />
      </motion.main>
    </div>
  );
};

export default HomePage;
