import { useState, useEffect } from 'react';
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

  const [label, setLabel] = useState("all")

  const [cat, setCat] = useState([])

  const [activeCS, setActiveCS] = useState([])

  useEffect(() => { 
   setActiveCS( cs_arr?.filter( cs => cs.categories[0].slug === label))
  },[label]);

  useEffect(() => {
    setCat(cat_arr)
    setActiveCS(cs_arr)
  },[]);

return (
    <div className='page'>
      <img src={header_asset} alt=""/> 
      <div className="page-wrapper">
        <header className="page-header">
        <h1>Work</h1>
        </header>
        <ul className='cat-row'>
          {cat?.map(cat => <li><button className='cat-btn' key={cat.id} onClick={() => setLabel(cat.slug)}>{cat.title}</button></li>)}
        </ul>
        <hr className='cat-after-line'></hr>
        <div className='project-gallery'>
          {activeCS?.map(project => <ProjectCard project={project} key={project.id} />)}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
