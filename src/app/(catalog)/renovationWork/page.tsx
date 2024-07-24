'use client'

import Header from '@/components/Header/Header'
import { useEffect, useState } from "react"
import About from '@/components/Catalog/About/About'
import Description from '@/components/Catalog/Description/Description'
import Project from '@/components/Catalog/Project/Project'
import Steps from '@/components/Steps/Steps'
import PopupThank from '@/components/popup/PopupThank'
import PopupCount from '@/components/popup/PopupCount'
import { renowationWorkDescription, renowationWorkFon, renowationWorkProjects, renowationWorkSubTitle, renowationWorkTitle, renowationWorkTitle2 } from '@/image/photo/Catalog/renovationWork/renowationWork'


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
            <About fon={renowationWorkFon} title={renowationWorkTitle} subtitle={renowationWorkSubTitle} setMenuCount={setMenuCount}/>
            <Description currentPage={renowationWorkTitle} title={renowationWorkTitle2} description={renowationWorkDescription} />
            <Project projects={renowationWorkProjects} />
            <Steps setMenuCount={setMenuCount}/>
            {menuThank ? <PopupThank  setMenuThank={setMenuThank}/> : ''}
            {menuCount ? <PopupCount setMenuCount={setMenuCount} setMenuThank={setMenuThank}/> : ''}
        </>
    )
}

export default CatalogPage