import React from "react";


export default function Resume() {

    return (
        <section className='flex flex-col rounded px-80 py-20 border-t-2 border-solid border-white bg-indigo-950' id='resume'>
            <h1 className="text-center text-white font-bold text-5xl">
                Resume
            </h1>
            <hr className="my-8"/>
            <iframe 
                title="resume"
                src={require("../documents/censored_resume.pdf")}
                style={{
                    minHeight: '70vh', // Adjust the minHeight as needed
                    height: '1400px',    // Set height in vh units to make it responsive
                    width: '100%',     // Ensure the width is always 100% of the parent                
                }}
            />            
        </section>
    )
}