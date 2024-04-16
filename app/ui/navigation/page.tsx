'use client'

import Link from "next/link";
import Image from "next/image";
import close from "public/close.png"
import menu from "public/menu.png"
import "./style.scss"
import { useState } from "react";
import SendForm from "./send-form";

export default function Navigation() {
    const [visibilityNavigation, setVisibilityNavigation] = useState(true)

    function NavigationMenuButton() {
        return (
            <div className="Navigation_Menu_Button" onClick={() => setVisibilityNavigation(!visibilityNavigation)}>
                <Image
                 src={visibilityNavigation ? menu : close}
                 alt="Close Menu"
                 height={35}
                 width={35}
                />
            </div>
        )
    }

    if (visibilityNavigation) {
       return (
        <nav className={ `Navigation_Menu bg_color_black font_ChakraPetch`}>
            {NavigationMenuButton()}
        </nav>
       ) 
    } else {
        return (
            <nav className={`Navigation_Menu bg_color_black Navigation_Menu__Open font_ChakraPetch ${visibilityNavigation ? "hidden" : ""}`}>
                <div className="Navigation_Menu__Link">
                    <Link className="Navigation_Link text_color_white" href='/'>About Me</Link>
                    <Link className="Navigation_Link text_color_white" href='/pages/work'>Work</Link>
                    <a className="Navigation_Link text_color_white underline" target="blank" href='https://drive.google.com/file/d/1tkno_kTMN-7gtjhy0W6JZ5R0NNVqYhYw/view?usp=sharing'>Resume</a>
                </div>
                
                <div className="Navigation_Menu__Contacts">
                    <div className="Navigation_Menu__Contacts_Link">
                        <a className="text_color_yellow underline" target="blank" href='https://linkedin.com/in/danil-davletov-97b5422b8'>Linkedin</a>
                        <a className="text_color_yellow underline" target="blank" href='https://github.com/J4rCen?tab=repositories'>GitHub</a>
                        <a className="text_color_yellow underline" target="blank" href='https://web.telegram.org/k/#@spb_d_davletov'>Telegram</a>
                    </div>
                    
                    <SendForm/>
                </div>
    
                {NavigationMenuButton()}
            </nav>
        )
    }

    
} 