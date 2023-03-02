import React,{useContext,useEffect,useState} from "react";
import axios from 'axios';
const AppContext=React.createContext();

const allMealsUrl='https://www.themealdb.com/api/json/v1/1/search.php?s=a';
const randomMealsUrl='https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider=({children})=>{

  
  const [meals,setMeals]=useState([])
  const [loading,setLoading]=useState(false);
  const [searchTerm,setSearchTerm]=useState('');
  const [showModal,setShowModal]=useState(false); 
  const [selectedMeal,setSelectedMeal]=useState(null);

  
    const fetchMeals=async(url)=>{
      setLoading(true);
      try {
        const {data}=await axios(url)

        if(data.meals){
            setMeals(data.meals);
        }else{
          setMeals([]);
        }
       
      } catch (error) {
        console.log(error);
      }
       setLoading(false);
    }

  const fetchRandomMeal=()=>{
    fetchMeals(randomMealsUrl);
    console.log(fetchMeals(randomMealsUrl))
  }

  const selectMeal=(idMeal,favoriteMeal)=>{
    console.log(idMeal);
    let meal;
    meal=meals.find((meal)=>meal.idMeal === idMeal)
    setSelectedMeal(meal)
    setShowModal(true);
  }

  const closeModal=()=>{
    setShowModal(false)
  }

    useEffect(()=>{

    fetchMeals(allMealsUrl);
  },[])

  
  useEffect(()=>{
   if(!searchTerm) return 
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  },[searchTerm])
  
  return  <AppContext.Provider value={{loading,meals,setSearchTerm,fetchRandomMeal,showModal,selectedMeal,selectMeal,selectedMeal,closeModal }}>
    {children}
  </AppContext.Provider>
}

export const useGloBalContext=()=>{

  return useContext(AppContext)
}
export {AppContext,AppProvider};