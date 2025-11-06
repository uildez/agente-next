"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Video = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "8-% start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["2rem", "0rem"]);
  const y = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <section
      ref={ref}
      className="relative flex justify-center items-center w-full -mt-32"
    >
      <motion.video
        style={{
          scale,
          borderRadius,
          y,
          opacity,
        }}
        preload="none"
        autoPlay
        muted
        loop
        playsInline
        className="w-screen aspect-video bg-gray-500 object-cover"
      >
        <source src="/videos/Mk-EACoaching.mp4" type="video/mp4" />
        Seu browser não suporta reprodução de vídeo.
      </motion.video>
    </section>
  );
};
