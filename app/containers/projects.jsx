"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { IoArrowUpOutline } from 'react-icons/io5'
import { useTranslations } from 'use-intl'

export const Projects = ({ onMouseEnter, onMouseLeave }) => {
  const t = useTranslations("Projects")

  const ref = useRef(null)
  const refShe = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "80% start"],
  })

  const scrollYProgressShe = useScroll({
    target: refShe,
    offset: ["start end", "80% start"],
  }).scrollYProgress

  const rotate = useTransform(scrollYProgress, [0, 1], ["90deg", "0deg"])
  const rotateShe = useTransform(scrollYProgressShe, [0, 1], ["150deg", "0deg"])

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex flex-col items-center overflow-hidden lg:overflow-visible w-full" id="portfolio"
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-4 grid-rows-4 lg:grid-rows-[auto_1fr_1fr] w-full h-full gap-8 pt-8 lg:pt-20 px-8 lg:px-20 2xl:px-40 overflow-hidden">
        <motion.span
          ref={ref}
          style={{ rotate }}
          className="absolute top-40 lg:top-[25vw] -left-8 w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] 2xl:w-[200px] 2xl:h-[200px] z-20 bg-cover bg-[url('/svg/she-star.svg')]"
        />

        <div className="relative lg:col-span-full row-span-1 w-full min-h-[500px] lg:min-h-[800px] rounded-4xl p-8 overflow-hidden bg-black">
          <video
            preload="none"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-contain object-bottom lg:object-right"
          >
            <source src="/videos/Mk-Apuppa.mp4" type="video/mp4" />
          </video>
          <div className='absolute flex flex-col h-full w-full lg:w-2/5 p-2 lg:p-8 gap-2 lg:gap-6 rounded-4xl text-white z-40'>
            <h3 className='text-xl lg:text-4xl font-bold'>
              {t.rich('project1.title', {
                span: (chunks) => <span className='font-stix italic'>{chunks}</span>
              })}</h3>
            <p className='w-3/4 text-base lg:text-xl'>{t("project1.subtitle")}</p>
            <Link href={"https://apuppa.com.br"} title='Website Apuppa' target='_blank'
              className='flex relative w-fit border-2 border-white items-center group gap-4 text-white bg-black-agente px-8 py-4 pr-16 rounded-full hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer'
            >
              {t("project1.button")}
              <span className='absolute flex items-center justify-center right-2 top-1.5 bg-white/0 group-hover:bg-white w-[45px] h-[80%] rounded-full'>
                <IoArrowUpOutline className='text-pink group-hover:rotate-90 text-2xl rotate-45 transition-all duration-500 ease-in-out' />
              </span>
            </Link>
          </div>
          <span className='absolute z-10 top-0 left-0 w-full lg:w-2/4 h-[50%] lg:h-full bg-linear-to-b lg:bg-linear-to-r via-black-agente via-90% to-black-agente/0' />
        </div>

        <div className="relative lg:col-span-2 lg:row-span-2 w-full min-h-[500px] lg:min-h-[500px] rounded-4xl overflow-hidden group px-20 lg:p-0">
          <video
            preload="none"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full lg:object-cover object-bottom object-contain"
          >
            <source src="/videos/Mk-EACoaching.mp4" type="video/mp4" />
          </video>
          <span className='lg:hidden absolute z-10 top-0 left-0 w-full lg:w-2/4 h-[70%] lg:h-full bg-linear-to-b lg:bg-transparent from-[#fe5c02] via-[#fe5c02] via-90% to-black-[#fe5c02]' />
          <div className='absolute left-8 lg:left-8 lg:bottom-8 bg-white/0 lg:bg-white/20 lg:backdrop-blur-3xl lg:border-2 lg:border-white flex flex-col w-[80%] pt-12 lg:w-3/5 p-2 lg:p-6 gap-2 lg:gap-2 rounded-4xl text-white z-40 lg:translate-y-80 group-hover:translate-y-0 transition-all duration-500 ease-in-out'>
            <h3 className='text-xl lg:text-2xl font-bold'>
              {t.rich('project3.title', {
                span: (chunks) => <span className='font-stix italic'>{chunks}</span>
              })}
            </h3>
            <p className='w-full text-base lg:text-base'>{t("project3.subtitle")}</p>
            <Link href={"https://eacoaching.pt/"} title='Website EaCoaching' target='_blank'
              className='flex relative w-fit border-2 border-white items-center group gap-4 text-white bg-black-agente px-8 py-4 pr-16 rounded-full hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer'
            >
              {t("project3.button")}
              <span className='absolute flex items-center justify-center right-2 top-1.5 bg-white/0 group-hover:bg-white w-[45px] h-[80%] rounded-full'>
                <IoArrowUpOutline className='text-pink group-hover:rotate-90 text-2xl rotate-45 transition-all duration-500 ease-in-out' />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-2 lg:row-span-2 w-full min-h-[500px] lg:min-h-[500px] rounded-4xl overflow-hidden group px-20 lg:p-0">
          <video
            preload="none"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full lg:object-cover object-bottom object-contain"
          >
            <source src="/videos/Mk-Cupcabana.mp4" type="video/mp4" />
          </video>
          <span className='lg:hidden absolute z-10 top-0 left-0 w-full lg:w-2/4 h-[70%] lg:h-full bg-linear-to-b lg:bg-transparent from-[#7f409c] via-[#7f409c] via-90% to-black-[#7f409c]' />
          <div className='absolute left-8 lg:left-8 lg:bottom-8 bg-white/0 lg:bg-white/20 lg:backdrop-blur-3xl lg:border-2 lg:border-white flex flex-col w-[80%] pt-12 lg:w-3/5 p-2 lg:p-6 gap-2 lg:gap-2 rounded-4xl text-white z-40 lg:translate-y-80 group-hover:translate-y-0 transition-all duration-500 ease-in-out'>
            <h3 className='text-xl lg:text-2xl font-bold'>
              {t.rich('project2.title', {
                span: (chunks) => <span className='font-stix italic'>{chunks}</span>
              })}
            </h3>
            <p className='w-full text-base lg:text-base'>{t("project2.subtitle")}</p>
            <Link href={"https://cupcabanagourmet.com"} title='Website CupCabana' target='_blank'
              className='flex relative w-fit border-2 border-white items-center group gap-4 text-black-agente bg-white px-8 py-4 pr-16 rounded-full hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer'
            >
              {t("project2.button")}
              <span className='absolute flex items-center justify-center right-2 top-1.5 bg-white/0 group-hover:bg-white w-[45px] h-[80%] rounded-full'>
                <IoArrowUpOutline className='text-pink group-hover:rotate-90 text-2xl rotate-45 transition-all duration-500 ease-in-out' />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-full row-span-1 w-full min-h-[500px] lg:min-h-[500px] rounded-4xl p-8 bg-black-agente overflow-hidden bg-no-repeat bg-size-[800px] lg:bg-cover bg-bottom lg:bg-right bg-[url('/images/project-jojo.webp')]">
          <div className='absolute flex flex-col h-full w-full lg:w-2/5 p-2 lg:p-8 gap-2 lg:gap-6 rounded-4xl text-white z-40'>
            <h3 className='text-xl lg:text-4xl font-bold'>
              {t.rich('project4.title', {
                span: (chunks) => <span className='font-stix italic'>{chunks}</span>
              })}</h3>
            <p className='w-3/4 text-base lg:text-xl'>{t("project4.subtitle")}</p>
            <Link href={"https://www.instagram.com/jojo.nailsart/"} title='Jojo Nails Art Profile' target='_blank'
              className='flex relative w-fit border-2 border-white items-center group gap-4 text-white bg-black-agente px-8 py-4 pr-16 rounded-full hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer'
            >
              {t("project4.button")}
              <span className='absolute flex items-center justify-center right-2 top-1.5 bg-white/0 group-hover:bg-white w-[45px] h-[80%] rounded-full'>
                <IoArrowUpOutline className='text-pink group-hover:rotate-90 text-2xl rotate-45 transition-all duration-500 ease-in-out' />
              </span>
            </Link>
          </div>
        </div>
        <motion.span
          ref={refShe}
          style={{ rotate: rotateShe }}
          className="absolute bottom-12 -right-12 lg:-right-8 w-[120px] h-[120px] 2xl:w-[200px] 2xl:h-[200px] bg-cover bg-[url('/svg/he-star.svg')]"
        />
      </div>

      {/* --- CTA --- */}
      <Link
        className="hidden w-fit relative items-center mt-12 mb-20 group gap-4 text-white bg-black-agente px-8 py-4 pr-16 rounded-full hover:scale-105 transition-all duration-500 ease-in-out"
        href=""
        title="Schedule a Call"
      >
        {t("cta")}
        <span className="absolute flex items-center justify-center right-2 top-1.5 bg-white/0 group-hover:bg-white w-[45px] h-[80%] rounded-full">
          <IoArrowUpOutline className="text-pink group-hover:rotate-90 group-hover:text-pink text-2xl rotate-45 transition-all duration-500 ease-in-out" />
        </span>
      </Link>
    </div>
  )
}
