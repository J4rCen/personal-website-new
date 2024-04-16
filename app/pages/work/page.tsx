"use client"

import "./style.scss"
import Image from "next/image"
import Navigation from "@/ui/navigation/page"
import list from "./list_with_projects.json"
import {useState } from "react"

interface informationProjectProps {
    images: string
    Description: string
    Possibilities: Array<string>
    Stack: string
    Link: string
    GitLink: string
}

export default function Work() {

    const [informationProject, setInformationProject] = useState({} as informationProjectProps) 

    function  f(el: HTMLElement) {
        //@ts-ignore
        if(list.Projects[`${el.textContent}`]) {
            //@ts-ignore
            setInformationProject(list.Projects[`${el.textContent}`])
        }
    }

    const WithDynamicImage = (image: string) => {
        return (
            <Image 
                src={image}
                alt="Picture of the author"
                placeholder = 'empty'
                className="Work__information__project__image"
                sizes="(max-width: 1000px) 300px, (min-width: 1000px) 700px"
                width={0}
                height={0}
            />
        )
    }

    return (
        <>
            <Navigation/>
        
            <div className="Work bg_color_black font_ChakraPetch">
                <div className="Work__information">
                    <div className="Work__information__project">
                        <div className="font_size_30px text_color_white Work__information__project__image_wrap Work__information__project__image">
                            {   informationProject.images
                                ? WithDynamicImage(informationProject.images as string)
                                : "Select project"
                            }
                        </div>
                        <div className="Work__information__project__des">
                            <h1 className="Work__information__project__des__title font_size_30px text_color_yellow">Project Description</h1>
                            <div className="font_size_24px Work__information__project__des__info">
                                <p><span className="text_color_yellow">Description: </span> <span className="text_color_white">{informationProject.Description}</span></p>
                                <div>
                                    <p><span className="text_color_yellow">Possibilities: </span></p>
                                    <ul className="Work__information__project__des__list">
                                        {   informationProject.Possibilities
                                            ? informationProject.Possibilities.map((el, index) => <li className="text_color_white Work__information__project__des__list__element" key={index}>{el}</li>)
                                            : ""
                                        }
                                    </ul>
                                </div>
                                <p><span className="text_color_yellow">Stack: </span> <span className="text_color_white">{informationProject.Stack}</span></p>
                                <div className="Project__link">
                                    <a target="blank" href={informationProject.Link} className="text_color_yellow">Project link</a>
                                    <a target="blank" href={informationProject.GitLink} className="text_color_yellow">GitHub link</a>    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Work__information__project_list">
                        <h1 className="text_color_yellow font_size_30px Work__information__project_list__title">List of projects</h1>
                        <ul onClick={el => f(el.target as any)} className="Work__information__project_list__list text_color_white font_size_24px">
                            <li className="Work__information__project_list__element">Etalon pet food</li>
                            <li className="Work__information__project_list__element">Messenger</li>
                            <li className="Work__information__project_list__element">Old Personal site</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}