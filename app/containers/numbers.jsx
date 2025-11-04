"use client"

import { useTranslations } from "next-intl"

export const Numbers = () => {
  const t = useTranslations("Numbers")

  return (
    <div className='flex flex-col lg:flex-row w-full justify-center gap-40 items-center'>
      <div className='flex flex-col relative'>
        <h3 className='font-black font-nexa text-black-agente text-8xl'>10+</h3>
        <span className='absolute w-5 h-5 rounded-full -left-12 bg-pink' />
        <p className='font-stix italic text-2xl text-black-agente'>{t("number1")}</p>
      </div>
      <div className='flex flex-col relative'>
        <h3 className='font-black font-nexa text-black-agente text-8xl'>156+</h3>
        <span className='absolute w-5 h-5 rounded-full -left-12 bg-pink' />
        <p className='font-stix italic text-2xl text-black-agente'>{t("number2")}</p>
      </div>
      <div className='flex flex-col relative'>
        <h3 className='font-black font-nexa text-black-agente text-8xl'>80+</h3>
        <span className='absolute w-5 h-5 rounded-full -left-12 bg-pink' />
        <p className='font-stix italic text-2xl text-black-agente'>{t("number3")}</p>
      </div>
    </div>
  )
}
