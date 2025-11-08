"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { IoArrowUpOutline } from 'react-icons/io5'
import { useTranslations } from 'use-intl'

export const Projects = () => {
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
    <div className="flex flex-col items-center overflow-hidden lg:overflow-visible w-full" id="portfolio">
      <div className="relative grid grid-cols-1 lg:grid-cols-3 grid-rows-4 lg:grid-rows-[auto_1fr_1fr] w-full h-full gap-8 pt-8 lg:pt-20 px-8 lg:px-20 2xl:px-40 overflow-hidden">
        <motion.span
          ref={ref}
          style={{ rotate }}
          className="absolute top-[25vw] -left-8 w-[120px] h-[120px] bg-cover bg-[url('/svg/she-star.svg')]"
        />

        {/* --- Seção 1 --- */}
        <div className="relative lg:col-span-full row-span-1 w-full min-h-[250px] lg:min-h-[600px] rounded-4xl overflow-hidden">
          <video
            preload="none"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/Mk-Apuppa.mp4" type="video/mp4" />
          </video>
        </div>

        {/* --- Seção 2 --- */}
        <div className="relative lg:col-span-1 lg:row-span-2 w-full min-h-[250px] lg:min-h-[500px] rounded-4xl overflow-hidden">
          <video
            preload="none"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/Mk-Dclegal.mp4" type="video/mp4" />
          </video>
        </div>

        {/* --- Seção 3 --- */}
        <div className="relative lg:col-span-2 lg:row-span-1 w-full min-h-[250px] lg:min-h-[500px] rounded-4xl overflow-hidden">
          <video
            preload="none"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/Mk-Apuppa.mp4" type="video/mp4" />
          </video>
        </div>

        {/* --- Seção 4 --- */}
        <div className="relative lg:col-span-2 lg:row-span-1 w-full min-h-[250px] lg:min-h-[500px] rounded-4xl overflow-hidden">
          <video
            preload="none"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/Mk-Apuppa.mp4" type="video/mp4" />
          </video>
        </div>
        <motion.span
          ref={refShe}
          style={{ rotate: rotateShe }}
          className="absolute bottom-12 right-[80%] lg:-right-8 w-[120px] h-[120px] bg-cover bg-[url('/svg/he-star.svg')]"
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
