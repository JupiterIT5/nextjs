'use client'

import Header from '@/components/Header/Header'
import { useEffect, useState } from "react"
import About from '@/components/Catalog/About/About'
import Description from '@/components/Catalog/Description/Description'
import Project from '@/components/Catalog/Project/Project'
import Steps from '@/components/Steps/Steps'
import Footer from '@/components/Footer/Footer'
import PopupThank from '@/components/popup/PopupThank'
import PopupCount from '@/components/popup/PopupCount'
import { electricianDescription, electricianFon, electricianProjects, electricianSubTitle, electricianTitle, electricianTitle2 } from '@/image/photo/Catalog/electrician/electrician'


const CatalogPage = () => {
    useEffect(() => {
		try{ 
			if (!localStorage.getItem('Language')) {
				localStorage.setItem('Language', 'EN')
			}
		} catch (e) {
			console.log()
		}

		window.scrollTo({
			top: 0,
		})
	}, [])

    const [menuThank, setMenuThank] = useState(false)
	const [menuCount, setMenuCount] = useState(false)

    return (
        <>
            <Header setMenuCount={setMenuCount}/>
            <About fon={electricianFon} title={electricianTitle} subtitle={electricianSubTitle} setMenuCount={setMenuCount}/>
            <Description currentPage={electricianTitle} title={electricianTitle2} description={electricianDescription} />
            <Project projects={electricianProjects} />
            <Steps setMenuCount={setMenuCount}/>
            {menuThank ? <PopupThank  setMenuThank={setMenuThank}/> : ''}
            {menuCount ? <PopupCount setMenuCount={setMenuCount} setMenuThank={setMenuThank}/> : ''}
        </>
    )
}

export default CatalogPage