"use client"

import Link from 'next/link'
import { IoArrowUpOutline } from "react-icons/io5";
import { useTranslations } from 'next-intl';

export const Header = () => {
  const t = useTranslations("Header")

  return (
    <div className='flex w-full flex-col gap-12 items-center pt-20 lg:pt-20 pb-20 lg:pb-40 px-8 lg:px-20 2xl:px-40'>
      <div className='flex items-center gap-2 py-2 px-6 bg-white rounded-full shadow-lg'>
        <span className='relative w-2.5 h-2.5'>
          <span className='absolute w-2.5 h-2.5 rounded-full bg-pink animate-ping' />
          <span className='absolute top-px right-px w-2 h-2 rounded-full bg-pink' />
        </span>
        <p className='text-black-agente font-nexa text-lg'>{t("available")}</p>
      </div>
      <h1 className='text-black-agente text-center text-3xl lg:text-6xl w-full lg:w-2/5 font-nexa font-bold'>{t("header")}<p className='text-3xl lg:text-6xl font-stix italic'>{t("animate")}</p></h1>
      <div className='flex flex-col lg:flex-row w-full gap-8 items-center justify-center'>
        <Link className='flex relative items-center group gap-4 text-white bg-black-agente px-8 py-4 pr-16 rounded-full hover:scale-105 transition-all duration-500 ease-in-out' href={""} title='Schedulle a Call'>
          {t("call")}
          <span className='absolute flex items-center justify-center right-2 top-1.5 bg-white/0 group-hover:bg-white w-[45px] h-[80%] rounded-full'>
            <IoArrowUpOutline className='text-pink group-hover:rotate-90 text-2xl rotate-45 transition-all duration-500 ease-in-out' />
          </span>
        </Link>
        <Link className='relative group' href={"#projects"} title='See your work'>
          {t("cta")}
          <span className='absolute -bottom-2 h-0.5 w-0 group-hover:w-full left-0 bg-black-agente transition-all duration-500 ease-in-out' />
        </Link>
      </div>
    </div>
  )
}
