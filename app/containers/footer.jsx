"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FaBehance, FaLinkedinIn } from 'react-icons/fa'
import { IoArrowUpOutline, IoLogoInstagram } from 'react-icons/io5'
import { useContact } from '../context/contactContext'

export const Footer = () => {
  const t = useTranslations("Footer");
    const { openPopup } = useContact();

  return (
    <div className='flex flex-col rounded-4xl p-8 w-full px-8 lg:px-20 2xl:px-40 font-nexa'>
      <div className='flex flex-col relative bg-pink rounded-4xl px-8 lg:px-20 pt-20 pb-8 w-full'>
        <Image src="/images/mascots/she-and-he-high.webp" title={`A Gente Mascot`} className='absolute -top-16 left-12 lg:-left-8 w-[250px] lg:w-[300px] 2xl:w-[400px]' alt="A Gente Mascot" width="2000" height="2000" />
        <div className='flex items-center mt-[100px] lg:mt-0 lg:ml-[200px] 2xl:ml-[400px]'>
          <div className='flex flex-col items-start gap-4'>
            <h2 className='text-2xl lg:text-4xl 2xl:text-5xl text-center lg:text-left font-bold w-full lg:w-3/5 text-white'>
              {t.rich('title', {
                span: (chunks) => <span className='font-stix italic'>{chunks}</span>
              })}
            </h2>
            <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-8 lg:mb-12'>
              <div onClick={openPopup} className='flex relative items-center justify-center w-full lg:w-fit group lg:gap-4 text-white text-center lg:text-left cursor-pointer bg-black-agente px-0 lg:px-8 py-4 pr-0 lg:pr-16 rounded-full hover:scale-105 transition-all duration-500 ease-in-out'>
                {t("cta")}
                <span className='absolute hidden lg:flex items-center justify-center right-2 top-1.5 bg-white/0 group-hover:bg-white w-[45px] h-[80%] rounded-full'>
                  <IoArrowUpOutline className='text-pink group-hover:rotate-90 group-hover:text-pink text-2xl rotate-45 transition-all duration-500 ease-in-out' />
                </span>
              </div>
              <p className='text-white text-center'>{t("reason")}</p>
            </div>
          </div>
        </div>
        
        <span className='h-px w-full bg-white mb-4' />

        <div className='flex flex-col-reverse lg:flex-row items-center gap-8 justify-between w-full'>
          <div className='flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-8 text-white font-nexa'>
            <p className='text-center'>{t("end")}</p>
            {/* <Link href="#" title="Acess your privacy policy" className='relative group font-bold'>
              {t("pagePolice")}
              <span className='absolute -bottom-1 h-0.5 w-0 group-hover:w-full left-0 bg-white transition-all duration-500 ease-in-out' />
            </Link> */}
          </div>
          <div className='flex gap-4'>
            <Link href="https://www.instagram.com/agente.studio/" target="_blank" title="Check your Instagram" className='border-2 p-2 rounded-xl border-white group font-bold text-white text-3xl hover:scale-105 hover:rotate-6 transition-all duration-500 ease-in-out'>
              <IoLogoInstagram />
            </Link>
            <Link href="https://www.behance.net/agentestudio" target="_blank" title="Check your Behance" className='border-2 p-2 rounded-xl border-white group font-bold text-white text-3xl hover:scale-105 hover:rotate-6 transition-all duration-500 ease-in-out'>
              <FaBehance />
            </Link>
            <Link href="https://linkedin.com/company/agente-studio" target="_blank" title="Check your Linkedin" className='border-2 p-2 rounded-xl border-white group font-bold text-white text-3xl hover:scale-105 hover:rotate-6 transition-all duration-500 ease-in-out'>
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
