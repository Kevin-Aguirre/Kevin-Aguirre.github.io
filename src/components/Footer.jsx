export default function Footer() {
    return (
        <footer className='bg-gray-700'>
            <div className='pt-6 pb-6 ml-auto mr-auto flex flex-row justify-around max-w-xs'>
            <a href='google.com'>
                <img className='max-h-8 max-w-10' src={require('../images/mail.png')}>
                </img>
            </a>
            <a href='https://www.linkedin.com/in/kevin-a-aguirre/'>
                <img className='max-h-8 max-w-10' src={require('../images/linkedin.png')}>
                </img>
            </a>
            <a href='https://github.com/Kevin-Aguirre'>
                <img className='max-h-8 max-w-10' src={require('../images/github-logo.png')}>
                </img>
            </a>
            </div>
        </footer>
    )
}