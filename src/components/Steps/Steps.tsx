'use client'

import cl from './steps.module.scss'
import step1 from '@/image/photo/Steps/step1.png'
import step2 from '@/image/photo/Steps/step2.png'
import step3 from '@/image/photo/Steps/step3.png'
import step4 from '@/image/photo/Steps/step4.png'
import step5 from '@/image/photo/Steps/step5.png'
import step6 from '@/image/photo/Steps/step6.png'
import step7 from '@/image/photo/Steps/step7.png'
import step8 from '@/image/photo/Steps/step8.png'
import { language } from '../Hooks/useLanguage'
import Image from 'next/image'


export default function Steps({setMenuCount}: {setMenuCount: Function}) {
    return (
        <section className={cl.section__steps}>
            {language() === 'RU' ? <h2 className={cl.title}>Шаги к реализации<br/>проекта</h2> : ''} {language() === 'EN' ? <h2 className={cl.title}>Steps to project<br/>implementation</h2> : ''} {language() === 'ES' ? <h2 className={cl.title}>Pasos para la implementación<br/>del proyecto.</h2> : ''}
            <div className={cl.steps__container}>
                <div className={cl.steps}>
                    <Image src={step1} alt="step1" />
                    <h2>{language() === 'RU' ? 'Оставьте заявку' : ''} {language() === 'EN' ? 'Leave a request' : ''} {language() === 'ES' ? 'Dejar una solicitud' : ''}</h2>
                    <p>{language() === 'RU' ? 'Вы оставляете заявку на сайте или по телефону, для уточнения всех деталий' : ''} {language() === 'EN' ? 'You leave a request on the website or by phone to clarify all the details.' : ''} {language() === 'ES' ? 'Dejas una solicitud en el sitio web o por teléfono para aclarar todos los detalles.' : ''}</p>
                    <button onClick={() => setMenuCount(true)}>{language() === 'RU' ? 'Оставьте заявку' : ''} {language() === 'EN' ? 'Leave a request' : ''} {language() === 'ES' ? 'Dejar una solicitud' : ''}</button>
                </div>
                <div className={cl.steps}>
                    <Image src={step2} alt="step2" />
                    <h2>{language() === 'RU' ? 'Встреча со специалистом' : ''} {language() === 'EN' ? 'Meeting with a specialist' : ''} {language() === 'ES' ? 'Reunión con un especialista' : ''}</h2>
                    <p>{language() === 'RU' ? 'Выезд специалиста на объект - абсолютно бесплатно' : ''} {language() === 'EN' ? 'A specialist`s visit to the site is absolutely free' : ''} {language() === 'ES' ? 'La visita de un especialista al sitio es totalmente gratuita.' : ''}</p>
                </div>
                <div className={cl.steps}>
                    <Image src={step3} alt="step3" />
                    <h2>{language() === 'RU' ? 'Согласование сметы' : ''} {language() === 'EN' ? 'Coordination of estimates' : ''} {language() === 'ES' ? 'Coordinación de presupuestos.' : ''}</h2>
                    <p>{language() === 'RU' ? 'Мы составим смету на основе поставленной задачи, и согласуем с вами' : ''} {language() === 'EN' ? 'We will draw up an estimate based on the task and agree with you' : ''} {language() === 'ES' ? 'Elaboraremos un presupuesto en función de la tarea y lo acordaremos con usted.' : ''}</p>
                </div>
                <div className={cl.steps}>
                    <Image src={step4} alt="step4" />
                    <h2>{language() === 'RU' ? 'Подписание договора' : ''} {language() === 'EN' ? 'Signing the contract' : ''} {language() === 'ES' ? 'Firmando el contrato' : ''}</h2>
                    <p>{language() === 'RU' ? 'Подпишем договор, в котором будут указаны весь перечень работ, сроки и суммы' : ''} {language() === 'EN' ? 'We will sign an agreement that will indicate the entire list of works, terms and amounts' : ''} {language() === 'ES' ? 'Firmaremos un acuerdo que indicará la lista completa de obras, plazos y montos.' : ''}</p>
                </div>
                <div className={cl.steps}>
                    <Image src={step5} alt="step5" />
                    <h2>{language() === 'RU' ? '' : ''} {language() === 'EN' ? 'Receiving an advance' : ''} {language() === 'ES' ? 'Recibir un anticipo' : ''}</h2>
                    <p>{language() === 'RU' ? 'Получаем аванс по договору на покупку материала для работ' : ''} {language() === 'EN' ? 'We receive an advance payment under a contract for the purchase of materials for work' : ''} {language() === 'ES' ? 'Recibimos un anticipo en virtud de un contrato para la compra de materiales para el trabajo.' : ''}</p>
                </div>
                <div className={cl.steps}>
                    <Image src={step6} alt="step6" />
                    <h2>{language() === 'RU' ? 'Выполнение работ' : ''} {language() === 'EN' ? 'Execution of work' : ''} {language() === 'ES' ? 'Ejecución del trabajo' : ''}</h2>
                    <p>{language() === 'RU' ? 'Завозим материалы на объект и приступаем к выполнению работ по договору' : ''} {language() === 'EN' ? 'We deliver materials to the site and begin work under the contract.' : ''} {language() === 'ES' ? 'Entregamos materiales al sitio y comenzamos a trabajar según el contrato.' : ''}</p>
                </div>
                <div className={cl.steps}>
                    <Image src={step7} alt="step7" />
                    <h2>{language() === 'RU' ? 'Уборка территории' : ''} {language() === 'EN' ? 'Cleaning the area' : ''} {language() === 'ES' ? 'Limpiando el área' : ''}</h2>
                    <p>{language() === 'RU' ? 'По окончанию ремонтно-строительных работ, подготавливаем объект к сдаче' : ''} {language() === 'EN' ? 'Upon completion of repair and construction work, we prepare the facility for delivery' : ''} {language() === 'ES' ? 'Una vez finalizados los trabajos de reparación y construcción, preparamos la instalación para la entrega.' : ''}</p>
                </div>
                <div className={cl.steps}>
                    <Image src={step8} alt="step8" />
                    <h2>{language() === 'RU' ? 'Приёмка работы клиентом' : ''} {language() === 'EN' ? 'Acceptance of work by the client' : ''} {language() === 'ES' ? 'Aceptación del trabajo por parte del cliente.' : ''}</h2>
                    <p>{language() === 'RU' ? 'Проверка и приемка выполненных работ, подписание акта выполненных работ' : ''} {language() === 'EN' ? 'Inspection and acceptance of completed work, signing of the work completion certificate' : ''} {language() === 'ES' ? 'Inspección y aceptación de obra terminada, firma del acta de finalización de obra.' : ''}</p>
                </div>
            </div>
        </section>
    )
}