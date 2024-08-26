import { useEffect, useState } from "react"
import Project from "./Project" 
import Loading from "./Loading";

const GITHUB_USERNAME = "Kevin-Aguirre"

function parseReadme(md) {
  console.log(md);
  const lines = md.split('\n');
  
  const title = lines[0].replace('#', '').trim();
  
  const description = lines[1].trim();
  
  const videoLine = lines[lines.indexOf('### Video Demo') + 1]; 
  let videoLink = videoLine.match(/\[Video\]\((.*?)\)/);
  videoLink = videoLink ? videoLink[1] : '';

  console.log(lines);
  const portPropsLine = lines.indexOf('## Portfolio Properties')
  
  
  const showOnPortfolioLine = lines[portPropsLine + 1];
  
  const showOnPortfolio = showOnPortfolioLine.split('=')[1].trim() === 'true' ? true : false;

  const screenshotsPathLine = lines[portPropsLine + 2];
  const screenshotsPath = screenshotsPathLine.split('=')[1].trim();



  return {
    title,
    description,
    videoLink,
    showOnPortfolio,
    screenshotsPath
  };
}

async function fetchImages(repo, path) {
  const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/contents/${path}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const files = await response.json();
    
    // Filter out only image files (optional)
    const imageFiles = files.filter(file => file.name.endsWith('.png') || file.name.endsWith('.jpg') || file.name.endsWith('.jpeg'));

    // Extract the download URLs
    const imageUrls = imageFiles.map(file => file.download_url);
    return imageUrls;

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

async function fetchRepos() {
  let allProjectData = []

  const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
    // headers: {'Authorization' : `token ${process.env.REACT_APP_GITHUB_TOKEN}`}
  })
  const repos = await reposResponse.json()
  const activeRepos = repos.filter(repo => !repo.archived)

  for (const repo of activeRepos) {
    
    let readmeRes, readmeData, readmeContent
    try {
      readmeRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/contents/README.md`, {
        // headers: {'Authorization' : `token ${process.env.REACT_APP_GITHUB_TOKEN}`}        
      })
      readmeData = await readmeRes.json()
      readmeContent = atob(readmeData.content.replace(/\n/g, ''))
    } catch(e) {
      console.log(`Encountered an error fetching README.md for ${repo.name}`);
      continue;
    }

    let readmeJson
    try {
      readmeJson = parseReadme(readmeContent)
    } catch(e) {
      console.log(`README.md for ${repo.name} is not formtted as expected.`);
      continue;
    }

    if (readmeJson.showOnPortfolio) {

      readmeJson.githubLink = `https://github.com/${GITHUB_USERNAME}/${repo.name}`
      readmeJson.images = await fetchImages(repo.name, readmeJson.screenshotsPath)


      allProjectData.push(readmeJson)
    }   
  }

  return allProjectData
}

export default function AllProjects() {
  const [loading, setLoading] = useState(true); // CHANGE
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchRepos()
      setProjects(data)
      setLoading(false)
    } 
    // CHANGE
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
          
            {/* <Project
              name="LeetCode Web Scraper"
              imageRef={require('../images/leetcode-scraper-ss.png')}
              videoLink='https://www.youtube.com/'
              githubLink='https://github.com/Kevin-Aguirre/leetcode-scraper'
              description="This project is a Python script that asks users which LeetCode study plans they would like to study and then scrapes Leetcode for the associated problems. The application uses a GUI made using GUI to ask the user which study plans they want to fetch as well as their preferred programming language. The script then makes a folder for each study plan, a folder for each problem-type within that study-plan, and multiple files (with the user's preferred language) that has the question, and associated code-snippet for each problem. This project is useful for those who don't want to work on LeetCode from the website directly, and instead work locally. This is also useful if one wishes to make a git repository for LeetCode problems."

            />  
            <Project
              name="Workout Tracker"
              imageRef={require('../images/workout-tracker.png')}
              videoLink='https://www.youtube.com/'
              githubLink='https://github.com/Kevin-Aguirre/leetcode-scraper'
              description='This project is a workout tracker made using React.js, Node.js, and MongoDB. It features user authentication, the ability for users to add specific workouts, and the ability to create/keep track of goals. When adding a workout, users can specify the type of exercise, as well as how many sets and reps they completed. Tnis project is useful for those who want to keep track of their workouts. '
            />
            <Project
              name="QuickLook"
              imageRef={require('../images/quicklook.png')}
              videoLink='https://www.youtube.com/'
              githubLink='https://github.com/Kevin-Aguirre/leetcode-scraper'
              description="QuickLook is a full-stack project made using Next.js, React.js, Spring Boot, and PostgreSQL. This application is for when users are scrolling online and they find a term they would like to learn more about. Instead of clicking multiple links and searching for an explanation, QuickLook users OpenAI's API to have ChatGPT generate a summary. Users can organize phrases into sets."
            /> */}
          </div>
        </div>
      </section>
    )

  }