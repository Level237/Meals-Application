
import { useGloBalContext } from '../Context';
const Meals = () => {
  const {meals} = useGloBalContext();

  return <section className='section-center'>
    {meals.map((singleMeal)=>{
    const {idMeal,strMeal:title,strMealThumb:image}=singleMeal;  
    return <article key={idMeal} className="single-meal">
    <img src={image} className="img"/>
      <footer>
        <h5>{title}</h5>
        <button className='like-btn'>click Me</button>
      </footer>
    </article>
    })}
    
  </section>
}
export default Meals;