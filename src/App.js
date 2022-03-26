import useFetchData from './hooks/useFetchData.js'
import './global.sass';
import header_asset from "./assets/asset2.svg"


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
      <div className="content-wrapper">
      <header className="page-header">
       <h1>Work</h1>
      </header>
      <div className='project-gallery'>
        {cs_arr.map(project => <div className='project-card'><img src={project.thumbnail} alt="project thumbnail"/></div>)}
      </div>
      </div>
    </div>
  );
}

export default ProjectPage;
