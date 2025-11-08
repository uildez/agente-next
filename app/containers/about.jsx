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

  const heClip = useTransform(
    scrollYProgress,
    [0.0, 0.5],
    ["inset(0% 0% 0% 0%)", "inset(100% 0% 0% 0%)"]
  );

  const sheClip = useTransform(
    scrollYProgress,
    [0.0, 0.5],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <section ref={ref} className="relative h-[300vh] hidden lg:flex" id="about-us">
      <div className="sticky top-0 flex flex-col lg:flex-row items-start justify-center h-screen px-8 pt-40 lg:pt-20 pb-40 gap-20 lg:px-20 2xl:px-40 overflow-hidden">
        <div className="relative w-full lg:w-2/5 h-[300px] lg:h-[600px] overflow-hidden rounded-4xl">
          <motion.div
            style={{ clipPath: sheClip }}
            className="absolute inset-0 flex items-center justify-center max-w-[300px] z-0"
          >
            <Image
              className="w-full h-auto object-contain"
              src="/svg/she-star.svg"
              alt="Ayalla - A Gente"
              width={1000}
              height={1000}
            />
          </motion.div>

          <motion.div
            style={{ clipPath: heClip }}
            className="absolute inset-0 flex items-center justify-center max-w-[300px] z-10"
          >
            <Image
              className="w-full h-auto object-contain"
              src="/svg/he-star.svg"
              alt="Uildes - A Gente"
              width={1000}
              height={1000}
            />
          </motion.div>
        </div>

        <div className="w-full lg:w-3/5 relative">
          <h2 className="text-2xl lg:text-5xl pt-8 font-bold">{t("title")}</h2>
          <p className="text-xl mb-8 mt-4">{t("text")}</p>

          <div className="relative w-full h-auto min-h-[550px] overflow-hidden rounded-4xl">
            <motion.div
              style={{ clipPath: heClip }}
              className="absolute inset-0 bg-yellow text-black-agente p-8 rounded-4xl lg:text-xl z-0"
            >
              {t.rich("aboutHe", { br: () => <br /> })}
            </motion.div>

            <motion.div
              style={{ clipPath: sheClip }}
              className="absolute inset-0 bg-pink text-white p-8 rounded-4xl lg:text-xl z-10"
            >
              {t.rich("aboutShe", { br: () => <br /> })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
