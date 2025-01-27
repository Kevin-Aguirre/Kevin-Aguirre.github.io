export default function AboutMe() {

    return (
        <section className='flex flex-col rounded px-20 pb-10 pt-40 border-t-2 border-solid border-white bg-indigo-950' id='about'>
            <h1 className='text-white text-4xl font-bold bg-gray-900 p-5 text-center rounded-tl rounded-tr'>
                About Me
            </h1>
            <div className='flex flex-row justify-between bg-gray-700 rounded-bl rounded-br p-2'>
                <img className='max-w-full rounded-full h-52' alt='failed to load headshot' src={require('../images/headshot.png')}></img>
                <div className='px-4'>
                    <h1 className='text-center font-bold text-white text-3xl py-3'>Hey!</h1>
                    <p className='px-40 text-center text-white font-bold text-2xl'>
                    Hi! My name is Kevin Aguirre. I'm currently a Junior at New York University, Tandon School of Engineering studying Computer Science. I'm passionate about Software Development, Data Science, and Cybersecurity. I'm currently looking for Software Development internships for Summer 2025. On my spare time, I like to work on personal projects, do calisthenics, go on runs, make Arduino circuits, and play video games.
                    </p>  
                </div>
            </div>
        </section>
    )
}