
import useFetchData from './hooks/useFetchData.js'
import logo from './logo.svg';
import './App.css';


function App() {
  const case_studies_ep = process.env.REACT_APP_CASE_STUDIES;
  const cat_ep = process.env.REACT_APP_CATEGORIES;
  
  const case_studies = useFetchData(case_studies_ep);
  const categories = useFetchData(cat_ep);

  console.log(case_studies);
  console.log(categories);

  return (
    <div className="App">
      <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
