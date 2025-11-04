"use client"
import Image from "next/image"
import { useTranslations } from "next-intl"

export const About = () => {
  const t = useTranslations("About")

  return (
    <div className='flex flex-col lg:flex-row gap-0 lg:gap-12 pt-20 px-8 lg:px-20 2xl:px-40 pb-20'>
      <Image className="w-full lg:w-2/5 bg-gray-500 rounded-4xl" src="/svg/she-star.svg" alt="A Gente owner's Uildes & Ayalla" height="1000" width="1000" />
      <div className="w-full lg:w-3/5">
        <h2 className='text-2xl lg:text-5xl pt-8 font-bold'>{t("title")}</h2>
        <p className='text-xl mb-8 mt-4'>{t("text")}</p>
        <p className='bg-yellow text-black-agente p-8 rounded-4xl lg:text-xl'>{t("aboutHe")}</p>
      </div>
    </div>
  )
}
