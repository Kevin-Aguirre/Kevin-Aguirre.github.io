export default function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 text-white font-bold rounded-lg shadow-md bg-white/10 backdrop-blur-lg">
            <ul>
                <a className='mr-8' href='#about'>About Me</a>
                <a className='mr-8' href='#projects'>Projects</a>
                <a className='mr-8' href='#experience'>Experience</a>
                <a href='#resume'>Resume</a>
            </ul>
        </nav>
    )
}