"use client";

import { useEffect } from "react";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

export const Numbers = () => {
  const t = useTranslations("Numbers");

  const AnimatedNumber = ({ from = 0, to, suffix = "+" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" }); 
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.floor(latest));
    const [displayValue, setDisplayValue] = useState(from);

    useEffect(() => {
      if (isInView) {
        const controls = animate(count, to, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (latest) => setDisplayValue(Math.floor(latest)), 
        });
        return controls.stop;
      }
    }, [isInView, count, to]);

    return (
      <h3 ref={ref} className="font-black font-nexa text-black-agente text-8xl">
        {displayValue}
        {suffix}
      </h3>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center gap-20 lg:gap-40 items-center pt-20">
      <div className="flex flex-col relative items-center lg:items-start ml-4 lg:ml-0">
        <AnimatedNumber to={10} />
        <span className="absolute w-5 h-5 rounded-full -left-6 lg:-left-12 bg-pink" />
        <p className="font-stix italic text-2xl text-black-agente">{t("number1")}</p>
      </div>

      <div className="flex flex-col relative items-center lg:items-start ml-4 lg:ml-0">
        <AnimatedNumber to={156} />
        <span className="absolute w-5 h-5 rounded-full -left-8 lg:-left-12 bg-pink" />
        <p className="font-stix italic text-2xl text-black-agente">{t("number2")}</p>
      </div>

      <div className="flex flex-col relative items-center lg:items-start ml-4 lg:ml-0">
        <AnimatedNumber to={80} />
        <span className="absolute w-5 h-5 rounded-full left-0 lg:-left-12 bg-pink" />
        <p className="font-stix italic text-2xl text-black-agente">{t("number3")}</p>
      </div>
    </div>
  );
};
