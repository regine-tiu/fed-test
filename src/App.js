import useFetchData from './hooks/useFetchData.js'
import './global.sass';
import header_asset from "./assets/asset2.svg"
import ProjectCard from './components/ProjectCard';

const case_studies_ep = process.env.REACT_APP_CASE_STUDIES;
const cat_ep = process.env.REACT_APP_CATEGORIES;

function ProjectPage() {  
  const cs_data = useFetchData(case_studies_ep);
  const cat_data = useFetchData(cat_ep);
  const cs_arr = cs_data['data']['case-studies']
  const cat_arr = cat_data['data']['categories']

 console.log(cs_arr)

  return (
    <div className='page'>
      <img src={header_asset} alt=""/> 
      <div className="page-wrapper">
        <header className="page-header">
        <h1>Work</h1>
        </header>
        <ul className='cat-row'>
          {cat_arr.map(cat => <li>{cat.title}</li>)}
        </ul>
        <hr className='cat-after-line'></hr>
        <div className='project-gallery'>
          {cs_arr.map(project => <ProjectCard project={project} />)}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
