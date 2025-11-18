'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPopup({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    investment: '',
    description: ''
  });

  const t = useTranslations('Budget');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.company) {
      alert(t('fillFields'));
      return;
    }

    setLoading(true);

    emailjs
      .sendForm('service_ib44n4w', 'template_6fy92nl', formRef.current, 'OrfK3ThN4h7Q13MAV')
      .then(
        () => {
          setLoading(false);
          setIsSubmitted(true);
          setFormData({
            name: '',
            phone: '',
            company: '',
            email: '',
            description: ''
          });
        },
        (error) => {
          console.log(error);
          setLoading(false);
          alert('Erro ao enviar mensagem.');
        }
      );
  };

  // fecha o popup ao apertar ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Conteúdo do popup */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-[95%] lg:w-[70%] max-h-[90vh] bg-white rounded-3xl shadow-2xl p-6 lg:p-10"
          >
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 text-3xl bg-pink text-white w-[60px] h-[60px] p-2 rounded-full hover:scale-105 hover:rotate-45 cursor-pointer transition-all duration-500 ease-in-out"
            >
              ✕
            </button>

            <div className="flex flex-col items-center w-full font-nexa">
              <div className="flex flex-col lg:flex-row w-full gap-6">
                {/* Lado esquerdo */}
                <div className='flex flex-col lg:items-start items-center gap-4 w-full lg:w-2/5'>
                  <h2 className='text-xl lg:text-3xl font-bold lg:text-left text-center text-black pt-4 lg:pt-0'>{t('title')}</h2>
                  <p className='text-black-agente lg:text-left text-center text-lg'>{t('subtitle')}</p>

                  <div className='flex gap-4'>
                    <Link href="https://wa.me/5583996504081" target='_blank' className='p-3 bg-pink text-white rounded-xl text-2xl hover:scale-105 transition-all'><FaWhatsapp /></Link>
                    <Link href="mailto:contato@agente.studio" title="Get in touch with Email" className='p-3 bg-pink text-white rounded-xl text-2xl hover:scale-105 transition-all'><FaEnvelope /></Link>
                    <Link href="https://linkedin.com/company/agente-studio" target='_blank' title="See more on LinkedIn" className='p-3 bg-pink text-white rounded-xl text-2xl hover:scale-105 transition-all'><FaLinkedinIn /></Link>
                  </div>
                </div>

                {/* Lado direito */}
                <div className='w-full lg:w-3/5 rounded-3xl'>
                  {isSubmitted ? (
                    <div className='flex flex-col relative items-start justify-center bg-pink h-full p-8 rounded-3xl'>
                      <Image className="absolute w-[130px] lg:w-[200px] rotate-20 -right-12 she-float" src={`/images/mascots/she-star.webp`} title='3D Ayalla Mascot' alt="3D Ayalla Mascot" width={500} height={500} />
                      <div className='w-full lg:w-3/5 pr-20'>
                        <h3 className='text-2xl text-white lg:text-left font-extrabold'>
                          {t('sendInfo')}
                        </h3>
                        <p className='text-xl lg:text-left text-white'>
                          {t('sendSubtitle')}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={sendEmail} className='w-full flex flex-col gap-4'>
                      <input name="name" placeholder={t('name')} value={formData.name} onChange={handleChange} className='px-4 py-3 rounded-lg border border-pink focus:outline-none' />
                      <input name="email" placeholder={t('email')} value={formData.email} onChange={handleChange} className='px-4 py-3 rounded-lg border border-pink focus:outline-none' />
                      <input name="phone" placeholder={t('whatsapp')} value={formData.phone} onChange={handleChange} className='px-4 py-3 rounded-lg border border-pink focus:outline-none' />
                      <input name="company" placeholder={t('company')} value={formData.company} onChange={handleChange} className='px-4 py-3 rounded-lg border border-pink focus:outline-none' />
                      <textarea name="description" placeholder={t('projectPlaceholder')} value={formData.description} onChange={handleChange} className='px-4 py-3 rounded-lg border border-pink focus:outline-none' />
                      <motion.button type="submit" className='bg-black text-white rounded-lg py-3 hover:scale-105 transition-all' disabled={loading}>
                        {loading ? t('sendingButton') : t('sendButton')}
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
