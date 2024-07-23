'use client'

import cl from "./about.module.scss";
import array from '../../../image/icon/array2.svg'
import { sendMessage } from "../../API/telegram";
import { useState } from "react";
import { language } from '@/components/Hooks/useLanguage';
import Image from 'next/image'

export default function About({setMenuThank}: {setMenuThank: Function}) {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const handlePlaceholder = (language: Function, text: Array<string>): string | undefined => {
    if (language() === 'RU') {
      return text[0]
    } else if (language() === 'EN') {
      return text[1]
    } else if (language() === 'ES') {
      return text[2]
    }
  }

  const handleMessage = async (e:any): Promise<void | undefined> => {
    e.preventDefault()
    if (!name || name.length < 2) {
      setNameError(true)
      return 
    } else {
      setNameError(false)
    }
    if (!phone) {
      setPhoneError(true)
      return 
    } else {
      setPhoneError(false)
    }
    if (!message || message.length < 5) {
      setMessageError(true)
      return
    } else {
      setMessageError(false)
    }
    setMenuThank(true)
    const messages = `Имя пользователя: ${name}...  Телефон: ${phone}...  Сообщение: ${message}`
    await sendMessage(messages)
    setMessage('')
    setName('')
    setPhone('')
  }

  return (
    <div className={cl.about__container}>
      <section className={cl.section__about}>
        <div className={cl.text}>
          <h1>{language() === 'RU' ? 'Все услуги для вашего дома и участка в одном месте!' : ''} {language() === 'EN' ? 'All services for your home and site in one place!' : ''} {language() === 'ES' ? '¡Todos los servicios para tu hogar y sitio en un solo lugar!' : ''}</h1>
          <p>
            {language() === 'RU' ? 'От сантехники и электрики до ландшафтного дизайна и кровли. Профессиональные работы для вашего комфорта и уюта.' : ''} {language() === 'EN' ? 'From plumbing and electrical to landscaping and roofing. Professional work for your comfort and coziness.' : ''} {language() === 'ES' ? 'Desde plomería y electricidad hasta paisajismo y techado. Trabajo profesional para su comodidad y calidez.' : ''}
          </p>
          <a href="#services">
            <h2>{language() === 'RU' ? 'Посмотреть все услуги' : ''} {language() === 'EN' ? 'View all services' : ''} {language() === 'ES' ? 'Ver todos los servicios' : ''}</h2>
            <Image src={array} alt="array" />
          </a>
        </div>
      </section>
      <div className={cl.form}>
        <h3>{language() === 'RU' ? 'Рассчитаем стоимость вашего проекта' : ''} {language() === 'EN' ? 'We will calculate the cost of your project' : ''} {language() === 'ES' ? 'Calcularemos el coste de tu proyecto.' : ''}</h3>
        <p>{language() === 'RU' ? 'Отправьте заявку и наш менеджер свяжется с вами' : ''} {language() === 'EN' ? 'Send a request and our manager will contact you' : ''} {language() === 'ES' ? 'Envíe una solicitud y nuestro gerente se comunicará con usted.' : ''}</p>
        <form onSubmit={handleMessage}>
            <input value={name} type="text" name="name" className={nameError ? cl.input__error : cl.name} placeholder={handlePlaceholder(language, ['Ваше имя', 'Your name', 'Su nombre'])} onChange={(e) => setName(e.target.value)} minLength={2}/>
            <h6 className={nameError ? cl.text__error : cl.text__none}>{language() === 'RU' ? 'Необходимо указать ваше имя' : ''} {language() === 'EN' ? 'Your name is required' : ''} {language() === 'ES' ? 'Tu nombre es requerido' : ''}</h6>
            <input value={phone} type="text" name="phone" className={phoneError ? cl.input__error : cl.phone} placeholder={handlePlaceholder(language, ['Номер телефона', 'Phone number', 'Número de teléfono'])} onChange={(e) => setPhone(e.target.value)} minLength={7}/>
            <h6 className={phoneError ? cl.text__error : cl.text__none}>{language() === 'RU' ? 'Необходимо указать ваш номер телефона' : ''} {language() === 'EN' ? 'You must provide your phone number' : ''} {language() === 'ES' ? 'Debes proporcionar tu número de teléfono.' : ''}</h6>
            <textarea value={message} className={messageError ? cl.input__error : cl.message} placeholder={handlePlaceholder(language, ['Описание проекта', 'Project Description', 'Descripción del Proyecto'])} name="message" onChange={(e) => setMessage(e.target.value)} minLength={5}></textarea>
            <h6 className={messageError ? cl.text__error : cl.text__none}>{language() === 'RU' ? 'Необходимо указать описание проекта' : ''} {language() === 'EN' ? 'A description of the project is required' : ''} {language() === 'ES' ? 'Se requiere una descripción del proyecto.' : ''}</h6>
            <button className={cl.submit}>{language() === 'RU' ? 'Отправить заявку' : ''} {language() === 'EN' ? 'Send a request' : ''} {language() === 'ES' ? 'Enviar una solicitud' : ''}</button>
        </form>
      </div>
    </div>
  );
}
