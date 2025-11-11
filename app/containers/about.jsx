"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export const About = () => {
  const t = useTranslations("About");
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Ele vai desaparecendo
  const heClip = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["inset(0% 0% 0% 0%)", "inset(100% 0% 0% 0%)"]
  );

  // Ela já está visível desde o início (clip fixo)
  const sheClip = "inset(0% 0% 0% 0%)";

  return (
    <section ref={ref} className="relative h-[300vh] hidden lg:flex" id="about-us">
      <div className="sticky top-0 flex flex-col lg:flex-row items-start justify-center h-screen px-8 pt-40 lg:pt-20 pb-40 gap-20 lg:px-20 2xl:px-40 overflow-hidden">
        <div className="relative w-full lg:w-2/5 h-[300px] lg:h-full overflow-hidden rounded-4xl">
          <motion.div
            style={{ clipPath: sheClip }}
            className="absolute inset-0 flex h-full items-center justify-center z-0 bg-cover bg-no-repeat bg-center bg-[url('/images/she-photo.webp')]"
          />

          <motion.div
            style={{ clipPath: heClip }}
            className="absolute inset-0 flex h-full items-center justify-center z-1 bg-cover bg-no-repeat bg-center bg-[url('/images/he-photo.webp')]"
          />
        </div>

        <div className="w-full lg:w-3/5 relative">
          <h2 className="text-2xl lg:text-5xl pt-8 font-bold">{t("title")}</h2>
          <p className="text-xl mb-8 mt-4">{t("text")}</p>

          <div className="relative w-full h-auto min-h-[550px] overflow-hidden rounded-4xl">
            <motion.div
              style={{ clipPath: sheClip }}
              className="absolute inset-0 bg-pink text-white p-6 rounded-3xl text-lg z-0 leading-relaxed"
            >
              {t.rich("aboutShe", { br: () => <br /> })}
            </motion.div>

            {/* Ele por cima, desaparecendo */}
            <motion.div
              style={{ clipPath: heClip }}
              className="absolute inset-0 bg-yellow text-black-agente p-6 rounded-3xl text-lg z-10 leading-relaxed"
            >
              {t.rich("aboutHe", { br: () => <br /> })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
