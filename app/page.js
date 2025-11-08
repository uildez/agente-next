"use client"

/* eslint-disable react-hooks/set-state-in-effect */
import { Topbar } from "./containers/topbar"
import { Header } from "./containers/header"
import { Video } from "./containers/video"
import Whyus from "./containers/whyus"
import { Partnerships } from "./containers/partnerships"
import { Projects } from "./containers/projects"
import { Numbers } from "./containers/numbers"
import { Whyagente } from "./containers/whyagente"
import { Services } from "./containers/services"
import { About } from "./containers/about"
import { Testimonials } from "./containers/testimonials"
import { Faq } from "./containers/faq"
import { AnimatePresence, motion } from "framer-motion"
import { HiLanguage } from "react-icons/hi2"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [locale, setLocale] = useState("")
  const [languageButton, setLanguageButton] = useState(false);

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

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh()
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-nexa font-light">
      <Topbar />
      <Header />
      <Video />
      <Whyus />
      <Partnerships />
      <Projects />
      <Numbers />
      <Whyagente />
      <Services />
      <About />
      <Testimonials />
      <Faq />
      <div className="fixed bottom-4 right-4 block lg:hidden z-40">
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
  );
}
