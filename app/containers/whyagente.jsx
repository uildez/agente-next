"use client"

import { useTranslations } from "next-intl"

export const Whyagente = () => {
  const t = useTranslations("Whyus")

  return (
    <div className='grid lg:grid-rows-3 gap-12 w-full pt-20 px-8 lg:px-20 2xl:px-40'>
      <div className='justify-self-start flex flex-col items-center justify-center relative gap-4 rounded-3xl p-8 lg:pr-60 bg-pink text-white h-auto lg:h-[300px] w-full lg:w-2/4'>
        <h3 className="font-bold text-3xl">{t("topic1.title")}</h3>
        <p className="font-nexa font-light">{t("topic1.subtitle")}</p>
      </div>

      <div className='justify-self-end flex flex-col items-center justify-center relative gap-4 rounded-3xl p-8 lg:pl-60 bg-yellow text-black-agente h-auto lg:h-[300px] w-full lg:w-2/4'>
        <h3 className="font-bold text-3xl text-right">{t("topic2.title")}</h3>
        <p className="font-nexa font-light text-right">{t("topic2.subtitle")}</p>
      </div>

      <div className='justify-self-start flex flex-col items-center justify-center relative gap-4 rounded-3xl p-8 lg:pr-60 bg-pink text-white h-auto lg:h-[300px] w-full lg:w-2/4'>
        <h3 className="font-bold text-3xl">{t("topic3.title")}</h3>
        <p className="font-nexa font-light">{t("topic3.subtitle")}</p>
      </div>
    </div>
  )
}
