
import useFetchData from './hooks/useFetchData.js'
import logo from './logo.svg';
import './global.sass';


function App() {
  const case_studies_ep = process.env.REACT_APP_CASE_STUDIES;
  const cat_ep = process.env.REACT_APP_CATEGORIES;
  
  const case_studies = useFetchData(case_studies_ep);
  const categories = useFetchData(cat_ep);

  console.log(case_studies);
  console.log(categories);

  return (
    <div className="page">
      <header className="page-header">
       <h1>Work</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
