"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export const AboutMobile = () => {
  const t = useTranslations("About");
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
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
    <section className="lg:hidden pb-8" id="about-us-mobile">
      {/* Título e texto inicial */}
      <div className="px-6 pt-8">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
        <p className="text-base mt-3 mb-6">{t("text")}</p>
      </div>

      {/* Wrapper com scroll controlado */}
      <div ref={wrapperRef} className="relative w-full min-h-[200vh]">
        {/* Bloco sticky com animação */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-0 px-6 overflow-hidden bg-transparent">
          {/* Imagens sobrepostas */}
          <div className="relative w-full max-w-[360px] h-[300px] mb-6 overflow-hidden rounded-2xl">
            {/* Ela por baixo, sempre visível */}
            <motion.div
              style={{ clipPath: sheClip }}
              className="absolute inset-0 flex items-center justify-center z-0 bg-size-[500px] bg-no-repeat bg-position-[center_top_-2rem] bg-[url('/images/she-photo.webp')]"
            />

            {/* Ele por cima, desaparecendo */}
            <motion.div
              style={{ clipPath: heClip }}
              className="absolute inset-0 flex items-center justify-center z-10 bg-size-[500px] bg-no-repeat bg-position-[center_top_-2rem] bg-[url('/images/he-photo.webp')]"
            />
          </div>

          {/* Textos sobrepostos */}
          <div className="relative w-full max-w-[720px] h-[550px]">
            {/* Ela por baixo, sempre visível */}
            <motion.div
              style={{ clipPath: sheClip }}
              className="absolute inset-0 bg-pink text-white p-6 rounded-2xl z-0 text-md leading-5"
            >
              {t.rich("aboutShe", { br: () => <br /> })}
            </motion.div>

            {/* Ele por cima, desaparecendo */}
            <motion.div
              style={{ clipPath: heClip }}
              className="absolute inset-0 bg-yellow text-black-agente p-6 rounded-2xl z-10 text-md leading-5"
            >
              {t.rich("aboutHe", { br: () => <br /> })}
            </motion.div>
          </div>
        </div>

        {/* Espaço extra pra leitura após o reveal */}
        <div className="px-6 pt-8 pb-24">
          <p className="text-sm text-gray-600"></p>
        </div>
      </div>
    </section>
  );
};
