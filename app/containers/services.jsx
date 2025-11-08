"use client"
import { useTranslations } from "next-intl"
import ServicesList from "../components/services"

export const Services = () => {
  const t = useTranslations("Services")

  return (
    <div className='flex flex-col w-full pt-20' id="services">
      <div className='flex flex-col relative w-full lg:px-20 2xl:px-40 overflow-hidden'>
        <div className='flex flex-col justify-between w-full lg:h-[800px] rounded-4xl bg-black-agente p-12'>
          <div className='flex flex-col lg:flex-row items-start justify-between w-full lg:h-[600px] rounded-4xl bg-black-agente p-12'>
            <h2 className='text-2xl lg:text-5xl w-fullç lg:w-2/5 text-white text-center lg:text-left'>
              {t.rich('title', {
                span: (chunks) => <span className='font-stix italic'>{chunks}</span>
              })}
            </h2>
            <p className='text-white w-full text-lg lg:w-2/6 text-center lg:text-right pt-4 lg:pt-0'>{t("subtitle")}</p>
          </div>
        </div>
        <ServicesList />
      </div>
    </div>
  )
}
