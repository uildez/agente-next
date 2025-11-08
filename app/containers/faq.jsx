"use client"

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { IoChevronDownSharp } from 'react-icons/io5'
import { useTranslations } from 'next-intl'

export const Faq = () => {
  const t = useTranslations("Questions")

  return (
    <div className='flex flex-col items-center justify-between w-full lg:w-2/4 py-12 lg:py-20 px-8'>
      <div className='flex w-fit items-center gap-2 py-2 px-6 bg-white rounded-full shadow-lg'>
        <span className='relative w-2.5 h-2.5'>
          <span className='absolute w-2.5 h-2.5 rounded-full bg-yellow animate-ping' />
          <span className='absolute top-px right-px w-2 h-2 rounded-full bg-yellow' />
        </span>
        <p className='text-black-agente font-nexa font-light text-lg'>{t("pretitle")}</p>
      </div>

      <h2 className='text-2xl lg:text-5xl w-3/4 lg:w-full pt-8 font-bold pb-8 text-center'>{t("title")}</h2>

      <Disclosure>
        <DisclosureButton className="group flex items-center justify-between px-4 py-4 lg:py-8 gap-2 w-full border-gray-300/50 border-b-2 text-lg cursor-pointer group hover:border-pink transition-all duration-500 ease-in-out">
          {t("question.1.question")}
          <IoChevronDownSharp className="group-data-open:rotate-180 group-hover:bg-pink group-hover:text-white w-[30px] h-[30px] p-2 rounded-4xl transition-all duration-500 ease-in-out" />
        </DisclosureButton>
        <DisclosurePanel className="bg-pink p-8 rounded-3xl mt-4 text-white w-full">
          {t("question.1.anwser")}
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton className="group flex items-center justify-between px-4 py-4 lg:py-8 gap-2 w-full border-gray-300/50 border-b-2 text-lg cursor-pointer group hover:border-pink transition-all duration-500 ease-in-out">
          {t("question.2.question")}
          <IoChevronDownSharp className="group-data-open:rotate-180 group-hover:bg-pink group-hover:text-white w-[30px] h-[30px] p-2 rounded-4xl transition-all duration-500 ease-in-out" />
        </DisclosureButton>
        <DisclosurePanel className="bg-pink p-8 rounded-3xl mt-4 text-white w-full">
          {t("question.2.anwser")}
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton className="group flex items-center justify-between px-4 py-4 lg:py-8 gap-2 w-full border-gray-300/50 border-b-2 text-lg cursor-pointer group hover:border-pink transition-all duration-500 ease-in-out">
          {t("question.3.question")}
          <IoChevronDownSharp className="group-data-open:rotate-180 group-hover:bg-pink group-hover:text-white w-[30px] h-[30px] p-2 rounded-4xl transition-all duration-500 ease-in-out" />
        </DisclosureButton>
        <DisclosurePanel className="bg-pink p-8 rounded-3xl mt-4 text-white w-full">
          {t("question.3.anwser")}
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton className="group flex items-center justify-between px-4 py-4 lg:py-8 gap-2 w-full border-gray-300/50 border-b-2 text-lg cursor-pointer group hover:border-pink transition-all duration-500 ease-in-out">
          {t("question.4.question")}
          <IoChevronDownSharp className="group-data-open:rotate-180 group-hover:bg-pink group-hover:text-white w-[30px] h-[30px] p-2 rounded-4xl transition-all duration-500 ease-in-out" />
        </DisclosureButton>
        <DisclosurePanel className="bg-pink p-8 rounded-3xl mt-4 text-white w-full">
          {t("question.4.anwser")}
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton className="group flex items-center justify-between px-4 py-4 lg:py-8 gap-2 w-full border-gray-300/50 border-b-2 text-lg cursor-pointer group hover:border-pink transition-all duration-500 ease-in-out">
          {t("question.5.question")}
          <IoChevronDownSharp className="group-data-open:rotate-180 group-hover:bg-pink group-hover:text-white w-[30px] h-[30px] p-2 rounded-4xl transition-all duration-500 ease-in-out" />
        </DisclosureButton>
        <DisclosurePanel className="bg-pink p-8 rounded-3xl mt-4 text-white w-full">
          {t("question.5.anwser")}
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}