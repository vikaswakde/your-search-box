"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedCardContainerProps = {
  children: ReactNode;
  index: number;
};

const AnimatedCardContainer = ({
  children,
  index,
}: AnimatedCardContainerProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
    className="rounded-full"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCardContainer;
