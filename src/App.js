import { useState, useEffect } from 'react';
import useFetchData from './hooks/useFetchData.js'
import './global.sass';
import ProjectCard from './components/ProjectCard';
import header_asset from "./assets/asset2.svg"
import footer_asset from "./assets/asset3.svg"
import sidebar_asset from "./assets/asset1.svg"

// fetching data endpoints
const case_studies_ep = process.env.REACT_APP_CASE_STUDIES;
const cat_ep = process.env.REACT_APP_CATEGORIES;

function ProjectPage() {  
  // fetching data with hooks (data:{})
  const cs_data = useFetchData(case_studies_ep);
  const cat_data = useFetchData(cat_ep);

  // accessing Case Studies & Category Objects
  const cs_arr = cs_data['data']['case-studies']
  const cat_arr = cat_data['data']['categories']

  // setting default label, categories & active case studies state
  const [label, setLabel] = useState("all")  
  const [cat, setCat] = useState([])
  const [activeCS, setActiveCS] = useState([])

  // if default label = "all", display all projects in cs_arr; else, display projects with the corresponding label 
  useEffect(() => { 
    if (label === "all") {setActiveCS(cs_arr)}
    else { setActiveCS( cs_arr.filter( cs => cs.categories[0].slug === label))}
  },[label]);
   
  // add an "All" category in front of list of categories
  useEffect(() => { 
    cat_arr.unshift({"title":"All","slug":"all"})
    setCat(cat_arr)
  },[]);
 
return ( 
    <div className='page'> 
      <div className='asset-top'>
        <img src={header_asset} alt="" className='green-dots'/>
      </div>
      <div className="page-wrapper">
        <header className="page-header"> 
        <h1>Work</h1>
        </header>
        <ul className='cat-row'>
          {cat.map(cat => <li><button className='cat-btn' key={cat.id} onClick={() => setLabel(cat.slug)}>{cat.title}</button></li>)}
        </ul>
        <hr className='cat-after-line'></hr>
        <div className='project-gallery'>
          {activeCS.map(project => <ProjectCard project={project} key={project.id} />)}
        </div>
      </div>
      <div className='asset-bottom'> 
        <img src={footer_asset} alt="" className='dot-circle'/>
        <img src={sidebar_asset} alt="" className='half-circle'/>
      </div>
    </div>
  );
}
 
export default ProjectPage;
