'use client'

import { StaticImageData } from 'next/image'
import cl from './project.module.scss'
import Image from 'next/image'
import { language } from '@/components/Hooks/useLanguage'

interface ProjectData {
    projects: Array<StaticImageData>
}

export default function Project({projects}: ProjectData) {
    return (
        <section className={cl.section__projects}>
            <h2 className={cl.title}>{language() === 'RU' ? 'реализованные проекты:' : ''} {language() === 'EN' ? 'completed projects:' : ''} {language() === 'ES' ? 'proyectos completados:' : ''}</h2>
            <div className={cl.project__list}>
                {projects.map((image, index) =>
                    <Image src={image} alt="project" key={index} />
                )}
            </div>
        </section>
    )
}