'use client'

import Header from '@/components/Header/Header'
import About from '@/components/Home/About/About'
import Experience from '@/components/Home/Experience/Experience'
import Quality from '@/components/Home/Quality/Quality'
import Services from '@/components/Home/Services/Services'
import PopupCount from '@/components/popup/PopupCount'
import PopupThank from '@/components/popup/PopupThank'
import Steps from '@/components/Steps/Steps'
import { useEffect, useState } from 'react'
import './globals.scss'

const Home = () => {
	useEffect(() => {
		try{ 
			if (!localStorage.getItem('Language')) {
				localStorage.setItem('Language', 'EN')
			}
		} catch (e) {
			console.log()
		}
	}, [])

	const [menuThank, setMenuThank] = useState(false)
	const [menuCount, setMenuCount] = useState(false)

	return (
		<>
			<Header setMenuCount={setMenuCount}/>
			<About setMenuThank={setMenuThank}/>
			<Services />
			<Quality />
			<Experience />
			<Steps setMenuCount={setMenuCount}/>
			{menuThank ? <PopupThank setMenuThank={setMenuThank} /> : ''}
			{menuCount ? <PopupCount setMenuCount={setMenuCount} setMenuThank={setMenuThank} /> : ''}
		</>
	)
}

export default Home