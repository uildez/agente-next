/* eslint-disable react-hooks/set-state-in-effect */
import Link from 'next/link'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { useTranslations } from 'use-intl';

export const Menu = () => {
  const t = useTranslations("Menu");
  const router = useRouter()
  const [locale, setLocale] = useState("")

  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const cookieLocale = document.cookie.split("; ").find((row) => row.startsWith("MYNEXTAPP_LOCALE"))?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale)
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale)
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
      router.refresh
    }
  }, [router]);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDown = currentScrollY > lastScrollY;
      const scrollUp = currentScrollY < lastScrollY;

      const distanceToBottom = document.body.scrollHeight - window.innerHeight - currentScrollY;

      if (currentScrollY <= 2000) {
        controls.start({ y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } });
      } else if (scrollDown) {
        controls.start({ y: 100, transition: { type: "spring", stiffness: 300, damping: 30 } });
      } else if (scrollUp && distanceToBottom <= 500) {
        controls.start({ y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh()
  }
  
  return (
    <motion.div
      animate={controls}
      initial={{ y: 0 }}
      className="hidden lg:fixed flex items-center justify-center z-50 h-[60px] w-full bottom-8 font-nexa"
    >
      <div className='flex items-center justify-center gap-8 px-2 bg-white h-full w-fit rounded-full shadow-lg group transition-all duration-500 ease-in-out'>
        <Link href={""} title='' className='items-center gap-2 py-2 px-6 bg-white rounded-full group hover:bg-pink hover:text-white opacity-0 -translate-x-60 hidden group-hover:flex group-hover:opacity-100 group-hover:translate-x-0 hover:scale-105 transition-all duration-500 ease-in-out'>
          <span className='relative w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 transition-all duration-500 ease-in-out'>
            <span className='absolute w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 rounded-full bg-white animate-ping' />
            <span className='absolute top-px right-px w-0 h-0 group-hover:h-2 group-hover:w-2 rounded-full bg-white' />
          </span>
          <p className='font-nexa font-light text-lg'>
            {t("who")}
          </p>
        </Link>
        <Link href={""} title='' className='items-center gap-2 py-2 px-6 bg-white rounded-full group hover:bg-pink hover:text-white opacity-0 -translate-x-60 hidden group-hover:flex group-hover:opacity-100 group-hover:translate-x-0 hover:scale-105 transition-all duration-500 ease-in-out'>
          <span className='relative w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 transition-all duration-500 ease-in-out'>
            <span className='absolute w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 rounded-full bg-white animate-ping' />
            <span className='absolute top-px right-px w-0 h-0 group-hover:h-2 group-hover:w-2 rounded-full bg-white' />
          </span>
          <p className='font-nexa font-light text-lg'>
            {t("what")}
          </p>
        </Link>
        <Link href={""} title='' className='items-center gap-2 py-2 px-6 bg-white rounded-full group hover:bg-pink hover:text-white opacity-0 -translate-x-60 hidden group-hover:flex group-hover:opacity-100 group-hover:translate-x-0 hover:scale-105 transition-all duration-500 ease-in-out'>
          <span className='relative w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 transition-all duration-500 ease-in-out'>
            <span className='absolute w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 rounded-full bg-white animate-ping' />
            <span className='absolute top-px right-px w-0 h-0 group-hover:h-2 group-hover:w-2 rounded-full bg-white' />
          </span>
          <p className='font-nexa font-light text-lg'>
            {t("why")}
          </p>
        </Link>
        <Link href={""} title='' className='flex items-center gap-2 py-2 px-6 bg-white rounded-full group hover:bg-pink hover:text-white'>
          <span className='relative w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 transition-all duration-500 ease-in-out'>
            <span className='absolute w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 rounded-full bg-white animate-ping' />
            <span className='absolute top-px right-px w-0 h-0 group-hover:h-2 group-hover:w-2 rounded-full bg-white' />
          </span>
          <p className='font-nexa font-light text-lg'>
            {t("contact")}
          </p>
        </Link>
        <Link href={""} title='' className='flex items-center gap-2 py-2 px-6 bg-white rounded-full group hover:bg-pink hover:text-white'>
          <span className='relative w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 transition-all duration-500 ease-in-out'>
            <span className='absolute w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 rounded-full bg-white animate-ping' />
            <span className='absolute top-px right-px w-0 h-0 group-hover:h-2 group-hover:w-2 rounded-full bg-white' />
          </span>
          <p className='font-nexa font-light text-lg'>
            {t("portfolio")}
          </p>
        </Link>
        <Link href={""} title='' className='flex items-center gap-2 py-2 px-6 bg-black-agente rounded-full text-white hover:scale-105'>
          <p className='font-nexa font-light text-lg'>
            {t("home")}
          </p>
        </Link>
        <div>
          {locale === "en" ?
            <button
              className='bg-black-agente p-4 text-white cursor-pointer'
              onClick={() => changeLocale("pt")}
            >
              mudar para pt
            </button>
            :
            <button
              className='bg-black-agente p-4 text-white cursor-pointer'
              onClick={() => changeLocale("en")}
            >
              mudar para en
            </button>
          }
        </div>
      </div>
    </motion.div>
  )
}
