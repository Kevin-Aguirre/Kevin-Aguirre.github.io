export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between fixed top-0 bg-gray-900 text-white font-bold">
            <p className='text-3xl p-2 my-2 mx-6'>
            Kevin Aguirre
            </p>
            <ul>
                <a className='mr-8' href='#about'>About Me</a>
                <a className='mr-8' href='#projects'>Projects</a>
                <a className='mr-8' href='#experience'>Experience</a>
                <a className='mr-8' href='#resume'>Resume</a>
                <a className='mr-8' href='#contactme'>Contact Me</a>
            </ul>
        </nav>
    )
}