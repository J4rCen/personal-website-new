"use client"

import "./style.scss"
import Navigation from "@/ui/navigation/page"
import list from "./list_of_information.json"
import { useEffect, useState } from "react"

export default function AboutMe() {
    const [responsibilities, setResponsibilities] = useState([])
    
    useEffect(() => {}, [responsibilities])

    function f(el: string) {
        // @ts-ignore
        setResponsibilities(list.Responsibilities[`${el}`])
    }

    return (
        <> 
            <Navigation/>
            <div className="AboutMe bg_color_black">
                <div className="AboutMe__Information font_ChakraPetch">
                    <div className="AboutMe__Information_description">
                        <p className="AboutMe__Information_description_p text_color_white">
                            Hello everyone! <br/>
                            My name is Danil, a <span className="text_color_yellow">Full-stack</span> developer 
                            with <span className="text_color_yellow">three years</span>  of freelance <span className="text_color_yellow">experience</span>. Currently, 
                            I am looking for an opportunity to join a company where 
                            I can continue to grow and develop as a professional.
                        </p>
                    </div>
                    <div className="AboutMe__Skills">
                        <h1 className="AboutMe__Skills_Title text_color_white">Skills</h1>
                        <div className="AboutMe__Skills__List">
                            {list.skillsElement.map(el => <p className="AboutMe__Skills__skills_element text_color_yellow" key={el}>{el}</p>)}
                        </div>
                    </div>
                </div>

                <div className="indentation"></div>

                <div className="AboutMe__Experience font_ChakraPetch">
                    <div className="AboutMe__Experience__Education">
                        <h1 className="AboutMe__Experience__Title  text_color_yellow">Education</h1>
                        <div className="AboutMe__Experience__List">
                            {
                                list.Education.map(el => 
                                <div className="AboutMe__Experience__List_Item" key={el.name}> 
                                    <p className="text_color_yellow">{el.name}</p> 
                                    <p className=" text_color_white">{el.des}</p> 
                                    <p className=" text_color_white">{el.date}</p> 
                                </div>)
                            }
                        </div>
                        
                    </div>

                    <div className="AboutMe__Experience__Certificates">
                        <h1 className="AboutMe__Experience__Title  text_color_yellow">Certificates</h1>
                        <div className="AboutMe__Experience__List">
                            {
                                list.Certificates.map(el => 
                                <div className="AboutMe__Experience__List_Item" key={el.name}> 
                                    <a className="AboutMe__Experience__List_Item_a text_color_yellow" href={el.href} target="blank"><p>{el.name}</p></a>
                                    <p className=" text_color_white">{el.des}</p> 
                                    <p className=" text_color_white">{el.date}</p> 
                                </div>)
                            }
                        </div>
                    </div>

                    <div className="AboutMe__Experience__Work_Experience">
                        <h1 className="AboutMe__Experience__Title  text_color_yellow">Experience</h1>
                        <div className="AboutMe__Experience__List">
                            {
                                list.Experience.map(el => 
                                <div className="AboutMe__Experience__List_Item" key={el.name}> 
                                    <p className="text_color_yellow AboutMe__Experience__List_Item__name" onClick={() => f(el.name)}>{el.name}</p> 
                                    <p className=" text_color_white">{el.des}</p> 
                                    <p className=" text_color_white">{el.date}</p> 
                                </div>)
                            }
                        </div>
                    </div>

                    <div className="AboutMe__Experience__Responsibilities">
                        <h1 className="AboutMe__Experience__Title  text_color_yellow">Responsibilities</h1>
                        <div className="AboutMe__Experience__Responsibilities__List">
                            <ul className="AboutMe__Experience__Responsibilities__List__ul">
                                {
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