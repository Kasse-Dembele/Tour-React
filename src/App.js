import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import Tours from './components/toursComponent'
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const url = "https://api.unsplash.com/search/photos?page=1&query=tours"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  
  const removeTour = (id)=>{
    const NewTour = tours.filter((tour)=>tour.id !==id)
    setTours(NewTour)
  }

  const fetchTours = async ()=>{
    setLoading(true)
    try {
      const response = await fetch(url,{headers:{Authorization:"Client-ID fwLlkB3hApJobnfzbRsDMCagDns9_AF7lA2w_T1f1Sw"}}) 
      const data = await response.json()
      setLoading(false)
      console.log(data);
      const result = data.results
      const dataFinal = result.map((item)=>{
        const {alt_description,description,id,urls} = item
        return{name:description, description:alt_description,id,image:urls.regular}
      })
      setTours(dataFinal)
      
    } catch (error) {
      console.log(error)
      setLoading(true)
    }
  }
  
  useEffect(()=>{fetchTours()}, [])
  
 

  if (loading) {
    return <main><MoonLoader color="blue" loading={true} css={override} size={150}/></main>
  }

  return (
    <main>
      <Tours data={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
