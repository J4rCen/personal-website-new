"use client"
import { Trans } from 'react-i18next'
import './style.scss'
import Navigation from "@/ui/navigation/page"
import list from "./list_of_information.json"
import { useState } from "react"
import { useTranslation } from 'react-i18next'
import i18n from '@/i18n'

export default function AboutMe() {
    const [responsibilities, setResponsibilities] = useState([])
    const {t} = useTranslation()

    let language = i18n.language

    function f(el: string) {
        // @ts-ignore
        setResponsibilities(list[language].Responsibilities[`${el}`])
    }

    return (
        <>
            <Navigation />
            <div className="AboutMe bg_color_black">
                <div className="AboutMe__Information font_ChakraPetch">
                    <div className="AboutMe__Information_description">
                        <Trans
                            i18nKey={'aboutMe.aboutMeInformation'}
                            components={{
                                span: <span className="text_color_yellow"/>,
                                p: <p className="AboutMe__Information_description_p text_color_white"/>
                            }}
                        />
                    </div>
                    <div className="AboutMe__Skills">
                        <h1 className="AboutMe__Skills_Title text_color_white">{ t('aboutMe.skills') }</h1>
                        <div className="AboutMe__Skills__List">
                            {
                                list.skillsElement.map(el => <p className="AboutMe__Skills__skills_element text_color_yellow" key={el}>{el}</p>)
                            }
                        </div>
                    </div>
                </div>

                <div className="indentation"></div>

                <div className="AboutMe__Experience font_ChakraPetch">
                    <div className="AboutMe__Experience__Education">
                        <h1 className="AboutMe__Experience__Title  text_color_yellow">{ t('aboutMe.education')}</h1>
                        <div className="AboutMe__Experience__List">
                            {   
                                // @ts-ignore
                                list[language].Education.map(el =>
                                    <div className="AboutMe__Experience__List_Item" key={el.name}>
                                        <p className="text_color_yellow">{el.name}</p>
                                        <p className=" text_color_white">{el.des}</p>
                                        <p className=" text_color_white">{el.date}</p>
                                    </div>)
                            }
                        </div>

                    </div>

                    <div className="AboutMe__Experience__Certificates">
                        <h1 className="AboutMe__Experience__Title  text_color_yellow">{t('aboutMe.certificates')}</h1>
                        <div className="AboutMe__Experience__List">
                            {
                                // @ts-ignore
                                list[language].Certificates.map(el =>
                                    <div className="AboutMe__Experience__List_Item" key={el.name}>
                                        <a className="AboutMe__Experience__List_Item_a text_color_yellow" href={el.href} target="blank"><p>{el.name}</p></a>
                                        <p className=" text_color_white">{el.des}</p>
                                        <p className=" text_color_white">{el.date}</p>
                                    </div>)
                            }
                        </div>
                    </div>

                    <div className="AboutMe__Experience__Work_Experience">
                        <h1 className="AboutMe__Experience__Title  text_color_yellow">{t('aboutMe.experience')}</h1>
                        <div className="AboutMe__Experience__List">
                            {
                                // @ts-ignore
                                list[language].Experience.map(el =>
                                    <div className="AboutMe__Experience__List_Item" key={el.name}>
                                        <p className="text_color_yellow AboutMe__Experience__List_Item__name" onClick={() => f(el.des)}>{el.name}</p>
                                        <p className=" text_color_white">{el.des}</p>
                                        <p className=" text_color_white">{el.date}</p>
                                    </div>)
                            }
                        </div>
                    </div>

                    <div className="AboutMe__Experience__Responsibilities">
                        <h1 className="AboutMe__Experience__Title  text_color_yellow">{t('aboutMe.responsibilities')}</h1>
                        <div className="AboutMe__Experience__Responsibilities__List">
                            <ul className="AboutMe__Experience__Responsibilities__List__ul">
                                {
                                    responsibilities.length === 0 ? <p className=" text_color_white">{t('aboutMe.responsibilitiesChoose')}</p> :
                                    responsibilities.map((el, index) => <li className=" AboutMe__Experience__Responsibilities__List__li text_color_white" key={index}>{el}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}