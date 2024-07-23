'use client'

import { useNavigate } from 'react-router-dom'
import cl from './description.module.scss'
import { language } from '@/components/Hooks/useLanguage'
import Link from 'next/link'

interface DescriptionData {
    currentPage: Array<string>,
    title: Array<string>,
    description: Array<string>
}

export default function Description({currentPage, title, description}: DescriptionData) {
    return (
        <section className={cl.section__description}>
            <h2 className={cl.nav}>
                <Link href={'/'}><p>{language() === 'RU' ? 'Главная' : ''} {language() === 'EN' ? 'Home' : ''} {language() === 'ES' ? 'Hogar' : ''} /</p></Link><span>{language() === 'RU' ? currentPage[0] : ''} {language() === 'EN' ? currentPage[1] : ''} {language() === 'ES' ? currentPage[2] : ''}</span>
            </h2>
            <h2 className={cl.title}>{language() === 'RU' ? 'подробнее о нашей услуге' : ''} {language() === 'EN' ? 'more about our service' : ''} {language() === 'ES' ? 'más sobre nuestro servicio' : ''}</h2>
            <div className={cl.description}>
                <h3>{language() === 'RU' ? title[0] : ''} {language() === 'EN' ? title[1] : ''} {language() === 'ES' ? title[2] : ''}</h3>
                <p>{language() === 'RU' ? description[0] : ''} {language() === 'EN' ? description[1] : ''} {language() === 'ES' ? description[2] : ''}</p>
            </div>
        </section>
    )
}