import './App.css'
import { useGloBalContext } from './Context';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
export default function App() {
  const {showModal} = useGloBalContext();
  return (
    <main>
      <Search />
      {/* <Favorites /> */}
      


      <Meals />
    {showModal && <Modal />}
    </main>
  )
}
