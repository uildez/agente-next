"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Preloader({ locale }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 4000); // dura 4s
        return () => clearTimeout(timer);
    }, []);

    const t = useTranslations("Preloader")

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 bg-white flex items-center justify-center z-50 overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1.2, delay: 0.5 } }}
                >
                    {/* Luz amarela */}
                    <motion.div
                        className="absolute w-64 h-64 rounded-full bg-yellow blur-[80px]"
                        initial={{ top: "-10%", right: "-10%", scale: 0 }}
                        animate={{
                            top: "50%",
                            right: "50%",
                            scale: 1.2,
                            x: "50%",
                            y: "-50%",
                            transition: {
                                duration: 2,
                                ease: [0.6, 0.01, -0.05, 0.95],
                            },
                        }}
                    />

                    {/* Luz rosa */}
                    <motion.div
                        className="absolute w-64 h-64 rounded-full bg-pink blur-[80px]"
                        initial={{ bottom: "-10%", left: "-10%", scale: 0 }}
                        animate={{
                            bottom: "50%",
                            left: "50%",
                            scale: 1.2,
                            x: "-50%",
                            y: "50%",
                            transition: {
                                duration: 2,
                                ease: [0.6, 0.01, -0.05, 0.95],
                            },
                        }}
                    />

                    {/* Flash na colisão */}
                    <motion.div
                        className="absolute w-full h-full bg-white"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            transition: { duration: 0.5, delay: 2 },
                        }}
                    />

                    {/* Texto central */}
                    <motion.h1
                        className="text-black-agente text-3xl md:text-4xl font-semibold text-center relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                            opacity: [0, 1],
                            y: [30, 0],
                            transition: { duration: 1.2, delay: 2.4 },
                        }}
                    >
                        {t.rich('text', {
                            br: () => <br />,
                            span: (chunks) => <span className='font-stix italic'>{chunks}</span>
                        })}
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
