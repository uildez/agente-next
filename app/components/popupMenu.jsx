'use client';

import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion';
import { HiBars2 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import { useContact } from '../context/contactContext';

const itemVariants = {
    closed: {
        opacity: 0,
        y: -20,
    },
    open: {
        opacity: 1,
        y: 0,
    },
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
        },
    },
    open: {
        transition: {
            staggerChildren: 0.3,
            staggerDirection: 1,
        },
    },
};
export const PopupMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const t = useTranslations("Menu");
    const { openPopup } = useContact();

    return (

        <div className="fixed w-full flex items-end justify-end top-0 right-0 h-16 lg:h-[100px] bg-transparent z-40 lg:hidden">
            <div className="flex w-full h-full items-end pr-4 justify-end">
                <button className="block lg:hidden bg-black-agente rounded-4xl p-1.5" onClick={() => setOpenMenu((prev) => !prev)}>
                    {openMenu ? <CgClose className="text-4xl text-white" /> : <HiBars2 className="text-4xl text-white" />}
                </button>
            </div>
            <AnimatePresence>
                {openMenu && (
                    <motion.aside
                        initial={{ width: '0%', height: 0, opacity: 0 }}
                        animate={{ width: '100%', height: "100%", opacity: 1 }}
                        exit={{ width: '100%', height: 0, transition: { delay: 0.3, duration: 0.5 } }}
                        className="fixed top-0 right-0 px-2 pt-2 z-20"
                    >
                        <motion.div
                            className="flex relative flex-col items-center bg-pink shadow-2xl rounded-2xl pt-32 gap-8 px-8 justify-start pb-20"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                        >
                            <button className="absolute flex items-center justify-center bg-black-agente text-white rounded-full font-akina uppercase right-4 top-4 lg:hidden text-2xl h-[50px] w-[50px]" onClick={() => setOpenMenu((prev) => !prev)}>
                                <IoCloseSharp />
                            </button>

                            <motion.a
                                onClick={() => setOpenMenu(false)}
                                href={"#about-us"}
                                title='About Us Link'
                                whileHover={{ scale: 1.1 }}
                                variants={itemVariants}
                                className="text-3xl w-full text-center px-6 text-black rounded-[10px] font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500"
                            >
                                {t("who")}
                            </motion.a>
                            <motion.a
                                onClick={() => setOpenMenu(false)}
                                href={"#services"}
                                title='Services Link'
                                whileHover={{ scale: 1.1 }}
                                variants={itemVariants}
                                className="text-3xl w-full text-center px-6 text-black rounded-[10px] font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500"
                            >
                                {t("what")}
                            </motion.a>
                            <motion.a
                                onClick={() => setOpenMenu(false)}
                                href={"#why-us"}
                                title='Why Us Link'
                                whileHover={{ scale: 1.1 }}
                                variants={itemVariants}
                                className="text-3xl w-full text-center px-6 text-black rounded-[10px] font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500"
                            >
                                {t("why")}
                            </motion.a>
                            <motion.div
                                onClick={openPopup}
                                whileHover={{ scale: 1.1 }}
                                variants={itemVariants}
                                className="text-3xl w-full text-center px-6 text-black rounded-[10px] font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500"
                            >
                                {t("contact")}
                            </motion.div>
                            <motion.a
                                onClick={() => setOpenMenu(false)}
                                href={"#portfolio"}
                                title='Portfolio Link'
                                whileHover={{ scale: 1.1 }}
                                variants={itemVariants}
                                className="text-3xl w-full text-center px-6 text-black rounded-[10px] font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500"
                            >
                                {t("portfolio")}
                            </motion.a>
                            <motion.a
                                onClick={() => setOpenMenu(false)}
                                href={"#home"}
                                title='Home Link'
                                whileHover={{ scale: 1.1 }}
                                variants={itemVariants}
                                className="text-3xl w-full text-center px-6 text-black rounded-[10px] font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500"
                            >
                                {t("home")}
                            </motion.a>
                            <motion.div variants={itemVariants} className='flex items-center mx-auto gap-4'>
                                <a href='https://www.instagram.com/agente.studio/' target="_blank" title='Check your Instagram' className='flex items-center justify-center rounded-full bg-black-agente text-white hover:-translate-y-2 hover:scale-105 w-[50px] h-[50px] transition-all duration-500 ease-in-out'>
                                    <FaInstagram className="text-2xl" />
                                </a>
                                <a href='https://www.behance.net/agentestudio' target="_blank" title='Check your Behance' className='flex items-center justify-center rounded-full bg-black-agente text-white hover:-translate-y-2 hover:scale-105 w-[50px] h-[50px] transition-all duration-500 ease-in-out'>
                                    <FaBehance className="text-2xl" />
                                </a>
                                <a href='https://linkedin.com/company/agente-studio' target="_blank" title='Check Your Linkedin' className='flex items-center justify-center rounded-full bg-black-agente text-white hover:-translate-y-2 hover:scale-105 w-[50px] h-[50px] transition-all duration-500 ease-in-out'>
                                    <FaLinkedinIn className="text-2xl" />
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </div>
    )
}