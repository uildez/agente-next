"use client"
import Link from "next/link"
import { IoArrowUpOutline } from "react-icons/io5"
import Depositions from "../components/depositions"
import { useTranslations } from "next-intl"

export const Testimonials = () => {
  const t = useTranslations("Testimonials")

  return (
    <div className='flex flex-col items-center relative w-full rounded-4xl py-12 pb-12 lg:pb-40 bg-black-agente overflow-hidden'>
      <div className="flex w-full items-center justify-center lg:justify-between px-8 lg:px-20 2xl:px-40">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <div className='flex w-fit items-center gap-2 py-2 px-6 bg-white/50 rounded-full shadow-lg'>
            <span className='relative w-2.5 h-2.5'>
              <span className='absolute w-2.5 h-2.5 rounded-full bg-yellow animate-ping' />
              <span className='absolute top-px right-px w-2 h-2 rounded-full bg-yellow' />
            </span>
            <p className='text-white font-nexa text-lg'>{t("pretitle")}</p>
          </div>
          <h2 className='text-2xl lg:text-5xl text-white font-light text-center lg:text-left'>{t("title")}</h2>
        </div>

        <Link className='hidden lg:flex relative items-center group gap-4 text-white bg-white/50 px-8 py-4 pr-16 rounded-full hover:scale-105 transition-all duration-500 ease-in-out' href={"https://g.page/r/CSslV5s6q44AEAI/review"} title={t("cta")}>
          {t("cta")}
          <span className='absolute flex items-center justify-center right-2 top-1.5 bg-white w-[45px] h-[80%] rounded-full'>
            <IoArrowUpOutline className='text-pink group-hover:rotate-90 group-hover:text-pink text-2xl rotate-45 transition-all duration-500 ease-in-out' />
          </span>
        </Link>
      </div>
      <Depositions />
      <Link className='flex lg:hidden w-fit relative items-center group gap-4 text-white bg-white/50 px-8 py-4 pr-16 rounded-full hover:scale-105 transition-all duration-500 ease-in-out' href={"https://g.page/r/CSslV5s6q44AEAI/review"} title={t("cta")}>
        {t("cta")}
        <span className='absolute flex items-center justify-center right-2 top-1.5 bg-white w-[45px] h-[80%] rounded-full'>
          <IoArrowUpOutline className='text-pink group-hover:rotate-90 group-hover:text-pink text-2xl rotate-45 transition-all duration-500 ease-in-out' />
        </span>
      </Link>
    </div>
  )
}
