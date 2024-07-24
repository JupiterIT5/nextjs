'use client'

import cl from './services.module.scss'
import array from '../../../image/icon/array3.svg'
import { language } from '@/components/Hooks/useLanguage'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
	return (
		<section className={cl.section__service} id='services'>
			<h2 className={cl.title}>
				{language() === 'RU' ? 'Наши услуги' : ''}{' '}
				{language() === 'EN' ? 'Our services' : ''}{' '}
				{language() === 'ES' ? 'Nuestros servicios' : ''}
			</h2>
			<div className={cl.service__container}>
				<Link href={'/plumbing'}>
					<div className={cl.service}>
						<div className={[cl.service1, cl.service_img].join(' ')}></div>
						<h2>
							{language() === 'RU' ? 'Сантехника' : ''}{' '}
							{language() === 'EN' ? 'Plumbing' : ''}{' '}
							{language() === 'ES' ? 'Plomería' : ''}
						</h2>
						<p>
							{language() === 'RU'
								? 'Полный комплекс сантехнических услуг: от монтажа водонагревателей до установки систем отопления'
								: ''}{' '}
							{language() === 'EN'
								? 'A full range of plumbing services: from installation of water heaters to installation of heating systems'
								: ''}{' '}
							{language() === 'ES'
								? 'Una gama completa de servicios de fontanería: desde la instalación de calentadores de agua hasta la instalación de sistemas de calefacción.'
								: ''}
						</p>
						<Image src={array} alt='array' className={cl.array} />
					</div>
				</Link>
				<Link href={'/ceilings'}>
					<div className={cl.service}>
						<div className={[cl.service2, cl.service_img].join(' ')}></div>
						<h2>
							{language() === 'RU' ? 'Потолки' : ''}{' '}
							{language() === 'EN' ? 'Ceilings' : ''}{' '}
							{language() === 'ES' ? 'Techos' : ''}
						</h2>
						<p>
							{language() === 'RU'
								? 'Профессиональная отделка потолков: натяжные конструкции, гипсокартон, покраска'
								: ''}{' '}
							{language() === 'EN'
								? 'Professional finishing of ceilings: tension structures, plasterboard, painting'
								: ''}{' '}
							{language() === 'ES'
								? 'Acabado profesional de techos: estructuras tensadas, placas de yeso, pintura.'
								: ''}
						</p>
						<Image src={array} alt='array' className={cl.array} />
					</div>
				</Link>
				<Link href={'/buildHouses'}>
					<div className={cl.service}>
						<div className={[cl.service3, cl.service_img].join(' ')}></div>
						<h2>
							{language() === 'RU' ? 'Строительство домов' : ''}{' '}
							{language() === 'EN' ? 'Construction of houses' : ''}{' '}
							{language() === 'ES' ? 'Construcción de casas' : ''}
						</h2>
						<p>
							{language() === 'RU' ? 'Строительство домов любой сложности' : ''}{' '}
							{language() === 'EN'
								? 'Construction of houses of any complexity'
								: ''}{' '}
							{language() === 'ES'
								? 'Construcción de viviendas de cualquier complejidad.'
								: ''}
						</p>
						<Image src={array} alt='array' className={cl.array} />
					</div>
				</Link>
				<Link href={'/electrician'}>
					<div className={cl.service}>
						<div className={[cl.service4, cl.service_img].join(' ')}></div>
						<h2>
							{language() === 'RU' ? 'Электрик' : ''}{' '}
							{language() === 'EN' ? 'Electrician' : ''}{' '}
							{language() === 'ES' ? 'Electricista' : ''}
						</h2>
						<p>
							{language() === 'RU'
								? 'Все виды электромонтажных работ для вашего дома и бизнеса'
								: ''}{' '}
							{language() === 'EN'
								? 'All types of electrical work for your home and business'
								: ''}{' '}
							{language() === 'ES'
								? 'Todo tipo de trabajos eléctricos para tu hogar y negocio.'
								: ''}
						</p>
						<Image src={array} alt='array' className={cl.array} />
					</div>
				</Link>
				<Link href={'/renovationWork'}>
					<div className={cl.service}>
						<div className={[cl.service5, cl.service_img].join(' ')}></div>
						<h2>
							{language() === 'RU' ? 'Ремонтные работы' : ''}{' '}
							{language() === 'EN' ? 'Repair work' : ''}{' '}
							{language() === 'ES' ? 'Trabajo de reparación' : ''}
						</h2>
						<p>
							{language() === 'RU'
								? 'Профессионально выполняем весь спектр . ремонтных работ для дома и офисов'
								: ''}{' '}
							{language() === 'EN'
								? 'We carry out the entire range professionally. renovation work for home and offices'
								: ''}{' '}
							{language() === 'ES'
								? 'Realizamos toda la gama de forma profesional. trabajos de reformas para el hogar y oficinas'
								: ''}
						</p>
						<Image src={array} alt='array' className={cl.array} />
					</div>
				</Link>
				<Link href={'/facades'}>
					<div className={cl.service}>
						<div className={[cl.service6, cl.service_img].join(' ')}></div>
						<h2>
							{language() === 'RU' ? 'Фасады' : ''}{' '}
							{language() === 'EN' ? 'Facades' : ''}{' '}
							{language() === 'ES' ? 'Fachadas' : ''}
						</h2>
						<p>
							{language() === 'RU'
								? 'Фасадные работы: очистка, декоративная отделка, покраска, гидроизоляция.'
								: ''}{' '}
							{language() === 'EN'
								? 'Facade work: cleaning, decorative finishing, painting, waterproofing.'
								: ''}{' '}
							{language() === 'ES'
								? 'Trabajos de fachada: limpieza, acabados decorativos, pintura, impermeabilización.'
								: ''}
						</p>
						<Image src={array} alt='array' className={cl.array} />
					</div>
				</Link>
				<Link href={'/labdscapingWorks'}>
					<div className={cl.service}>
						<div className={[cl.service7, cl.service_img].join(' ')}></div>
						<h2>
							{language() === 'RU' ? 'Ландшафтные работы' : ''}{' '}
							{language() === 'EN' ? 'Landscaping works' : ''}{' '}
							{language() === 'ES' ? 'Obras de paisajismo' : ''}
						</h2>
						<p>
							{language() === 'RU'
								? 'Преобразим ваш участок: озеленение, автоматический полив, освещение и тротуарные дорожки.'
								: ''}{' '}
							{language() === 'EN'
								? 'We will transform your site: landscaping, automatic watering, lighting and sidewalk paths.'
								: ''}{' '}
							{language() === 'ES'
								? 'Transformaremos su sitio: paisajismo, riego automático, iluminación y senderos para aceras.'
								: ''}
						</p>
						<Image src={array} alt='array' className={cl.array} />
					</div>
				</Link>
				<Link href={'/buildPools'}>
					<div className={cl.service}>
						<div className={[cl.service8, cl.service_img].join(' ')}></div>
						<h2>
							{language() === 'RU' ? 'Строительство бассейнов' : ''}{' '}
							{language() === 'EN' ? 'Construction of swimming pools' : ''}{' '}
							{language() === 'ES' ? 'Construcción de piscinas' : ''}
						</h2>
						<p>
							{language() === 'RU'
								? 'Профессиональное строительство бассейнов любого объема'
								: ''}{' '}
							{language() === 'EN'
								? 'Professional construction of swimming pools of any size'
								: ''}{' '}
							{language() === 'ES'
								? 'Construcción profesional de piscinas de cualquier tamaño.'
								: ''}
						</p>
						<Image src={array} alt='array' className={cl.array} />
					</div>
				</Link>
			</div>
		</section>
	)
}
