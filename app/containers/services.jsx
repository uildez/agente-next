"use client"
import { useTranslations } from "next-intl"

export const Services = () => {
  const t = useTranslations("Services")

  return (
    <div className='flex flex-col w-full pt-20'>
      <div className='flex w-full lg:px-20 2xl:px-40'>
        <div className='flex flex-col lg:flex-row items-start justify-between w-full lg:h-[600px] rounded-4xl bg-black-agente p-12'>
          <h2 className='text-2xl lg:text-5xl w-fullç lg:w-2/5 text-white text-center lg:text-left'>
            {t.rich('title', {
              span: (chunks) => <span className='font-stix italic'>{chunks}</span>
            })}
          </h2>
          <p className='text-white w-full lg:w-2/5 text-center lg:text-right pt-4 lg:pt-0'>{t("subtitle")}</p>
        </div>
      </div>
    </div>
  )
}
