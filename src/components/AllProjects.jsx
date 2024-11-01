import { useEffect, useState } from "react"
import Project from "./Project" 
import Loading from "./Loading";
import { fetchRepos } from "../lib";


export default function AllProjects({isAuthenticated}) {
  const [loading, setLoading] = useState(true); 
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchRepos(isAuthenticated)
      setProjects(data)
      setLoading(false)
    } 
    loadProjects()
  }, [])
  
  const projectElements = projects.map((proj) => {
    return (
      <Project
        name={proj.title}
        images={proj.images}
        videoLink={proj.videoLink}
        githubLink={proj.githubLink}
        description={proj.description}
      />
    )
  })


  return (
    <section className='px-20 py-10 border-t-2 border-solid border-white bg-indigo-950' id='projects'>
        <div className='flex flex-col'>
          <h1 className='p-5 bg-gray-900 text-center font-bold text-white text-4xl'>
            Projects
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-700'>   
          {
            loading ? <Loading/> : projectElements 
          }         
          </div>
        </div>
      </section>
    )

  }