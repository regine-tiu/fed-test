
import useFetchData from './hooks/useFetchData.js'
import './global.sass';
import header_asset from "./assets/asset2.svg"


function App() {
  const case_studies_ep = process.env.REACT_APP_CASE_STUDIES;
  const cat_ep = process.env.REACT_APP_CATEGORIES;
  
  const case_studies = useFetchData(case_studies_ep);
  const categories = useFetchData(cat_ep);

  console.log(case_studies);
  console.log(categories);

  return (
    <div className='page'>
      <img src={header_asset} alt=""/> 
      <div className="content-wrapper">
      <header className="page-header">
       <h1>Work</h1>
      </header>

      
      
      </div>
    </div>
  );
}

export default App;
