import { useState } from "react";
import TimelineBranchLeft from "./TimelineBranchLeft";
import TimelineBranchRight from "./TimelineBranchRight";

const experiences = [
    {
        time: "Fall 2022",
        title: "Enrolled in College",
        description: "In Fall 2022 I enrolled in a Computer Science B.S. program at New York University, Tandon School of Engineering.",
        imagePath: require("../images/nyu2.png")
    }, 
    {
        time: "Fall 2023",
        title: "Joined NYU HSRN VIP",
        description: "I joined the NYU HSRN (High Speed Research Network) VIP team where I developed unit tests using Jest to test frontend components and server functions, and did full-stack web development. ",
        imagePath: require("../images/hsrn-vip.jpeg")
    },
    {
        time: "Summer 2024",
        title: "Software Engineering Intern",
        description: "I was a Software Engineering Intern in Summer 2024 for 4Human Corporation, a non-profit organization that devloped software solutions for other non-profit organziations. I worked on an e-commerce website where I developed an admin dashboard that allows administrators to query users, manage inventory, and track orders using Next.js and React.js",
        imagePath: require("../images/4human.png")
    },
    {
        time: "Summer 2024",
        title: "Course Assistant",
        description: "I was a Course Assistant for NYU's Center for K12 Stem Education. I assisted in two courses named SoSC (Science of Smart Cities) and CACTUS (Code, Arduino, CAD, Tech, User Systems) where I taught students about how to create Arduino circuits and develop CAD models. In this context we taught about various city-realted topics such as  Transportataion, Infrastructure, Energy, and Wireless Communication and how these topics can be related into various fields of engineering.",
        imagePath: require("../images/k12.png")
    }, 
    {
        time: "Fall 2024",
        title: "Peer Tutor",
        description: "I was a Peer Tutor for the NYU TRIO Scholars Program. I conducted one-on-one tutoring for various courses such as Introduction to Programming & Problem Solving, Data Structures & Algorithms, and Discrete Mathematics.",
        imagePath: require("../images/trio.png")
    }
]

function EmptySpace() {
    return (
        <div className="w-80 flex-grow"></div>
    )
}

function ExperienceCard({time, title, description, imagePath}) {

    return (
        <div className="w-80 flex flex-col items-left flex-grow rounded">
            <div className="flex flex-row items-left bg-gray-900 items-center">
                <img
                    src={imagePath}
                    className="h-20 items-center bg-white"
                />
                <div className="p-1 flex-grow">
                    <h1 className="font-bold text-white px-2 pb-1 text-2xl">
                        {time}
                    </h1>
                    <hr className="px-2"/>
                    <h1
                        className="font-bold text-white px-2 pt-1 text-2xl"
                    >
                        {title}
                    </h1>
                </div>
            </div>
            <p className="bg-gray-700 text-white rounded-b-lg font-bold p-2 ">
                {description}
            </p>
        </div>
    )
}

export default function Experience() {

    const experienceElements = experiences.map((exp, i) => {
        console.log(typeof exp.imagePath);
        return (
        
        <div className="flex flex-row items-center justify-center w-full">
            {
                i % 2 === 0
                ?
                <>
                    <ExperienceCard
                        time={exp.time}
                        title={exp.title}
                        description={exp.description}
                        imagePath={exp.imagePath}
                    />
                    <TimelineBranchLeft/>
                    <EmptySpace/>
                </>
                :
                <>
                    <EmptySpace/>
                    <TimelineBranchRight/>
                    <ExperienceCard
                        time={exp.time}
                        title={exp.title}
                        description={exp.description}
                        imagePath={exp.imagePath}
                    />
                </>
            }
        </div>
    )})


    return (
        <section className='px-20 py-10 border-t-2 border-solid border-white bg-indigo-950 flex flex-col' id="experience">
            
            <h1 className="text-center text-5xl font-bold text-white inline-block border border-solid border-white border-4 py-4 px-4 rounded mx-auto">
                Experiences
            </h1>
            <div className="flex flex-col items-center justify-center">
                {experienceElements}
            </div>
            <h1 className="text-center text-5xl font-bold text-white inline-block border border-solid border-white border-4 py-4 px-4 rounded mx-auto">
             to be continued :)
            </h1>
        </section>
    )    
}