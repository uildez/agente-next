"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

export const Topbar = () => {
  const t = useTranslations("Country");
  const t2 = useTranslations("Topbar");

  const [country, setCountry] = useState("...")

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch("https://ipinfo.io/json")
        const data = await res.json()
        setCountry(data.country || "Unknown")
      } catch (error) {
        console.error("Error fetching country:", error)
        setCountry("All the world")
      }
    }

    fetchCountry()
  }, [])

  return (
    <div className='hidden lg:flex items-center justify-between w-full py-4 px-8 lg:px-20' id="home">
      <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4'>
        <span>{t2("title")}</span>
        <div className='flex items-center gap-2 shadow-lg rounded-full p-2 pr-4 bg-white'>
          <Image src={'/svg/globe.svg'} width={30} height={30} alt='Globe' />
          <p className='text-gray-500'>
            {country === 'BR' ? t("brasil") : country}
            {/* {country === "..." ? "Detecting..." : country} */}
          </p>
        </div>
      </div>
      <div className='items-center gap-4 text-gray-500 hidden lg:flex'>
        <Link href="https://instagram.com/agente.studio" target="_blank" title="See more on Instagram" className='relative group'>
          Instagram
          <span className='absolute -bottom-1 h-0.5 w-0 group-hover:w-full left-0 bg-gray-500 transition-all duration-500 ease-in-out' />
        </Link>
        <Link href="https://linkedin.com/company/agente-studio" target="_blank" title="See more on LinkedIn" className='relative group'>
          LinkedIn
          <span className='absolute -bottom-1 h-0.5 w-0 group-hover:w-full left-0 bg-gray-500 transition-all duration-500 ease-in-out' />
        </Link>
        <Link href="https://behance.net/agente" target="_blank" title="See more on Behance" className='relative group'>
          Behance
          <span className='absolute -bottom-1 h-0.5 w-0 group-hover:w-full left-0 bg-gray-500 transition-all duration-500 ease-in-out' />
        </Link>
      </div>
    </div>
  )
}
