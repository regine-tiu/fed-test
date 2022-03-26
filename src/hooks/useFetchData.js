import { useEffect, useState} from 'react';
import axios from "axios"; 

const useFetchData = (endpoint) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(endpoint);
        setData(response);
      } catch (error) {
        console.error(error)
      }
    };
    fetchData();
  },[]);

  return {
    data
  };
};

export default useFetchData;
  