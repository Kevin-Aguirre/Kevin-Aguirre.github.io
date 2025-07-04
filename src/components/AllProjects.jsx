import Project from "./Project" 


export default function AllProjects() {

  const projects = [
    {
      "title": "Workout Tracker",
      "description": "This project is a workout tracker made using React.js, Node.js, and MongoDB. It features user authentication, the ability for users to add specific workouts, and the ability to create/keep track of goals. When adding a workout, users can specify the type of exercise, as well as how many sets and reps they completed. This project is useful for those who want to keep track of their workouts.",
      "videoLink": "",
      "showOnPortfolio": true,
      "screenshotsPath": "documentation/",
      "githubLink": "https://github.com/Kevin-Aguirre/Fitness-Tracker",
      "images": [
        "https://raw.githubusercontent.com/Kevin-Aguirre/Fitness-Tracker/main/documentation/add-workout.png",
        "https://raw.githubusercontent.com/Kevin-Aguirre/Fitness-Tracker/main/documentation/view-workouts.png"
      ]
    },
    {
      "title": "LeetCode Scraper",
      "description": "This project is a Python script that asks users which LeetCode study plans they would like to study and then scrapes Leetcode for the associated problems. The application uses a GUI made using Qt to ask the user which study plans they want to fetch as well as their preferred programming language. The script then makes a folder for each study plan, a folder for each problem-type within that study-plan, and multiple files (with the user's preferred language) that has the question, and associated code-snippet for each problem. This project is useful for those who don't want to work on LeetCode from the website directly, and instead work locally. This is also useful if one wishes to make a git repository for LeetCode problems.",
      "videoLink": "",
      "showOnPortfolio": true,
      "screenshotsPath": "media/",
      "githubLink": "https://github.com/Kevin-Aguirre/leetcode-scraper",
      "images": [
        "https://raw.githubusercontent.com/Kevin-Aguirre/leetcode-scraper/main/media/gui-interface.png",
        "https://raw.githubusercontent.com/Kevin-Aguirre/leetcode-scraper/main/media/gui-result.png",
        "https://raw.githubusercontent.com/Kevin-Aguirre/leetcode-scraper/main/media/new-plans.png"
      ]
    },
    {
      "title": "QuickLook",
      "description": "QuickLook is a full-stack project made using Next.js, React.js, Spring Boot, and PostgreSQL. This application is for when users are scrolling online and they find a term they would like to learn more about. Instead of clicking multiple links and searching for an explanation, QuickLook users OpenAI's API to have ChatGPT generate a summary. Users can organize phrases into sets.",
      "videoLink": "",
      "showOnPortfolio": true,
      "screenshotsPath": "src/media/readme/",
      "githubLink": "https://github.com/Kevin-Aguirre/QuickLook-Frontend",
      "images": [
        "https://raw.githubusercontent.com/Kevin-Aguirre/QuickLook-Frontend/main/src/media/readme/dashboard.png",
        "https://raw.githubusercontent.com/Kevin-Aguirre/QuickLook-Frontend/main/src/media/readme/emptyset.png",
        "https://raw.githubusercontent.com/Kevin-Aguirre/QuickLook-Frontend/main/src/media/readme/login.png",
        "https://raw.githubusercontent.com/Kevin-Aguirre/QuickLook-Frontend/main/src/media/readme/register.png",
        "https://raw.githubusercontent.com/Kevin-Aguirre/QuickLook-Frontend/main/src/media/readme/summary.png"
      ]
    }
  ]
  
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
    <section className='py-10' id='projects'>
        <div className='flex flex-col'>
          <h1 className='p-5 bg-gray-900 text-center font-bold text-white text-4xl'>
            Projects
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-700'>   
          {projectElements}         
          </div>
        </div>
      </section>
    )

  }