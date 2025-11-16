/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useContact } from '../context/contactContext';

const Carrousel = ({ FAST_DURATION, SLOW_DURATION }) => {
  const [duration, setDuration] = useState(FAST_DURATION);
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [ready, setReady] = useState(false);
  const t = useTranslations("Services")
  const { openPopup } = useContact();

  const controlsRef = useRef(null);

  useEffect(() => {
    setReady(true);
  }, [width]);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (ready) {
      if (mustFinish) {
        controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
          ease: 'linear',
          duration: duration * (1 - xTranslation.get() / finalPosition),
          onComplete: () => {
            setMustFinish(false);
            setRerender(!rerender);
          },
        });
      } else {
        controls = animate(xTranslation, [0, finalPosition], {
          ease: 'linear',
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0,
        });
      }

      controlsRef.current = controls;
    }

    return () => controls?.stop();
  }, [xTranslation, width, duration, rerender, mustFinish, ready]);

  return (
    <motion.div
      ref={ref}
      style={{ x: xTranslation }}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(SLOW_DURATION);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(FAST_DURATION);
      }}
      className='flex gap-4 lg:gap-16 mb-16 lg:mb-0'
    >
      <div onClick={openPopup} className="flex flex-col min-w-[300px] lg:min-w-[500px] lg:max-w-[500px] min-h-[450px] gap-4 w-full h-full shadow-md bg-pink border-white/50 border-2 rounded-[3rem] pt-8 lg:p-8 mt-8 lg:mt-12 px-8 group hover:-translate-y-4 transition-all duration-500 ease-in-out bg-contain lg:bg-cover bg-no-repeat bg-position-[0rem_12rem] lg:bg-position-[center_top_1rem] bg-[url('/images/bg-social-media.webp')]">
        <div className='flex flex-col items-start justify-between w-full'>
          <h3 className='font-nexa text-2xl font-bold mb-2 group-hover:rotate-3 transition-all duration-500 ease-in-out'>
            {t("services1.title")}
          </h3>
          <p className='text-sm lg:text-lg font-nexa'>
            {t("services1.subtitle")}
          </p>
          <div className='flex flex-wrap gap-2 mt-4 w-fit'>
            {t("services1.keyWords")
              .split(',')
              .map((keyword, index) => (
                <span
                  key={index}
                  className='px-4 py-1 bg-white/40 text-black-agente rounded-4xl border-white/50 border-2 text-xs lg:text-sm hover:bg-white transition-all duration-500 ease-in-out'
                >
                  {keyword.trim()}
                </span>
              ))}
          </div>
        </div>
      </div>
      <div onClick={openPopup} className="flex flex-col min-w-[300px] lg:min-w-[500px] lg:max-w-[500px] min-h-[450px] gap-4 w-full h-full shadow-md bg-pink border-white/50 border-2 rounded-[3rem] pt-8 lg:p-8 mt-8 lg:mt-12 px-8 group hover:-translate-y-4 transition-all duration-500 ease-in-out bg-contain lg:bg-cover bg-no-repeat bg-position-[0rem_12rem] lg:bg-position-[center_top_1rem] bg-[url('/images/bg-design.webp')]">
        <div className='flex flex-col items-start justify-between w-full'>
          <h3 className='font-nexa text-2xl font-bold mb-2 group-hover:rotate-3 transition-all duration-500 ease-in-out'>
            {t("services2.title")}
          </h3>
          <p className='text-sm lg:text-lg font-nexa'>
            {t("services2.subtitle")}
          </p>
          <div className='flex flex-wrap gap-2 mt-4 w-fit'>
            {t("services2.keyWords")
              .split(',')
              .map((keyword, index) => (
                <span
                  key={index}
                  className='px-4 py-1 bg-white/40 text-black-agente rounded-4xl border-white/50 border-2 text-xs lg:text-sm hover:bg-white transition-all duration-500 ease-in-out'
                >
                  {keyword.trim()}
                </span>
              ))}
          </div>
        </div>
      </div>
      <div onClick={openPopup} className="flex flex-col min-w-[300px] lg:min-w-[500px] lg:max-w-[500px] min-h-[450px] gap-4 w-full h-full shadow-md bg-pink border-white/50 border-2 rounded-[3rem] pt-8 lg:p-8 mt-8 lg:mt-12 px-8 group hover:-translate-y-4 transition-all duration-500 ease-in-out bg-contain lg:bg-cover bg-no-repeat bg-position-[0rem_12rem] lg:bg-position-[center_top_1rem] bg-[url('/images/bg-video-editing.webp')]">
        <div className='flex flex-col items-start justify-between w-full'>
          <h3 className='font-nexa text-2xl font-bold mb-2 group-hover:rotate-3 transition-all duration-500 ease-in-out'>
            {t("services3.title")}
          </h3>
          <p className='text-sm lg:text-lg font-nexa'>
            {t("services3.subtitle")}
          </p>
          <div className='flex flex-wrap gap-2 mt-4 w-fit'>
            {t("services3.keyWords")
              .split(',')
              .map((keyword, index) => (
                <span
                  key={index}
                  className='px-4 py-1 bg-white/40 text-black-agente rounded-4xl border-white/50 border-2 text-xs lg:text-sm hover:bg-white transition-all duration-500 ease-in-out'
                >
                  {keyword.trim()}
                </span>
              ))}
          </div>
        </div>
      </div>
      <div onClick={openPopup} className="flex flex-col min-w-[300px] lg:min-w-[500px] lg:max-w-[500px] min-h-[450px] gap-4 w-full h-full shadow-md bg-pink border-white/50 border-2 rounded-[3rem] pt-8 lg:p-8 mt-8 lg:mt-12 px-8 group hover:-translate-y-4 transition-all duration-500 ease-in-out bg-contain lg:bg-cover bg-no-repeat bg-position-[0rem_12rem] lg:bg-position-[center_top_1rem] bg-[url('/images/bg-web.webp')]">
        <div className='flex flex-col items-start justify-between w-full'>
          <h3 className='font-nexa text-2xl font-bold mb-2 group-hover:rotate-3 transition-all duration-500 ease-in-out'>
            {t("services4.title")}
          </h3>
          <p className='text-sm lg:text-lg font-nexa'>
            {t("services4.subtitle")}
          </p>
          <div className='flex flex-wrap gap-2 mt-4 w-fit'>
            {t("services4.keyWords")
              .split(',')
              .map((keyword, index) => (
                <span
                  key={index}
                  className='px-4 py-1 bg-white/40 text-black-agente rounded-4xl border-white/50 border-2 text-xs lg:text-sm hover:bg-white transition-all duration-500 ease-in-out'
                >
                  {keyword.trim()}
                </span>
              ))}
          </div>
        </div>
      </div>
      <div onClick={openPopup} className="flex flex-col min-w-[300px] lg:min-w-[500px] lg:max-w-[500px] min-h-[450px] gap-4 w-full h-full shadow-md bg-pink border-white/50 border-2 rounded-[3rem] pt-8 lg:p-8 mt-8 lg:mt-12 px-8 group hover:-translate-y-4 transition-all duration-500 ease-in-out bg-contain lg:bg-cover bg-no-repeat bg-position-[0rem_12rem] lg:bg-position-[center_top_1rem] bg-[url('/images/bg-ux.webp')]">
        <div className='flex flex-col items-start justify-between w-full'>
          <h3 className='font-nexa text-2xl font-bold mb-2 group-hover:rotate-3 transition-all duration-500 ease-in-out'>
            {t("services5.title")}
          </h3>
          <p className='text-sm lg:text-lg font-nexa'>
            {t("services5.subtitle")}
          </p>
          <div className='flex flex-wrap gap-2 mt-4 w-fit'>
            {t("services5.keyWords")
              .split(',')
              .map((keyword, index) => (
                <span
                  key={index}
                  className='px-4 py-1 bg-white/40 text-black-agente rounded-4xl border-white/50 border-2 text-xs lg:text-sm hover:bg-white transition-all duration-500 ease-in-out'
                >
                  {keyword.trim()}
                </span>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesList = () => {
  const FAST_DURATION = 30;
  const SLOW_DURATION = 100;

  return (
    <div className='flex absolute left-0 bottom-8 lg:bottom-24  min-h-[30vh] gap-8 lg:gap-20'>
      <Carrousel FAST_DURATION={FAST_DURATION} SLOW_DURATION={SLOW_DURATION} />
    </div>
  );
};

export default ServicesList;
