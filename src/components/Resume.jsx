export default function Resume() {

    return (
        <section className='flex flex-col py-20' id='resume'>
            <h1 className="text-center text-white font-bold text-5xl">
                Resume
            </h1>
            <hr className="my-8"/>
            <iframe 
                title="resume"
                src={require("../documents/censored_resume.pdf")}
                style={{
                    minHeight: '70vh',
                    height: '1400px',
                    width: '100%',
                }}
            />            
        </section>
    )
}