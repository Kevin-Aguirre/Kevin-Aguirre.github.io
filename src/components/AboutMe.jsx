import { useEffect, useState } from 'react';
import Loading from './Loading';

function getDescFromReadme(md) {
    const mdLines = md.split('\n')
    const descIndex = mdLines.indexOf('## About Me') + 1
    return mdLines[descIndex]
}

async function fetchDescription() {
    const descRes = await fetch("https://api.github.com/repos/Kevin-Aguirre/Kevin-Aguirre/contents/README.md", {
        headers: {'Authorization' : `token ${process.env.REACT_APP_GITHUB_TOKEN}`}
    })
    const descData = await descRes.json()
    const descContent = atob(descData.content.replace(/\n/g, ''));
    return getDescFromReadme(descContent)    

}

export default function AboutMe() {
    const [loading, setLoading] = useState(true)
    const [description, setDescription] = useState('')

    useEffect(() => {
        const loadDescription = async () => {
            const desc = await fetchDescription()
            setDescription(desc)
            setLoading(false);
        }
        loadDescription()
    }, [])


    return (
        <section className='flex flex-col rounded px-20 pb-10 pt-40 border-t-2 border-solid border-white bg-indigo-950' id='about'>
            <h1 className='text-white text-4xl font-bold bg-gray-900 p-5 text-center rounded-tl rounded-tr'>
                About Me
            </h1>
            <div className='flex flex-row justify-between bg-gray-700 rounded-bl rounded-br p-2'>
                <img className='max-w-full rounded-full h-52' src={require('../images/headshot.png')}></img>
                <div className='px-4'>
                {
                    loading 
                    ? 
                    <Loading/> 
                    : 
                    <>
                        <h1 className='text-center font-bold text-white text-3xl py-3'>Hey!</h1>
                        <p className='px-40 text-center text-white font-bold text-2xl'>
                            {description}
                        </p> 
                    </>
                }     
                </div>
            </div>
        </section>
    )
}