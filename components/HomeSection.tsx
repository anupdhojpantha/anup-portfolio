import React from "react";
import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/animations/particle-background";
import { AnimatedButton } from "@/components/animations/animated-button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Improved Typewriter component
const Typewriter = ({
  texts,
  delay = 100,
  pauseDelay = 1500,
}: {
  texts: string[];
  delay?: number;
  pauseDelay?: number;
}) => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const fullText = texts[currentTextIndex];

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, delay / 2);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (currentText.length < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, delay);
      } else {
        setIsPaused(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    delay,
    isDeleting,
    isPaused,
    pauseDelay,
    texts,
  ]);

  return (
    <span className="text-amber-500">
      {currentText}
      <span className={`animate-pulse${isPaused ? " opacity-0" : ""}`}>|</span>
    </span>
  );
};

const HomeSection = () => (
  <section
    id="home"
    className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center relative "
  >
    {/* Background Elements */}
    {/* <ParticleBackground className="absolute inset-0 -z-10" /> */}

    {/* Main Content */}
    <div className="container px-4 md:px-6 relative z-10 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:justify-between min-h-[80vh]">
        {/* Left Content - Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-6 lg:space-y-8 text-center lg:text-left order-1 lg:items-start"
        >
          <div className="space-y-4 lg:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium"
            >
              Data Analyst | Business Intelligence | Dashboard Developer
            </motion.div>
            <div className="space-y-3 lg:space-y-4">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter premium-text-shadow">
                Hi, I am Anup Pantha
              </span>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold"
              >
                I'm a{" "}
                <Typewriter
                  texts={[
                    "Data Analyst",
                    "Dashboard Developer",
                    "Problem Solver",
                    "Tech Enthusiast",
                  ]}
                />
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl"
              >
              I am an aspiring Data Analyst with a strong focus on extracting insights from data through analysis, visualization, and statistical methods. With a background in development, I bring strong programming skills along with hands-on experience in Python, SQL, and data visualization tools.
              I am passionate about transforming complex datasets into actionable insights and building data-driven solutions that support business intelligence and strategic decision-making. I am eager to apply my skills in data cleaning, statistical analysis, and dashboard development to real-world projects and contribute to data-driven success.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start"
          >
            {<a href="\Anup_Pantha_DataAnalyst_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <AnimatedButton className="px-6 lg:px-8 py-2 lg:py-3 text-sm lg:text-base fancy-button">
                View Resume <ArrowRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
            </a> }
            <Link href="#projects">
              <AnimatedButton
                variant="outline"
                className="px-6 lg:px-8 py-2 lg:py-3 text-sm lg:text-base fancy-button-outline"
              >
                View My Work
              </AnimatedButton>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center gap-4 lg:gap-6 justify-center lg:justify-start"
          >
            <div className="text-xs lg:text-sm text-muted-foreground font-medium">
              Find me on:
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <Link
                href="https://github.com/anupdhojpantha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedButton
                  variant="ghost"
                  size="icon"
                  className="hover:text-amber-500 hover:bg-amber-500/10 h-8 w-8 lg:h-10 lg:w-10"
                >
                  <Github className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span className="sr-only">GitHub</span>
                </AnimatedButton>
              </Link>
              <Link
                href="https://www.linkedin.com/in/anup-pantha-587022324/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedButton
                  variant="ghost"
                  size="icon"
                  className="hover:text-amber-500 hover:bg-amber-500/10 h-8 w-8 lg:h-10 lg:w-10"
                >
                  <Linkedin className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span className="sr-only">LinkedIn</span>
                </AnimatedButton>
              </Link>
              <Link href="mailto:anupdhojpantha@gmail.com">
                <AnimatedButton
                  variant="ghost"
                  size="icon"
                  className="hover:text-amber-500 hover:bg-amber-500/10 h-8 w-8 lg:h-10 lg:w-10"
                >
                  <Mail className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span className="sr-only">Email</span>
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Circular Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="flex items-center justify-center order-2 mb-6 lg:mb-0 lg:justify-end lg:items-end"
        >
          <div className="relative">
            {/* Floating Dots */}
            <motion.div
              className="absolute w-1.5 h-1.5 lg:w-2 lg:h-2 bg-amber-500/40 rounded-full"
              style={{ top: "10%", right: "15%" }}
              animate={{ y: [-8, 8, -8], opacity: [0.4, 0.8, 0.4] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-amber-500/30 rounded-full"
              style={{ bottom: "15%", left: "10%" }}
              animate={{ y: [8, -8, 8], opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Circular Profile Image */}
            <motion.div
              className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Anup Pantha"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-full"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent rounded-full" />
            </motion.div>

            {/* Decorative Ring */}
            <motion.div
              className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-2 border-amber-500/20"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HomeSection;
