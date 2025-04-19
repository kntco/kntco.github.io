import React from "react";
import { motion } from "framer-motion";

interface ComingSoonSectionProps {
  title?: string;
  subtitle?: string;
  launchDate?: Date;
  description?: string;
}

const ComingSoonSection = ({
  title = "Coming Soon",
  subtitle = "We're working on something perfect",
  launchDate = new Date("2025-06-25"), // Countdown to June 25th, 2024
  description = "Konstant is still being perfected. We know your evental needs and will provide them with finely-forged software.",
}: ComingSoonSectionProps) => {
  // Calculate time remaining until launch date
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();

    // Return all zeros if the date has passed
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = React.useState(
    calculateTimeRemaining(),
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center p-8 max-w-3xl mx-auto bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {title}
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {subtitle}
      </motion.h2>

      <motion.div
        className="grid grid-cols-4 gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow">
          <span className="text-3xl font-bold text-primary">
            {timeRemaining.days}
          </span>
          <span className="text-sm text-muted-foreground">Days</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow">
          <span className="text-3xl font-bold text-primary">
            {timeRemaining.hours}
          </span>
          <span className="text-sm text-muted-foreground">Hours</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow">
          <span className="text-3xl font-bold text-primary">
            {timeRemaining.minutes}
          </span>
          <span className="text-sm text-muted-foreground">Minutes</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow">
          <span className="text-3xl font-bold text-primary">
            {timeRemaining.seconds}
          </span>
          <span className="text-sm text-muted-foreground">Seconds</span>
        </div>
      </motion.div>

      <motion.p
        className="text-base md:text-lg text-foreground max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default ComingSoonSection;
