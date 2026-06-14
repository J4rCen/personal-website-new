'use client'

import Link from "next/link";
import Image from "next/image";
import close from "public/close.png"
import menu from "public/menu.png"
import ru from "public/russia.png"
import en from "public/united-states.png"
import "./style.scss"
import { useEffect, useRef, useState } from "react";
import SendForm from "./send-form";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n'

export default function Navigation() {
	const [visibilityNavigation, setVisibilityNavigation] = useState(true)
	const [languageVisibility, setLanguageVisibility] = useState(false)
	const [dropUp, setDropUp] = useState(false);
	const triggerRef = useRef<any>(null);
	const dropdownRef = useRef<any>(null);
	const {t} = useTranslation()

	useEffect(() => {
		if (languageVisibility && triggerRef.current && dropdownRef.current) {
			const triggerRect = triggerRef.current.getBoundingClientRect();
			const dropdownHeight = dropdownRef.current.offsetHeight;
			const spaceBelow = window.innerHeight - triggerRect.bottom;
			const spaceAbove = triggerRect.top;

			if (spaceBelow < dropdownHeight && spaceAbove >= dropdownHeight) {
				setDropUp(true);
			} else {
				setDropUp(false);
			}
		}
	}, [languageVisibility]);

	function NavigationMenuButton() {
		return (
			<div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<div className="Navigation_Menu_Button" onClick={() => setVisibilityNavigation(!visibilityNavigation)}>
					<Image
						src={visibilityNavigation ? menu : close}
						alt="Close Menu"
						height={35}
						width={35}
					/>
				</div>
				<div className="Navigation_Menu_Language" ref={triggerRef}>
					<div
						className="Navigation_Menu_Language_Select"
						onClick={() => setLanguageVisibility(!languageVisibility)}
					>
						<Image
							src={i18n.language === 'ru' ? ru : en}
							alt="language"
							width={26}
							height={22}
						/>
						<p>{t('navigation.lan')}</p>
					</div>

					{languageVisibility && (
						<div
							className={`Navigation_Menu_Language_Dropdown ${dropUp ? 'drop-up' : 'drop-down'}`}
							ref={dropdownRef}
						>
							<ul>
								<li>
									<div
										className="Navigation_Menu_Language_Dropdown_item"
										onClick={() => {
											i18n.changeLanguage('ru')
											setLanguageVisibility(false);
										}}
									>
										<Image src={ru} alt="language" width={26} height={22} />
										<p>Рус</p>
									</div>
								</li>
								<li>
									<div
										className="Navigation_Menu_Language_Dropdown_item"
										onClick={() => {
											i18n.changeLanguage('en');
											setLanguageVisibility(false);
										}}
									>
										<Image src={en} alt="language" width={26} height={22} />
										<p>Eng</p>
									</div>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		)
	}

	if (visibilityNavigation) {
		return (
			<nav className={`Navigation_Menu bg_color_black font_ChakraPetch`}>
				{NavigationMenuButton()}
			</nav>
		)
	} else {
		return (
			<nav className={`Navigation_Menu bg_color_black Navigation_Menu__Open font_ChakraPetch ${visibilityNavigation ? "hidden" : ""}`}>
				<div className="Navigation_Menu__Link">
					<Link className="Navigation_Link text_color_white" href='/'>{t('navigation.aboutMe')}</Link>
					<Link className="Navigation_Link text_color_white" href='/pages/work'>{t('navigation.works')}</Link>
					<a className="Navigation_Link text_color_white underline" target="blank" 
						href={t('navigation.link')}
					>
						{t('navigation.resume')}
					</a>
				</div>

				<div className="Navigation_Menu__Contacts">
					<div className="Navigation_Menu__Contacts_Link">
						<a className="text_color_yellow underline" target="blank" href='https://linkedin.com/in/danil-davletov-97b5422b8'>Linkedin</a>
						<a className="text_color_yellow underline" target="blank" href='https://github.com/J4rCen?tab=repositories'>GitHub</a>
						<a className="text_color_yellow underline" target="blank" href='https://web.telegram.org/k/#@spb_d_davletov'>Telegram</a>
					</div>

					<SendForm />
				</div>

				{NavigationMenuButton()}
			</nav>
		)
	}


} 