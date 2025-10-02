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
import { useLanguage } from "@/contexts/userLanguage";

export default function Navigation() {
	const {language, setLanguage} = useLanguage()
	const [visibilityNavigation, setVisibilityNavigation] = useState(true)
	const [languageVisibility, setLanguageVisibility] = useState(false)
	const [dropUp, setDropUp] = useState(false);
	const triggerRef = useRef<any>(null);
	const dropdownRef = useRef<any>(null);

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
							src={language === 'ru' ? ru : en}
							alt="language"
							width={26}
							height={22}
						/>
						<text>{language === 'ru' ? 'Рус' : 'Eng'}</text>
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
											setLanguage('ru');
											setLanguageVisibility(false);
										}}
									>
										<Image src={ru} alt="language" width={26} height={22} />
										<text>Рус</text>
									</div>
								</li>
								<li>
									<div
										className="Navigation_Menu_Language_Dropdown_item"
										onClick={() => {
											setLanguage('en');
											setLanguageVisibility(false);
										}}
									>
										<Image src={en} alt="language" width={26} height={22} />
										<text>Eng</text>
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
					<Link className="Navigation_Link text_color_white" href='/'>{language === 'ru' ? 'Обо мне' : 'About Me'}</Link>
					<Link className="Navigation_Link text_color_white" href='/pages/work'>{language === 'ru' ? 'Работы' : 'Works'}</Link>
					<a className="Navigation_Link text_color_white underline" target="blank" 
						href={language === 'ru' ? 'https://drive.google.com/file/d/1omxndvb-I8mzHLbbsXENtfE7T5hK1Hj9/view?usp=sharing' : 'https://drive.google.com/file/d/1k7NYBNqih24SsJMgQjUYcGi4ihjH_X_F/view?usp=sharing'}
					>
						{language === 'ru' ? 'Резюме' : 'Resume'}
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