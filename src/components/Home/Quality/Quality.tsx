'use client'

import cl from "./quality.module.scss";
import { language } from '@/components/Hooks/useLanguage';

export default function Quality() {
  return (
    <section className={cl.section__quality}>
      <h2 className={cl.title}>
         {language() === 'RU' ? 'Качество и сервис — наш приоритет' : ''} {language() === 'EN' ? 'Quality and service are our priority' : ''} {language() === 'ES' ? 'La calidad y el servicio son nuestra prioridad.' : ''}
      </h2>
      <div className={cl.quality__container}>
        <div className={cl.quality}>
          <h3 className={cl.number}>1</h3>
          <h2>{language() === 'RU' ? 'Оказываем весь спектр услуг на высшем уровне' : ''} {language() === 'EN' ? 'We provide a full range of services at the highest level' : ''} {language() === 'ES' ? 'Ofrecemos una gama completa de servicios al más alto nivel.' : ''}</h2>
          <div>
            <p>{language() === 'RU' ? 'Более 10 лет на рынке' : ''} {language() === 'EN' ? 'More than 10 years on the market' : ''} {language() === 'ES' ? 'Más de 10 años en el mercado' : ''}</p>
            <p>{language() === 'RU' ? 'Чётко соблюдаем сроки' : ''} {language() === 'EN' ? 'We strictly adhere to deadlines' : ''} {language() === 'ES' ? 'Cumplimos estrictamente los plazos' : ''}</p>
            <p>{language() === 'RU' ? 'Не заходим за рамки сметы' : ''} {language() === 'EN' ? 'We don`t go over budget' : ''} {language() === 'ES' ? 'No nos pasamos del presupuesto' : ''}</p>
          </div>
        </div>
        <div className={cl.quality}>
          <h3 className={cl.number}>2</h3>
          <div className={cl.description}>
            <h2>{language() === 'RU' ? 'Без головной боли' : ''} {language() === 'EN' ? 'No headache' : ''} {language() === 'ES' ? 'Sin dolor de cabeza' : ''}</h2>
            <p>
              {language() === 'RU' ? 'Все заботы берем на себя от начала и до сдачи объекта. Вам не придется участвовать в решении никаких вопросов' : ''} {language() === 'EN' ? 'We take care of all the worries from the beginning until the delivery of the object. You don`t have to participate in resolving any issues' : ''} {language() === 'ES' ? 'Nos ocupamos de todas las preocupaciones desde el inicio hasta la entrega del objeto. No tienes que participar en la resolución de ningún problema.' : ''}
            </p>
          </div>
        </div>
        <div className={cl.quality}>
          <h3 className={cl.number}>3</h3>
          <div className={cl.description}>
            <h2>{language() === 'RU' ? 'Рабочие с узким профилем' : ''} {language() === 'EN' ? 'Narrow profile workers' : ''} {language() === 'ES' ? 'Trabajadores de perfil estrecho' : ''}</h2>
            <p>
              {language() === 'RU' ? 'Все мастера выполняют только работы соответствующие его профилю. Сантехник делает сантехнику, электрик - электрику' : ''} {language() === 'EN' ? 'All masters perform only work that corresponds to their profile. A plumber does plumbing, an electrician does electrical work' : ''} {language() === 'ES' ? 'Todos los maestros realizan únicamente trabajos que corresponden a su perfil. Un fontanero hace fontanería, un electricista hace trabajos eléctricos.' : ''}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
