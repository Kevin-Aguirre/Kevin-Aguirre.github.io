import { useState } from "react"

import ProjectImagesModal from "./ProjectImagesModal"

export default function Project ({name, images, videoLink, githubLink, description}) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);


    return (
        <div className='border-solid border-black border-2 w-full flex flex-col'>
            <h1 className='text-center p-5 bg-indigo-900 text-white font-bold text-3xl'>
                {name}  
            </h1>
            <img 
                alt="View Project Screenshots"
                className='cursor-pointer max-w-full max-h-96' 
                src={images[0]}
                onClick={handleOpenModal}
            >
            </img>
            <div className='m-0 flex flex-col items-center'>
                <a className='no-underline bg-gray-800 text-white font-bold w-11/12 mx-auto block text-center rounded text-xl py-2 mt-2 mb-1' href={videoLink} rel="noreferrer" target='_blank'>
                    Video Demo
                </a>
                <a className='no-underline bg-gray-800 text-white font-bold w-11/12 mx-auto block text-center rounded text-xl py-2 my-2' rel="noreferrer" href={githubLink} target='_blank'>
                    Source Code
                </a>
            </div>
            <hr
                className="mx-2"
            />
            <div className='w-11/12 mx-auto my-4 text-white font text-xl'>
                {description}
            </div>
            <ProjectImagesModal
                isOpen={isModalOpen}
                handleClose={handleCloseModal}
                project={{
                    title: name,
                    description: description,
                    videoLink: videoLink,
                    images: images
                }}
            />
        </div>
    )

}