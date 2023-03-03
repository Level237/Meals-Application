import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
const randomMealsUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider = ({ children }) => {


  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites,setFavorites]=useState([]);

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url)

      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }

    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const fetchRandomMeal = () => {
    fetchMeals(randomMealsUrl);
    console.log(fetchMeals(randomMealsUrl))
  }

  const selectMeal = (idMeal, favoriteMeal) => {

    let meal;
    meal = meals.find((meal) => meal.idMeal === idMeal)
    setSelectedMeal(meal)
    setShowModal(true);
  }

  const closeModal = (idMeal) => {
    setShowModal(false)
  }

  const addToFavorites=(idMeal)=>{
    console.log(idMeal)
    const alreadyFavorites= favorites.find((meal)=>meal.idMeal === idMeal);
    if(alreadyFavorites) return 
    const meal=meals.find((meal)=>meal.idMeal === idMeal);
    const updatedFavorites=[...favorites,meal];
    setFavorites(updatedFavorites)
    
  }

   const removeFromFavorites=(idMeal)=>{
    const updatedFavorites=favorites.filter((meal)=>meal.idMeal !== idMeal);
     setFavorites(updatedFavorites);
  }

  useEffect(() => {

    fetchMeals(allMealsUrl);
  }, [])


  useEffect(() => {
    if (!searchTerm) return
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm])

  return <AppContext.Provider value={{ loading, meals, setSearchTerm, fetchRandomMeal, showModal, selectedMeal, selectMeal, selectedMeal, closeModal,addToFavorites,removeFromFavorites,favorites}}>
    {children}
  </AppContext.Provider>
}

export const useGloBalContext = () => {

  return useContext(AppContext)
}
export { AppContext, AppProvider };