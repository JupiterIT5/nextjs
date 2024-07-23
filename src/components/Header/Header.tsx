'use client'

import cl from "./header.module.scss";
import logo from "@/image/photo/logo.png";
import instagram from "@/image/icon/instagram.svg";
import facebook from "@/image/icon/facebook.svg";
import whatapp from "@/image/icon/whatapp.svg";
import phone from "@/image/icon/phone.svg";
import languageIcon from "@/image/icon/language.svg";
import ru from "@/image/icon/RU.svg";
import en from "@/image/icon/EN.svg";
import es from "@/image/icon/ES.svg";
import { useState } from "react";
import Image from 'next/image'
import { language, setCurrentLanguage } from '../Hooks/useLanguage';

export default function Header({setMenuCount}: {setMenuCount: Function}) {
  const [menu, setMenu] = useState(false);
  const [menuLanguage, setMenuLanguage] = useState(false);

  const updateLanguage = (lang: string): undefined => {
    setCurrentLanguage(lang);
    setMenuLanguage(false);
  };

  const activeMenuLanguage = () => {
    if (!menuLanguage) {
      setMenuLanguage(true);
    } else {
      setMenuLanguage(false);
    }
  };

  const activeMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  const activateMenuCount = () => {
    setMenuCount(true)
    setMenu(false)
  }

  return (
    <nav className={cl.header__container}>
      <header className={cl.header}>
        <a href="/"><Image src={logo} alt="logo" className={cl.logo} style={{cursor: 'pointer'}}/></a>
        <div className={cl.nav}>
          <a href="/#services">{language() === 'RU' ? 'Услуги' : ''} {language() === 'EN' ? 'Services' : ''} {language() === 'ES' ? 'Servicios' : ''}</a>
          <a href="/#company">{language() === 'RU' ? 'О компании' : ''} {language() === 'EN' ? 'About company' : ''} {language() === 'ES' ? 'Acerca de la compañía' : ''}</a>
          <a href="#contact">{language() === 'RU' ? 'Контакты' : ''} {language() === 'EN' ? 'Contacts' : ''} {language() === 'ES' ? 'Contactos' : ''}</a>
        </div>
        <div className={cl.contact}>
          <a href="https://www.instagram.com/garantbuilds">
            <Image src={instagram} alt="instagram" className={cl.webapp} />
          </a>
          <a href="https://www.facebook.com/garantbuild">
            <Image src={facebook} alt="facebook" className={cl.webapp} />
          </a>
          <a href="https://wa.me/+34622947742">
            <Image src={whatapp} alt="whatapp" className={cl.webapp} />
          </a>
          <a href="tel:+34622947742" className={cl.phone}>
            <Image src={phone} alt="phone" />
            <p>+34 622 947 742</p>
          </a>
          <div className={cl.language__container}>
            <div
              className={
                menuLanguage
                  ? [cl.language, cl.language__active].join(" ")
                  : cl.language
              }
              onClick={() => activeMenuLanguage()}
            >
              <Image src={languageIcon} alt="language" />
              <p>{language()}</p>
            </div>
            <div
              className={
                menuLanguage === true
                  ? [cl.menu__language, cl.menu__language_active].join(" ")
                  : cl.menu__language
              }
            >
              <p onClick={() => updateLanguage("RU")}>
                <Image src={ru} alt="RU" />
                RU
              </p>
              <p onClick={() => updateLanguage("EN")}>
                <Image src={en} alt="EN" />
                EN
              </p>
              <p onClick={() => updateLanguage("ES")}>
                <Image src={es} alt="ES" />
                ES
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            menu === true
              ? [cl.btn__menu, cl.btn__menu_active].join(" ")
              : cl.btn__menu
          }
          onClick={activeMenu}
        >
          <span className={cl.left}></span>
          <span className={cl.center}></span>
          <span className={cl.right}></span>
        </div>
      </header>
      <div
        className={
          menu === true ? [cl.menu, cl.menu__active].join(" ") : cl.menu
        }
      >
        <div className={cl.nav}>
          <a href="/#services">{language() === 'RU' ? 'Наши услуги' : ''} {language() === 'EN' ? 'Our services' : ''} {language() === 'ES' ? 'Nuestros servicios' : ''}</a>
          <a href="/#company">{language() === 'RU' ? 'О компании' : ''} {language() === 'EN' ? 'About company' : ''} {language() === 'ES' ? 'Acerca de la compañía' : ''}</a>
          <a href="#contact">{language() === 'RU' ? 'Контакты' : ''} {language() === 'EN' ? 'Contacts' : ''} {language() === 'ES' ? 'Contactos' : ''}</a>
        </div>
        <button className={cl.btn__form} onClick={() => activateMenuCount()}>{language() === 'RU' ? 'Связаться с нами' : ''} {language() === 'EN' ? 'Connect with us' : ''} {language() === 'ES' ? 'Conéctate con nosotros' : ''}</button>
        <hr />
        <a href="tel:+34622947742" className={cl.phone}>
          <Image src={phone} alt="phone" />
          <p>+34 622 947 742</p>
        </a>
        <div>
          <div
            className={ menuLanguage ? [cl.language, cl.language__active].join(" ") : cl.language }
            onClick={() => activeMenuLanguage()}
          >
            <Image src={languageIcon} alt="language" />
            <p>{language()}</p>
          </div>
          <div
            className={
              menuLanguage === true
                ? [
                    cl.menu__language_phone,
                    cl.menu__language_phone_active,
                  ].join(" ")
                : cl.menu__language_phone
            }
          >
            <p onClick={() => updateLanguage("RU")}>
              <Image src={ru} alt="RU" />
              RU
            </p>
            <p onClick={() => updateLanguage("EN")}>
              <Image src={en} alt="EN" />
              EN
            </p>
            <p onClick={() => updateLanguage("ES")}>
              <Image src={es} alt="ES" />
              ES
            </p>
          </div>
        </div>
        <h2>{language() === 'RU' ? 'Следите за нами в социальных сетях:' : ''} {language() === 'EN' ? 'Follow us on social networks:' : ''} {language() === 'ES' ? 'Síguenos en redes sociales:' : ''}</h2>
        <div className={cl.website}>
          <a href="https://www.instagram.com/garantbuilds">
            <Image src={instagram} alt="instagram" className={cl.webapp} />
          </a>
          <a href="https://www.facebook.com/garantbuild">
            <Image src={facebook} alt="facebook" className={cl.webapp} />
          </a>
          <a href="https://wa.me/+34622947742">
            <Image src={whatapp} alt="whatapp" className={cl.webapp} />
          </a>
        </div>
      </div>
    </nav>
  );
}
