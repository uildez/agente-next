"use client"

import Link from 'next/link'
import { IoArrowUpOutline } from 'react-icons/io5'
import { useTranslations } from 'use-intl'

export const Projects = () => {
  const t = useTranslations("Projects")

  return (
    <div className='flex flex-col items-center overflow-hidden w-full'>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-4 lg:grid-rows-[auto_1fr_1fr] w-full h-full gap-8 pt-8 lg:pt-20 px-8 lg:px-20 2xl:px-40">
        <div className='lg:col-span-full row-span-1 w-full bg-gray-300 min-h-[250px] lg:min-h-[500px] rounded-4xl'></div>
        <div className='relative lg:col-span-1 lg:row-span-2 w-full bg-green-300 min-h-[250px] lg:min-h-[300px] rounded-4xl'>
          <span className="absolute -top-20 -right-20 w-[120px] h-[120px] bg-cover bg-[url('/svg/she-star.svg')] mx-2" />
        </div>
        <div className='lg:col-span-2 lg:row-span-1 w-full bg-orange-300 min-h-[250px] lg:min-h-[300px] rounded-4xl'></div>
        <div className='relative lg:col-span-2 lg:row-span-1 w-full bg-purple-300 min-h-[250px] lg:min-h-[300px] rounded-4xl'>
          <span className="absolute -bottom-12 right-[80%] lg:-right-20 w-[120px] h-[120px] bg-cover bg-[url('/svg/he-star.svg')] mx-2" />
        </div>
      </div>
      <Link className='hidden w-fit relative items-center mt-12 mb-20 group gap-4 text-white bg-black-agente px-8 py-4 pr-16 rounded-full hover:scale-105 transition-all duration-500 ease-in-out' href={""} title='Schedulle a Call'>
        {t("cta")}
        <span className='absolute flex items-center justify-center right-2 top-1.5 bg-white/0 group-hover:bg-white w-[45px] h-[80%] rounded-full'>
          <IoArrowUpOutline className='text-pink group-hover:rotate-90 group-hover:text-pink text-2xl rotate-45 transition-all duration-500 ease-in-out' />
        </span>
      </Link>
    </div>
  )
}
