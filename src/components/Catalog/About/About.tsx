'use client'

import cl from "./about.module.scss";
import array from "@/image/icon/array3.svg";
import { language } from '@/components/Hooks/useLanguage';
import Image, { StaticImageData } from 'next/image'

interface AboutData {
  fon: StaticImageData;
  title: Array<string>;
  subtitle: Array<string>;
  setMenuCount: Function,
}

export default function About({ fon, title, subtitle, setMenuCount}: AboutData) {
  return (
    <section className={cl.section__about}>
      <div className={cl.about__img}>
        <Image src={fon} alt="fon" />
      </div>
      <h1 className={cl.title}>{language() === 'RU' ? title[0] : ''} {language() === 'EN' ? title[1] : ''} {language() === 'ES' ? title[2] : ''}</h1>
      <p className={cl.subtitle}>{language() === 'RU' ? subtitle[0] : ''} {language() === 'EN' ? subtitle[1] : ''} {language() === 'ES' ? subtitle[2] : ''}</p>
      <button className={cl.calculator} onClick={() => setMenuCount(true)}>
        <h2>{language() === 'RU' ? 'Рассчитать стоимость' : ''} {language() === 'EN' ? 'Calculate the cost' : ''} {language() === 'ES' ? 'Calcular el costo' : ''}</h2>
        <Image src={array} alt="array" />
      </button>
    </section>
  );
}
