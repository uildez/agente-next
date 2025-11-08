/* eslint-disable react-hooks/set-state-in-effect */
import Link from 'next/link'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useTranslations } from 'use-intl';
import { HiLanguage } from "react-icons/hi2";

export const Menu = () => {
  const t = useTranslations("Menu");
  const router = useRouter()
  const [locale, setLocale] = useState("")
  const [languageButton, setLanguageButton] = useState(false);

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
    <div
      className="fixed hidden lg:flex items-center justify-center z-50 h-[60px] w-full bottom-8 font-nexa"
    >
      <div className='flex items-center justify-center gap-8 px-2 bg-white h-full w-fit rounded-full shadow-lg group transition-all duration-500 ease-in-out'>
        <Link href={"#about-us"} title='About Us Link' className='items-center gap-2 py-2 px-6 bg-white rounded-full group hover:bg-pink hover:text-white opacity-0 -translate-x-60 hidden group-hover:flex group-hover:opacity-100 group-hover:translate-x-0 hover:scale-105 transition-all duration-500 ease-in-out'>
          <span className='relative w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 transition-all duration-500 ease-in-out'>
            <span className='absolute w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 rounded-full bg-white animate-ping' />
            <span className='absolute top-px right-px w-0 h-0 group-hover:h-2 group-hover:w-2 rounded-full bg-white' />
          </span>
          <p className='font-nexa font-light text-lg'>
            {t("who")}
          </p>
        </Link>
        <Link href={"#services"} title='Services Link' className='items-center gap-2 py-2 px-6 bg-white rounded-full group hover:bg-pink hover:text-white opacity-0 -translate-x-60 hidden group-hover:flex group-hover:opacity-100 group-hover:translate-x-0 hover:scale-105 transition-all duration-500 ease-in-out'>
          <span className='relative w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 transition-all duration-500 ease-in-out'>
            <span className='absolute w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 rounded-full bg-white animate-ping' />
            <span className='absolute top-px right-px w-0 h-0 group-hover:h-2 group-hover:w-2 rounded-full bg-white' />
          </span>
          <p className='font-nexa font-light text-lg'>
            {t("what")}
          </p>
        </Link>
        <Link href={"#why-us"} title='Why Us Link' className='items-center gap-2 py-2 px-6 bg-white rounded-full group hover:bg-pink hover:text-white opacity-0 -translate-x-60 hidden group-hover:flex group-hover:opacity-100 group-hover:translate-x-0 hover:scale-105 transition-all duration-500 ease-in-out'>
          <span className='relative w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 transition-all duration-500 ease-in-out'>
            <span className='absolute w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 rounded-full bg-white animate-ping' />
            <span className='absolute top-px right-px w-0 h-0 group-hover:h-2 group-hover:w-2 rounded-full bg-white' />
          </span>
          <p className='font-nexa font-light text-lg'>
            {t("why")}
          </p>
        </Link>
        <Link href={"mailto:contato@agente.studio"} title='Contato link' className='flex items-center gap-2 py-2 px-6 bg-white rounded-full group hover:bg-pink hover:text-white ransition-all hover:scale-105 transition-all duration-500 ease-in-out'>
          <span className='relative w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 transition-all duration-500 ease-in-out'>
            <span className='absolute w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 rounded-full bg-white animate-ping' />
            <span className='absolute top-px right-px w-0 h-0 group-hover:h-2 group-hover:w-2 rounded-full bg-white' />
          </span>
          <p className='font-nexa font-light text-lg'>
            {t("contact")}
          </p>
        </Link>
        <Link href={"#portfolio"} title='Portfolio link' className='flex items-center gap-2 py-2 px-6 bg-white rounded-full group hover:bg-pink hover:text-white ransition-all hover:scale-105 transition-all duration-500 ease-in-out'>
          <span className='relative w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 transition-all duration-500 ease-in-out'>
            <span className='absolute w-0 h-0 group-hover:h-2.5 group-hover:w-2.5 rounded-full bg-white animate-ping' />
            <span className='absolute top-px right-px w-0 h-0 group-hover:h-2 group-hover:w-2 rounded-full bg-white' />
          </span>
          <p className='font-nexa font-light text-lg'>
            {t("portfolio")}
          </p>
        </Link>
        <Link href={"#home"} title='Home link' className='flex items-center gap-2 py-2 px-6 bg-black-agente rounded-full text-white hover:scale-105 transition-all duration-500 ease-in-out'>
          <p className='font-nexa font-light text-lg'>
            {t("home")}
          </p>
        </Link>
        <div>
          {locale === "en" ? (
            <button
              className='relative bg-black-agente p-3 text-white cursor-pointer rounded-full hover:scale-105 hover:bg-pink text-2xl transition-all duration-500 ease-in-out'
              onMouseEnter={() => setLanguageButton(true)}
              onMouseLeave={() => setLanguageButton(false)}
              onClick={() => changeLocale("pt")}
            >
              <AnimatePresence>
                {languageButton && (
                  <motion.div
                    initial={{ scale: 0.8, rotate: -3, opacity: 0, y: 10 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, rotate: 3, opacity: 0, y: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className='absolute -top-16 w-[250px] right-0 bg-white shadow-2xl rounded-2xl p-4 text-black text-sm font-semibold'
                  >
                    Mudar idioma para PT-BR
                  </motion.div>
                )}
              </AnimatePresence>
              <HiLanguage />
            </button>
          ) : (
            <button
              className='relative bg-black-agente p-3 text-white cursor-pointer rounded-full hover:scale-105 hover:bg-pink text-2xl transition-all duration-500 ease-in-out'
              onMouseEnter={() => setLanguageButton(true)}
              onMouseLeave={() => setLanguageButton(false)}
              onClick={() => changeLocale("en")}
            >
              <AnimatePresence>
                {languageButton && (
                  <motion.div
                    initial={{ scale: 0.8, rotate: -3, opacity: 0, y: 10 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, rotate: 3, opacity: 0, y: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className='absolute -top-16 w-[250px] right-0 bg-white shadow-2xl rounded-2xl p-4 text-black text-sm font-semibold'
                  >
                    Change language to EN
                  </motion.div>
                )}
              </AnimatePresence>
              <HiLanguage />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
