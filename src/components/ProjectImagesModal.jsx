import { useState } from "react"

export default function ProjectImagesModal({isOpen, handleClose, project}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleLeftClick  = () => {
        setCurrentImageIndex((prevIndex) => {
            if (prevIndex !== 0) {
                return prevIndex - 1
            }
            return prevIndex
        })
    }

    const handleRightClick = () => {
        setCurrentImageIndex((prevIndex) => {
            if (prevIndex !== project.images.length - 1) {
                return prevIndex + 1
            }
            return prevIndex
        })
    } 


    return (
        <div
            className={`py-20 fixed inset-0 flex flex-col items-center justify-center bg-black/80 transition-opacity duration-500 ease-in-out ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div className={`p-3 bg-red-200 mx-60 transform transition-transform duration-500 ease-in-out ${isOpen ? "scale-100" : "scale-90"}`}>
                <h1 className="pb-6 text-white font-bold text-4xl text-center">
                    {project.title}
                </h1>
                <div className="flex flex-row items-center justify-center">
                    <button className="text-white font-bold text-8xl text-center px-8" onClick={handleLeftClick}>{'<'}</button>
                    <img className="w-auto h-[40rem]" src={project.images[currentImageIndex]} alt="modalopen!!!!" />
                    <button className="text-white font-bold text-8xl text-center px-8" onClick={handleRightClick}>{'>'}</button>               
                </div>
                <div className="pt-3 pb-5 text-white font-bold text-center text-3xl">
                    {currentImageIndex + 1} / {project.images.length}
                </div>
                <div className="text-white text-center text-2xl font-bold">
                    {project.description}
                </div>
                <button className="pt-8 text-gray-400 font-bold text-4xl w-full " onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    )
}