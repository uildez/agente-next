"use client"

import Link from 'next/link'
import { IoArrowUpOutline } from "react-icons/io5";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale } from "next-intl";
import { useContact } from '../context/contactContext';

export const Header = () => {
  const t = useTranslations("Header")
  const [animation3d, setAnimation3d] = useState(false)
  const { openPopup } = useContact();

  const locale = useLocale();

  const words =
    locale === "pt"
      ? ["empreendedores", "marcas", "agências", "criadores", "visionários"]
      : ["entrepreneurs", "brands", "agencies", "creators", "visionaries"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex relative w-full flex-col gap-4 lg:gap-8 2xl:gap-12 items-center pt-52 lg:pt-20 pb-40 lg:pb-40 px-8 lg:px-20 2xl:px-40'>
      <div className='flex items-center gap-2 py-2 px-6 bg-white rounded-full shadow-lg'>
        <span className='relative w-2.5 h-2.5'>
          <span className='absolute w-2.5 h-2.5 rounded-full bg-pink animate-ping' />
          <span className='absolute top-px right-px w-2 h-2 rounded-full bg-pink' />
        </span>
        <p className='text-black-agente font-nexa text-sm lg:text-lg'>{t("available")}</p>
      </div>
      <h1 className='text-black-agente text-center text-3xl lg:text-5xl w-full lg:w-3/6 font-nexa font-bold'>
        {t("header")}
        <div className="relative h-[60px] lg:h-20 -mt-2 text-3xl lg:text-6xl font-stix italic">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ y: "100%", opacity: 0, rotateX: -60 }}
              animate={{ y: "0%", opacity: 1, rotateX: 0 }}
              exit={{ y: "-100%", opacity: 0, rotateX: 60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center bg-linear-to-r from-yellow-500 to-pink bg-clip-text text-transparent"
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
        </div>
      </h1>
      <div className='flex flex-col lg:flex-row w-full gap-4 lg:gap-8 items-center justify-center'>
        <div
          className='flex relative items-center group gap-4 text-white bg-black-agente px-8 py-4 pr-16 rounded-full hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer'
          onClick={openPopup}
          onMouseEnter={() => setAnimation3d(true)} onMouseLeave={() => setAnimation3d(false)}
        >
          {t("call")}
          <span className='absolute flex items-center justify-center right-2 top-1.5 bg-white/0 group-hover:bg-white w-[45px] h-[80%] rounded-full'>
            <IoArrowUpOutline className='text-pink group-hover:rotate-90 text-2xl rotate-45 transition-all duration-500 ease-in-out' />
          </span>
        </div>
        <Link className='relative group' href={"#projects"} title='See your work'>
          {t("cta")}
          <span className='absolute -bottom-2 h-0.5 w-0 group-hover:w-full left-0 bg-black-agente transition-all duration-500 ease-in-out' />
        </Link>
      </div>
      <Image className="absolute w-[180px] lg:w-[300px] rotate-12 top-4 z-10 lg:top-0 left-16 lg:left-20 he-float" src={animation3d === true ? "/images/mascots/he-blink.webp" : "/images/mascots/he.webp"} alt="3D Uildes Mascot" width={500} height={500} />
      <Image className="absolute w-[150px] lg:w-[300px] -rotate-20 left-46 z-0 lg:left-auto lg:right-20 top-8 lg:top-auto lg:bottom-10 she-float" src={animation3d === true ? `/images/mascots/she-star.webp` : `/images/mascots/she-very-happy.webp`} alt="3D Uildes Mascot" width={500} height={500} />
    </div>
  )
}
