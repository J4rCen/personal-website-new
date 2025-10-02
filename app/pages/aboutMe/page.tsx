"use client"

import "./style.scss"
import Navigation from "@/ui/navigation/page"
import list from "./list_of_information.json"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/userLanguage"

export default function AboutMe() {
    const [responsibilities, setResponsibilities] = useState([])
    const {language} = useLanguage()
    

    useEffect(() => { }, [responsibilities, language])

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
                        {
                            language === 'ru' ?
                                <p className="AboutMe__Information_description_p text_color_white">
                                    Здравствуйте ! <br />
                                    Меня зовут Данил, я <span className="text_color_yellow">Frontend</span> разработчик <span className="text_color_yellow">с двухлетним</span> коммерческим <span className="text_color_yellow">опытом разработки</span> <br /> веб-приложений <span className="text_color_yellow">на React</span>,<br /> от создания переиспользуемых компонентов до интеграции с API и оптимизации производительности. <br />
                                    Хорошо разбираюсь в адаптивной вёрстке, UX/UI, умею быстро вливаться в проекты и эффективно взаимодействовать с командой.<br />
                                    Постоянно развиваюсь в профессии, изучаю современные подходы и инструменты фронтенд-разработки. <span className="text_color_yellow">Есть опыт публикации собственного проекта</span>, что помогает лучше понимать полный цикл разработки. <br />
                                </p> :
                                <p className="AboutMe__Information_description_p text_color_white">
                                    Hello! <br />
                                    My name is Danil, I’m a <span className="text_color_yellow">Frontend</span> developer <span className="text_color_yellow">with two years of commercial experience</span> building web applications <span className="text_color_yellow">using React</span> - from creating reusable components to integrating APIs and optimizing performance. I have a strong understanding of responsive design and UX/UI principles, and I quickly adapt to new projects and work effectively within a team.
                                    I'm continuously developing my skills, keeping up with modern front-end tools and practices. <span className="text_color_yellow">I also have experience publishing my own project</span>, which has helped me gain a better understanding of the full development cycle.
                                </p>
                        }
                    </div>
                    <div className="AboutMe__Skills">
                        <h1 className="AboutMe__Skills_Title text_color_white">{ language === 'ru' ? 'Навыки' :'Skills'}</h1>
                        <div className="AboutMe__Skills__List">
                            {
                                // @ts-ignore
                                list.skillsElement.map(el => <p className="AboutMe__Skills__skills_element text_color_yellow" key={el}>{el}</p>)
                            }
                        </div>
                    </div>
                </div>

                <div className="indentation"></div>

                <div className="AboutMe__Experience font_ChakraPetch">
                    <div className="AboutMe__Experience__Education">
                        <h1 className="AboutMe__Experience__Title  text_color_yellow">{language === 'ru' ? "Образование" : 'Education'}</h1>
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
                        <h1 className="AboutMe__Experience__Title  text_color_yellow">{language === 'ru' ? 'Сертификаты' : 'Certificates'}</h1>
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
                        <h1 className="AboutMe__Experience__Title  text_color_yellow">{language === 'ru' ? 'Опыт' :"Experience"}</h1>
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
                        <h1 className="AboutMe__Experience__Title  text_color_yellow">{language === 'ru' ? 'Обязанности' : 'Responsibilities'}</h1>
                        <div className="AboutMe__Experience__Responsibilities__List">
                            <ul className="AboutMe__Experience__Responsibilities__List__ul">
                                {
                                    responsibilities.length === 0 ? <p className=" text_color_white">{language === 'ru' ? 'Что-бы увидеть обязанности выберете должность из колонки опыта' : 'What to see the responsibilities choose a position from a column of experience'}</p> :
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