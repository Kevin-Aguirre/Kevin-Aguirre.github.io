import { INTRODUCTION_EXPERIENCE, NAME, INTRODUCTION_TITLE } from '../constants';
import '../index.css'

export default function Introduction() {
    return (
        <section className='py-80'>
            <div className='typed-name-div'>
                <p className='typed-name-p'>{NAME}</p>
                <p className='text-xl text-center text-white font-bold'>{INTRODUCTION_TITLE}</p>
                <p className='pb-4 text-center text-white font-bold'>{INTRODUCTION_EXPERIENCE}</p>
                <div className='pt-6 pb-6 ml-auto mr-auto flex flex-row justify-around max-w-xs'>
                    <a rel="noreferrer" target='_blank' href='mailto:kaa9659@nyu.edu'>
                        <img 
                            alt='E-mail' 
                            className='max-h-8 max-w-10' 
                            src={require('../images/mail.png')} 
                        />
                    </a>
                    <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/kevin-a-aguirre/'>
                        <img 
                            alt='LinkedIn' 
                            className='max-h-8 max-w-10' 
                            src={require('../images/linkedin.png')} 
                        />
                    </a>
                    <a rel="noreferrer" target='_blank' href='https://github.com/Kevin-Aguirre'>
                        <img 
                            alt='GitHub' 
                            className='max-h-8 max-w-10' 
                            src={require('../images/github-logo.png')} 
                        />
                    </a>
                </div>
            </div>
        </section>   
    )
}