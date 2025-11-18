/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useRouter } from "next/navigation"
import { useEffect, useState, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from 'framer-motion';
import { depositions } from '../data/depositions';
import { depositionsEn } from '../data/depositionsEn';
import Image from "next/image";

const Carrousel = ({ items, FAST_DURATION, SLOW_DURATION }) => {
  const [duration, setDuration] = useState(FAST_DURATION);
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [ready, setReady] = useState(false);

  const validItems = Array.isArray(items) ? items : [];

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
      {[...validItems, ...validItems].map((item, idx) => (
        <div key={idx}>
          <div className='flex flex-col min-w-[350px] lg:min-w-[500px] gap-4 w-full h-full shadow-md bg-white border-yellow border-4 rounded-[3rem] pt-8 lg:p-8 mt-8 lg:mt-12 px-8'>
            <div className='flex flex-col lg:flex-row items-start justify-between w-full'>
              <div className="flex items-center gap-4">
                <Image src={item.foto} width={400} height={400} alt={`Photo ${item.nome}`} title={`Photo ${item.nome}`} className="w-[50px] h-[50px] rounded-full bg-pink" />
                <div className="flex flex-col items-start">
                  <p className='text-black-agente font-nexa text-xl'>
                    {item.nome}
                  </p>
                  <p className='text-gray-500 font-nexa'>
                    {item.cargo}
                  </p>
                </div>
              </div>
            </div>
            <p className='text-sm lg:text-xl font-nexa font-bold'>
              {item.titulo}
            </p>
            <p className='font-medium text-sm text-gray transition-opacity ease-in-out cursor-pointer'>
              {item.depoimento}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

const Depositions = () => {
  const FAST_DURATION = 100;
  const SLOW_DURATION = 150;
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? "en" : "pt"

  const currentDepositions = t === 'pt' ? depositions : depositionsEn;

  return (
    <div className='flex relative min-h-[30vh] gap-8 lg:gap-20'>
      <Carrousel items={currentDepositions} FAST_DURATION={FAST_DURATION} SLOW_DURATION={SLOW_DURATION} />
    </div>
  );
};

export default Depositions;
