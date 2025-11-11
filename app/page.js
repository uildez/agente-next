"use client"

/* eslint-disable react-hooks/set-state-in-effect */
import { Topbar } from "./containers/topbar"
import { Header } from "./containers/header"
import { Video } from "./containers/video"
import ContactPopup from "./components/contactPopup"
import Whyus from "./containers/whyus"
import { Partnerships } from "./containers/partnerships"
import { Projects } from "./containers/projects"
import { Numbers } from "./containers/numbers"
import { Whyagente } from "./containers/whyagente"
import { Services } from "./containers/services"
import { About } from "./containers/about"
import { AboutMobile } from "./containers/aboutMobile"
import { Testimonials } from "./containers/testimonials"
import { PopupMenu } from "./components/popupMenu"
import { FloatingTooltip } from "./components/floatingTooltip"
import { Faq } from "./containers/faq"
import { AnimatePresence, motion } from "framer-motion"
import { HiLanguage } from "react-icons/hi2"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ContactProvider, useContact } from "./context/contactContext";
import { useTranslations } from "next-intl"

export default function Home() {
  const router = useRouter()
  const [locale, setLocale] = useState("")
  const [languageButton, setLanguageButton] = useState(false);
  const [autoPopup, setAutoPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const t = useTranslations("MouseTooltip")

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

    // 👇 Mostra o popup automaticamente ao carregar
    setAutoPopup(true)
    const timer = setTimeout(() => setAutoPopup(false), 3000) // some em 3s
    return () => clearTimeout(timer)
  }, [router]);

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh()
  }

  const [tooltip, setTooltip] = useState({ text: "", position: { x: 0, y: 0 } });

  const handleMouseEnter = (text) => (e) => {
    setTooltip({ text, position: { x: e.clientX, y: e.clientY } });
  };

  const handleMouseMove = (e) => {
    setTooltip((prev) => ({
      ...prev,
      position: { x: e.clientX, y: e.clientY },
    }));
  };

  const handleMouseLeave = () => {
    setTooltip({ text: "", position: { x: 0, y: 0 } });
  };

  return (
    <ContactProvider>
      <div className="flex flex-col min-h-screen items-center justify-center font-nexa font-light" onMouseMove={handleMouseMove}>
        <PopupMenu />
        <Topbar />
        <Header />
        <Video
          onMouseEnter={handleMouseEnter(t("video"))}
          onMouseLeave={handleMouseLeave}
        />
        <Whyus />
        <Partnerships />
        <Projects
          onMouseEnter={handleMouseEnter(t("projects"))}
          onMouseLeave={handleMouseLeave}
        />
        <Numbers />
        <Whyagente />
        <Services />
        <About />
        <AboutMobile />
        <Testimonials />
        <Faq />
        <ContactPopupWrapper />
        <div className="fixed bottom-4 right-4 block lg:hidden z-40">
          <button
            className='relative bg-black-agente p-3 text-white cursor-pointer rounded-full hover:scale-105 hover:bg-pink text-2xl transition-all duration-500 ease-in-out'
            onClick={() => changeLocale(locale === "en" ? "pt" : "en")}
          >
            <AnimatePresence>
              {(languageButton || autoPopup) && (
                <motion.div
                  initial={{ scale: 0.8, rotate: -3, opacity: 0, y: 10 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, rotate: 3, opacity: 0, y: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className='absolute -top-16 w-[250px] right-0 bg-white shadow-2xl rounded-2xl p-4 text-black text-sm font-semibold'
                >
                  {locale === "en"
                    ? "Mudar idioma para PT-BR"
                    : "Change language to EN"}
                </motion.div>
              )}
            </AnimatePresence>
            <HiLanguage />
          </button>
        </div>
        <FloatingTooltip text={tooltip.text} position={tooltip.position} />
      </div>
    </ContactProvider>
  );
}

function ContactPopupWrapper() {
  const { showPopup, closePopup } = useContact();
  return <ContactPopup isOpen={showPopup} onClose={closePopup} />;
}