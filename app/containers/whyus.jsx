"use client"

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScroll, useTransform, useMotionTemplate, motion } from 'framer-motion';
import { useLocale } from "next-intl";
import Image from "next/image";

const ContentLine = ({ content }) => {
  const contentRef = useRef();
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["end center", "start start"]
  });

  const scrollValue = useTransform(scrollYProgress, [0, 0.15], ["100%", "0%"]);
  const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

  return (
    <span
      className="text-container"
      ref={contentRef}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        textAlign: 'center'
      }}
    >
      <motion.span
        style={{
          clipPath: clipPathVal,
          position: 'absolute',
          top: 0,
          left: 0,
          whiteSpace: 'nowrap',
          width: '100%',
          textAlign: 'center'
        }}
        className="highlighted-text"
        data-text={content}
      >
        {content}
      </motion.span>
      <span className="static-text opacity-20 block text-center">{content}</span>
    </span>
  );
};

const ScrollText = ({ content }) => {
  return (
    <div className="outer flex justify-center items-center">
      <div className="inner">
        <p className="text-center">
          {content.map((item, index) => (
            <ContentLine key={index} content={item} />
          ))}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  const sheStarRef = useRef(null);
  const heStarRef = useRef(null);
  const locale = useLocale();

  const ref = useRef(null);
  const refShe = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "80% start"],
  });

  const scrollYProgressShe = useScroll({
    target: refShe,
    offset: ["start end", "80% start"],
  }).scrollYProgress;

  const x = useTransform(scrollYProgress, [0, 1], ["-100px", "0px"]);
  const xShe = useTransform(scrollYProgressShe, [0, 1], ["100px", "0px"]);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sheStarTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sheStarRef.current,
        start: 'bottom bottom',
        end: 'top top',
        scrub: true,
      }
    });

    const heStarTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heStarRef.current,
        start: 'bottom bottom',
        end: 'top top',
        scrub: true,
      }
    });

    sheStarTimeline.to(sheStarRef.current, { rotation: 360 });
    heStarTimeline.to(heStarRef.current, { rotation: -360 });

    return () => {
      sheStarTimeline.kill();
      heStarTimeline.kill();
    };
  }, []);

  const contentMap = {
    pt: [
      <>“A Gente” significa “nós”.</>,
      <>E é exatamente sobre isso:</>,
      <>colaboração, parceria e propósito.</>,
      <>Nascemos de um <span ref={sheStarRef} className="inline-block w-5 h-5 lg:w-[30px] lg:h-[30px] bg-cover bg-[url('/svg/she-star.svg')] mx-2" /><span className='text-pink italic'>casal do marketing</span></>,
      <>que acredita que o digital pode ser humano.</>,
      <>Queremos fazer as <span ref={heStarRef} className="inline-block w-5 h-5 lg:w-[30px] lg:h-[30px] bg-cover bg-[url('/svg/he-star.svg')] mx-2" /> <span className='text-yellow italic'>coisas de um jeito diferente</span>, </>,
      <>entregando estratégia e estética com o</>,
      <>cuidado que o mercado esqueceu.</>,
      <>Porque quando a gente acredita</>,
      <> em algo, <span className='text-pink italic'>a gente faz acontecer.</span></>,
    ],
    en: [
      <>“A Gente” means “us”.</>,
      <>And that’s what we’re all about:</>,
      <>collaboration, partnership, and purpose.</>,
      <>We’re a <span ref={sheStarRef} className="inline-block w-5 h-5 lg:w-[30px] lg:h-[30px] bg-cover bg-[url('/svg/she-star.svg')] mx-2" /><span className='text-pink italic'>creative couple</span></>,
      <>who make digital feel human.</>,
      <>We do things differently, </>,
      <><span ref={heStarRef} className="inline-block w-5 h-5 lg:w-[30px] lg:h-[30px] bg-cover bg-[url('/svg/he-star.svg')] mx-2" /> <span className='text-yellow italic'>blending strategy and beauty</span>, </>,
      <>with the care the market forgot.</>,
      <>Because when it’s</>,
      <>about <span className='text-pink italic'>us, we make it happen.</span></>,
    ],
  };

  return (
    <section
      id='sobre'
      className="relative flex justify-center items-center h-[70vh] lg:h-[80vh] 2xl:h-[70vh] w-full bg-black-agente text-center px-6 lg:px-10 z-10 overflow-hidden"
    >
      <div className="text-white text-xl lg:text-4xl 2xl:text-4xl leading-snug w-2/4">
        <ScrollText content={contentMap[locale]} />
      </div>
      <motion.img
        ref={ref}
        style={{ x }}
        className="absolute w-[200px] left-0"
        src="/images/mascots/he-up.webp"
        alt="3D Uildes Mascot"
        width={500}
        height={500}
      />

      <motion.img
        ref={refShe}
        style={{ x: xShe }}
        className="absolute w-[200px] right-0"
        src="/images/mascots/she-up.webp"
        alt="3D Ayalla Mascot"
        width={500}
        height={500}
      />
    </section>
  );
};

export default About;