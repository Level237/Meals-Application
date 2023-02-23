import React,{useContext,useEffect,useState} from "react";
import axios from 'axios';
const AppContext=React.createContext();

const allMealsUrl='https://www.themealdb.com/api/json/v1/1/search.php?s=a';
const randomMealsUrl='www.themealdb.com/api/json/v1/1/random.php';

const AppProvider=({children})=>{
  const [meals,setMeals]=useState([])
  useEffect(()=>{
    const fetchMeals=async(url)=>{
      try {
        const {data}=await axios(url)
        console.log(data.meals);
       setMeals(data.meals);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMeals(allMealsUrl);
  },[])
  
  return  <AppContext.Provider value={{meals}}>
    {children}
  </AppContext.Provider>
}

export const useGloBalContext=()=>{

  return useContext(AppContext)
}
export {AppContext,AppProvider};