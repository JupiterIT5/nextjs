'use client'

import cl from "./popupthank.module.scss";
import instagram from "@/image/icon/instagram.svg";
import facebook from "@/image/icon/facebook.svg";
import whatapp from "@/image/icon/whatapp.svg";
import close from '@/image/icon/close.svg'
import { language } from '../Hooks/useLanguage';
import Image from 'next/image'

export default function Popup({setMenuThank}: {setMenuThank: Function}) {
  return (
    <div className={cl.popup__container}>
      <div className={cl.popup}>
        <Image src={close} alt="close" className={cl.close__img} onClick={() => setMenuThank(false)}/>
        {language() === 'RU' ? <h2>Спасибо!<br/>Ваша заявка успешно отправлена</h2> : ''} {language() === 'EN' ? <h2>Thank!<br/>Your application has been successfully sent</h2> : ''} {language() === 'ES' ? <h2>¡Gracias!<br/>Su solicitud ha sido enviada exitosamente</h2> : ''}
        <p>{language() === 'RU' ? 'Наш менеджер свяжестся с вами в ближайшее время' : ''} {language() === 'EN' ? 'Our manager will contact you shortly' : ''} {language() === 'ES' ? 'Nuestro gerente se comunicará con usted en breve.' : ''}</p>
        <div className={cl.web}>
          <h3>{language() === 'RU' ? 'Следите за нами в социальных сетях:' : ''} {language() === 'EN' ? 'Follow us on social networks:' : ''} {language() === 'ES' ? 'Síguenos en redes sociales:' : ''}</h3>
          <div className={cl.icon}>
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
      </div>
    </div>
  );
}
