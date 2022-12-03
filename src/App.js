import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({})

  const getData = async() => {
    try {

      const { data } = await axios.get(`${process.env.REACT_APP_URL}/react`)
      setData(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getData()

  },[])

  return (
    <div>
      <h1>Hello!!!!</h1>
      <h2>{data.message}</h2>
    </div>
  );
}

export default App;
