import {GITHUB_USERNAME} from './constants.js'


/*
takes a README.md file as a string, parses through it, 
and returns a JSON object with the project title, 
the project description, a link to a video demo, 
a boolean of whehter or not the project should be shwon 
on the portfolio, and a relative path of teh repository ot 
where the screenshots are stored.  
*/
export function parseReadme(md) {
  
  const lines = md.split('\n');
  
  const title = lines[0].replace('#', '').trim();
  
  const description = lines[1].trim();
  
  const videoLine = lines[lines.indexOf('### Video Demo') + 1]; 
  let videoLink = videoLine.match(/\[Video\]\((.*?)\)/);
  videoLink = videoLink ? videoLink[1] : '';


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

/* 
takes a repository name, a filePath, which comes from parse readme ^, 
then makes a get request to the github api to get the url of the images 
which gets passed into the href of img elements somehwere
*/
export async function fetchImages(isAuthenticated, repo, path) {
  const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/contents/${path}`;

  try {
    const response = await fetch(url, {
        // headers: {'Authorization' : isAuthenticated ? `token ${process.env.REACT_APP_GITHUB_TOKEN}` : ''}
    });
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

/*
given a github username (will onyl work with mine because designed to work with my specific format), fetches the public 
repositories, and returns an array of json objects of the format in parse readme, as well as a githublink: string property and images: 
Array[String] proeprty which is the links of the images
*/ 
export async function fetchRepos(isAuthenticated) {
  let allProjectData = []

  const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
    // headers: {'Authorization' : isAuthenticated ? `token ${process.env.REACT_APP_GITHUB_TOKEN}` : ''}
  })
  const repos = await reposResponse.json()
  const activeRepos = repos.filter(repo => !repo.archived)

  for (const repo of activeRepos) {
    
    let readmeRes, readmeData, readmeContent
    try {
      readmeRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/contents/README.md`, {
        // headers: {'Authorization' : isAuthenticated ? `token ${process.env.REACT_APP_GITHUB_TOKEN}` : ''}        
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
      readmeJson.images = await fetchImages(isAuthenticated, repo.name, readmeJson.screenshotsPath)


      allProjectData.push(readmeJson)
    }   
  }

  return allProjectData
}

export function getDescFromReadme(md) {
    const mdLines = md.split('\n')
    const descIndex = mdLines.indexOf('## About Me') + 1
    return mdLines[descIndex]
}

export async function fetchDescription(isAuthenticated) {
    const descRes = await fetch("https://api.github.com/repos/Kevin-Aguirre/Kevin-Aguirre/contents/README.md", {
        // headers: {'Authorizatizon' : isAuthenticated ? `token ${process.env.REACT_APP_GITHUB_TOKEN}` : ''}
    })
    const descData = await descRes.json()
    const descContent = atob(descData.content.replace(/\n/g, ''));
    return getDescFromReadme(descContent)    

}