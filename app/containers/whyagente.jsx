"use client"

import { useTranslations } from "next-intl"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export const Whyagente = () => {
  const t = useTranslations("Whyus")

  const pathRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: pathRef,
    offset: ["start end", "end start"],
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div
      ref={pathRef}
      id="why-us"
      className="relative grid lg:grid-rows-3 gap-12 w-full pt-20 px-8 lg:px-20 2xl:px-40 overflow-hidden"
    >
      <motion.div
        className="justify-self-start flex flex-col items-start justify-center relative gap-4 rounded-3xl p-8 lg:pr-60 bg-pink text-white h-auto lg:h-[350px] w-full lg:w-2/4 z-10 group"
        initial={{ scale: 0, opacity: 0, rotateX: -60 }}
        whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ type: "spring", animationDelay: 1, stiffness: 300, damping: 25, duration: 0.5, ease: "easeInOut" }}
      >
        <h3 className="font-bold text-5xl text-left">
          {t.rich('topic1.title', {
            span: (chunks) => <span className='font-stix italic'>{chunks}</span>
          })}
        </h3>
        <p className="font-nexa font-light">{t("topic1.subtitle")}</p>
        <Image className="absolute w-[300px] -right-20 he-float group-hover:scale-110 transition-all duration-500 ease-in-out" src={"/images/mascots/he-money.webp"} alt="3D Uildes Mascot" width={500} height={500} />
      </motion.div>

      <motion.div
        className="justify-self-end flex flex-col items-end justify-center relative gap-4 rounded-3xl p-8 lg:pl-60 bg-yellow text-black-agente h-auto lg:h-[350px] w-full lg:w-2/4 z-10 group"
        initial={{ scale: 0, opacity: 0, rotateX: -60 }}
        whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ type: "spring", animationDelay: 1, stiffness: 300, damping: 25, duration: 0.5, ease: "easeInOut" }}
      >
        <h3 className="font-bold text-5xl text-right">
          {t.rich('topic2.title', {
            span: (chunks) => <span className='font-stix italic'>{chunks}</span>
          })}
        </h3>
        <p className="font-nexa font-light text-right">{t("topic2.subtitle")}</p>
        <Image className="absolute w-[300px] -left-20 he-float group-hover:scale-110 transition-all duration-500 ease-in-out" src={"/images/mascots/she-talk.webp"} alt="3D Uildes Mascot" width={500} height={500} />
      </motion.div>

      <motion.div
        className="justify-self-start flex flex-col items-start justify-center relative gap-4 rounded-3xl p-8 lg:pr-60 bg-pink text-white h-auto lg:h-[350px] w-full lg:w-2/4 z-10 group"
        initial={{ scale: 0, opacity: 0, rotateX: -60 }}
        whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ type: "spring", animationDelay: 1, stiffness: 300, damping: 25, duration: 0.5, ease: "easeInOut" }}
      >
        <h3 className="font-bold text-5xl text-left">
          {t.rich('topic3.title', {
            span: (chunks) => <span className='font-stix italic'>{chunks}</span>
          })}
        </h3>
        <p className="font-nexa font-light">{t("topic3.subtitle")}</p>
        <Image className="absolute w-[300px] -right-20 he-float group-hover:scale-110 transition-all duration-500 ease-in-out" src={"/images/quality.webp"} alt="3D Uildes Mascot" width={500} height={500} />
      </motion.div>

      {/* SVG */}
      <svg className="absolute bottom-0" viewBox="0 0 1917 998" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          style={{
            pathLength,
            pathOffset: 1,
          }}
          d="M-8.71119 17.5H988.923C1118.71 17.5 1223.92 122.713 1223.92 252.5V274.683C1223.92 404.47 1118.71 509.683 988.923 509.683H640.071C510.284 509.683 405.071 615.098 405.071 744.885C405.071 874.672 510.284 980.087 640.071 980.087H1916.46"
          stroke="#D9D9D9"
          strokeWidth="35"
        />
      </svg>
    </div>
  )
}
