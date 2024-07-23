'use client'

import cl from "./footer.module.scss";
import logo from "@/image/photo/logo2.png";
import phone from "@/image/icon/phone2.svg";
import instagram from "@/image/icon/instagram2.svg";
import facebook from "@/image/icon/facebook2.svg";
import whatapp from "@/image/icon/whatapp2.svg";
import { language } from '../Hooks/useLanguage';
import Image from "next/image"

export default function Footer() {

  return (
    <footer className={cl.footer} id='contact'>
      <div className={cl.section__first}>
        <a href="/"><Image src={logo} alt="logo" style={{cursor: 'pointer'}}/></a>
        <div className={cl.footer__container}>
          <ul>
            <li>
              <a href="/#services">{language() === 'RU' ? 'Наши услуги' : ''} {language() === 'EN' ? 'Our services' : ''} {language() === 'ES' ? 'Nuestros servicios' : ''}</a>
            </li>
            <li>
              <a href="/#company">{language() === 'RU' ? 'О компании' : ''} {language() === 'EN' ? 'About company' : ''} {language() === 'ES' ? 'Acerca de la compañía' : ''}</a>
            </li>
            <li>
              <a href="#contact">{language() === 'RU' ? 'Контакты' : ''} {language() === 'EN' ? 'Contacts' : ''} {language() === 'ES' ? 'Contactos' : ''}</a>
            </li>
          </ul>
          <div className={cl.contact}>
            <a href="tel:+34 622 947 742" className={cl.phone}>
              <Image src={phone} alt="phone" />
              <p>+34 622 947 742</p>
            </a>
            <p>{language() === 'RU' ? 'Следите за нами в социальных сетях:' : ''} {language() === 'EN' ? 'Follow us on social networks:' : ''} {language() === 'ES' ? 'Síguenos en redes sociales:' : ''}</p>
            <div className={cl.webapp}>
              <a href="https://www.instagram.com/garantbuilds"><Image src={instagram} alt="instagram" /></a>
              <a href="https://www.facebook.com/garantbuild"><Image src={facebook} alt="facebook" /></a>
              <a href="https://wa.me/+34622947742"><Image src={whatapp} alt="whatapp" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={cl.section__second}>
        <a href="#">{language() === 'RU' ? 'Политика конфиденциальности' : ''} {language() === 'EN' ? 'Privacy Policy' : ''} {language() === 'ES' ? 'Política de privacidad' : ''}</a>
        {language() === 'RU' ? <a href="#">Согласие на обработку<br/>персональной информации</a> : ''} {language() === 'EN' ? <a href="#">Consent to the processing of<br/>personal information</a> : ''} {language() === 'ES' ? <a href="#">Consentimiento al tratamiento<br/>de datos personales</a> : ''}
      </div>
    </footer>
  );
}
