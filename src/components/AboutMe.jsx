import { ABOUT_ME_DESCRIPTION } from '../constants';

export default function AboutMe() {

    return (
        <section className='pb-10' id='about'>
            <h1 className='text-white text-3xl font-bold bg-gray-900 p-5 text-center rounded-tl rounded-tr'>
                About Me
            </h1>
            <div className='px-4 flex flex-row justify-between bg-gray-700 rounded-bl rounded-br p-2'>
                <p className='px-40 text-center text-white font-bold text-2xl'>
                    {ABOUT_ME_DESCRIPTION}
                </p>
            </div>
        </section>
    )
}