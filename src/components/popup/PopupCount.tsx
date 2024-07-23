'use client'

import { useState } from "react";
import cl from "./popupcount.module.scss";
import { sendMessage } from "../API/telegram";
import close from '@/image/icon/close2.svg'
import { language } from '../Hooks/useLanguage';
import Image from 'next/image'

export default function PopupCount({setMenuThank, setMenuCount}: {setMenuThank: Function, setMenuCount: Function}) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);

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
    setMenuCount(false)
    const messages = `Имя пользователя: ${name}...  Телефон: ${phone}...  Сообщение: ${message}`
    await sendMessage(messages)
    setMessage('')
    setName('')
    setPhone('')
  }

  return (
    <div className={cl.section__popup}>
      <div className={cl.popup}>
        <Image src={close} className={cl.close} alt="close" onClick={() => setMenuCount(false)} />
        <div className={cl.text}>
            <h2>{language() === 'RU' ? 'Рассчитаем стоимость вашего проекта' : ''} {language() === 'EN' ? 'We will calculate the cost of your project' : ''} {language() === 'ES' ? 'Calcularemos el coste de tu proyecto.' : ''}</h2>
            <p>{language() === 'RU' ? 'Отправьте заявку и наш менеджер свяжется с вами' : ''} {language() === 'EN' ? 'Send a request and our manager will contact you' : ''} {language() === 'ES' ? 'Envíe una solicitud y nuestro gerente se comunicará con usted.' : ''}</p>
        </div>
        <form onSubmit={handleMessage} className={cl.form}>
          <input
            value={name}
            type="text"
            name="name"
            className={nameError ? cl.input__error : cl.name}
            placeholder={handlePlaceholder(language, [
              "Ваше имя",
              "Your name",
              "Su nombre",
            ])}
            onChange={(e) => setName(e.target.value)}
            minLength={2}
          />
          <h6 className={nameError ? cl.text__error : cl.text__none}>
            {language() === "RU" ? "Необходимо указать ваше имя" : ""}
            {language() === "EN" ? "Your name is required" : ""}
            {language() === "ES" ? "Tu nombre es requerido" : ""}
          </h6>
          <input
            value={phone}
            type="text"
            name="phone"
            className={phoneError ? cl.input__error : cl.phone}
            placeholder={handlePlaceholder(language, [
              "Номер телефона",
              "Phone number",
              "Número de teléfono",
            ])}
            onChange={(e) => setPhone(e.target.value)}
            minLength={7}
          />
          <h6 className={phoneError ? cl.text__error : cl.text__none}>
            {language() === "RU"
              ? "Необходимо указать ваш номер телефона"
              : ""}{" "}
            {language() === "EN"
              ? "You must provide your phone number"
              : ""}{" "}
            {language() === "ES"
              ? "Debes proporcionar tu número de teléfono."
              : ""}
          </h6>
          <textarea
            value={message}
            className={messageError ? cl.input__error : cl.message}
            placeholder={handlePlaceholder(language, [
              "Описание проекта",
              "Project Description",
              "Descripción del Proyecto",
            ])}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            minLength={5}
          ></textarea>
          <h6 className={messageError ? cl.text__error : cl.text__none}>
            {language() === "RU"
              ? "Необходимо указать описание проекта"
              : ""}{" "}
            {language() === "EN"
              ? "A description of the project is required"
              : ""}{" "}
            {language() === "ES"
              ? "Se requiere una descripción del proyecto."
              : ""}
          </h6>
          <button className={cl.submit}>
            {language() === "RU" ? "Отправить заявку" : ""}
            {language() === "EN" ? "Send a request" : ""}
            {language() === "ES" ? "Enviar una solicitud" : ""}
          </button>
        </form>
      </div>
    </div>
  );
}
