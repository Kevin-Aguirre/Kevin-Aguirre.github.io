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
        description: (
            <div>
                I joined the&nbsp;
                <a rel="noreferrer" target="_blank" className="underline text-blue-500" href="https://vip.hsrn.nyu.edu/">NYU High Speed Research Network VIP </a>
                team where I developed unit tests using Jest to test frontend components and server functions, and did full-stack web development.
            </div>
        ),
        imagePath: require("../images/hsrn-vip.jpeg")
    },
    {
        time: "Summer 2024",
        title: "Software Engineering Intern",
        description: (
            <div>
                I was a Software Engineering Intern in Summer 2024 for&nbsp;
                <a rel="noreferrer" target="_blank" className="underline text-blue-500" href="https://www.4human.co/">4Human Corporation</a>
                , a non-profit organization that devloped software solutions for other non-profit organziations. I worked on an e-commerce website where I developed an admin dashboard that allows administrators to query users, manage inventory, and track orders using Next.js and React.js.
            </div>
        ),
        imagePath: require("../images/4human.png")
    },
    {
        time: "Summer 2024",
        title: "Course Assistant",
        description: (
            <div>
                I was a Course Assistant for NYU's&nbsp;
                <a rel="noreferrer" target="_blank" className="underline text-blue-500" href="https://engineering.nyu.edu/academics/programs/k12-stem-education">Center for K12 Stem Education</a>
                . I assisted in two courses named&nbsp;
                <a rel="noreferrer" target="_blank" className="underline text-blue-500" href="https://engineering.nyu.edu/academics/programs/k12-stem-education/science-smart-cities-sosc">SoSC (Science of Smart Cities) </a>
                and CACTUS (Code, Arduino, CAD, Tech, User Systems) where I taught students about how to create Arduino circuits and develop CAD models. In this context we taught about various city-realted topics such as  Transportataion, Infrastructure, Energy, and Wireless Communication and how these topics can be related into various fields of engineering.
            </div>
        ),
        imagePath: require("../images/k12.png")
    }, 
    {
        time: "Fall 2024",
        title: "Peer Tutor",
        description: (
            <div>
                I was a Peer Tutor for the&nbsp;
                <a rel="noreferrer" target="_blank" className="underline text-blue-500" href="https://engineering.nyu.edu/academics/undergraduate/trio">NYU TRIO Scholars Program</a>
                . I conducted one-on-one tutoring for various courses such as Introduction to Programming & Problem Solving, Data Structures & Algorithms, and Discrete Mathematics.
            </div>
        ),
        imagePath: require("../images/trio.png")
    }, 
    {
        time: "Fall 2024",
        title: "Research Software Developer",
        description: (
            <div>
                I assisted in research at&nbsp;
                <a rel="noreferrer" target="_blank" className="underline text-blue-500" href="https://ssl.engineering.nyu.edu/">NYU's Secure Systems Lab </a>
                by developing&nbsp;
                <a rel="noreferrer" target="_blank" className="underline text-blue-500" href="https://github.com/gittuf/gittuf?tab=readme-ov-file">gittuf</a>
                . Specificially, I developed an interface that allows users to upload their gittuf repository information and view delegations and rules as a network. I also developed feature that checks whether given keys are authorized to modify a specific path in the repository based on the repository rules.
            </div>
        ),
        imagePath: require("../images/ssl_lock.png")
    }, 
    {
        time: "Summer 2025",
        title: "Software Engineering Intern",
        description: (
            <div>
                I joined Broadcom's Mainframe Software Division as a Software Engineering Intern on the Mainframe Resource Intelligence Team. 
            </div>
        ),
        imagePath: require("../images/broadcom.png")
    }
]

function EmptySpace() {
    return (
        <div className="w-80 flex-grow"></div>
    )
}

function ExperienceCard({time, title, imagePath, children}) {
    return (
        <div className="w-80 flex flex-col items-left flex-grow rounded">
            <div className="flex flex-row items-left bg-gray-900 items-center">
                <img
                    alt="failed to load"
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
                {children}
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
                        imagePath={exp.imagePath}
                    >
                        {exp.description}
                    </ExperienceCard>
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
                        imagePath={exp.imagePath}
                    >
                        {exp.description}
                    </ExperienceCard>
                </>
            }
        </div>
    )})


    return (
        <section className='py-10 flex flex-col' id="experience">
            
            <h1 className="text-center text-5xl font-bold text-white inline-block border-solid border-white border-4 py-4 px-4 rounded mx-auto">
                Experiences
            </h1>
            <div className="flex flex-col items-center justify-center">
                {experienceElements}
            </div>
            <h1 className="text-center text-5xl font-bold text-white inline-block border-solid border-white border-4 py-4 px-4 rounded mx-auto">
             to be continued :)
            </h1>
        </section>
    )    
}