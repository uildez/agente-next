"use client"

import Image from 'next/image'
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';
import { animate, useMotionValue, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const Partnerships = () => {
  const t = useTranslations("Partnerships")

  const images1 = [
    "/images/clients/logo-ainext.webp",
    "/images/clients/logo-c4b.webp",
    "/images/clients/logo-kemparsk.webp",
    "/images/clients/logo-pinheirinho.webp",
    "/images/clients/logo-vaiviajar.webp",
  ]

  const images2 = [
    "/images/clients/logo-apuppa.webp",
    "/images/clients/logo-clinica.webp",
    "/images/clients/logo-cupcabana.webp",
    "/images/clients/logo-amorena.webp",
    "/images/clients/logo-eacoaching.webp",
  ]

  // Medida do container
  let [ref, { width }] = useMeasure();

  // Motion values independentes
  const x1 = useMotionValue(0);
  const x2 = useMotionValue(0);

  useEffect(() => {
    let controls1, controls2;
    const finalPosition = -width / 2 - 48;

    // Linha 1 — direção normal
    controls1 = animate(x1, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    });

    // Linha 2 — direção contrária
    controls2 = animate(x2, [finalPosition, 0], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    });

    return () => {
      controls1.stop();
      controls2.stop();
    };
  }, [x1, x2, width]);

  return (
    <div className='flex flex-col items-center pt-12 lg:pt-20 pb-20 lg:pb-20 w-full overflow-hidden'>
      <div className='flex w-fit items-center gap-2 py-2 px-6 bg-white rounded-full shadow-lg'>
        <span className='relative w-2.5 h-2.5'>
          <span className='absolute w-2.5 h-2.5 rounded-full bg-yellow animate-ping' />
          <span className='absolute top-px right-px w-2 h-2 rounded-full bg-yellow' />
        </span>
        <p className='text-black-agente font-nexa font-light text-lg'>{t("pretitle")}</p>
      </div>

      <h2 className='text-2xl lg:text-5xl pt-8 font-bold'>{t("title")}</h2>

      <main className='relative w-full py-12 lg:py-20'>
        <motion.div
          className='absolute top-4 lg:top-10 left-0 flex gap-12 lg:gap-24'
          ref={ref}
          style={{ x: x1 }}
        >
          {[...images1, ...images1, ...images1].map((item, idx) => (
            <Image
              key={`line1-${idx}`}
              src={item}
              alt='Logo clients'
              className='object-contain opacity-75 hover:opacity-100 hover:scale-105 w-[150px] lg:w-auto transition-all duration-500 ease-in-out brightness-0'
              width={500}
              height={500}
            />
          ))}
        </motion.div>

        <motion.div
          className='absolute top-25 lg:top-40 left-0 flex gap-12 lg:gap-24'
          ref={ref}
          style={{ x: x2 }}
        >
          {[...images2, ...images2, ...images2].slice().reverse().map((item, idx) => (
            <Image
              key={`line2-${idx}`}
              src={item}
              alt='Logo clients'
              className='object-contain opacity-75 hover:opacity-100 hover:scale-105 w-[150px] lg:w-auto transition-all duration-500 ease-in-out brightness-0'
              width={500}
              height={500}
            />
          ))}
        </motion.div>
      </main>
    </div>
  );
};