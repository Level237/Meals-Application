import './App.css'
import { useGloBalContext } from './Context';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
export default function App() {
  const { showModal, favorites } = useGloBalContext();
  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}



      <Meals />
      {showModal && <Modal />}
    </main>
  )
}
