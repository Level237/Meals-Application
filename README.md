# Meals Application

#### Create A New Project in REPLIT

- login/register
- in the dashboard click "create"
- find react template
- click run
- change title in index.html


#### Get Assets 

- copy styles from /src/App.css
- copy README.md

#### Global Styles Info

#### Setup Structure

- create /src/components
- Favorites.jsx, Meals.jsx, Modal.jsx, Search.jsx
- create component (arrow function)
- setup basic return (component name)
- or my personal favorite "shake and bake"
- export default


```js
const Search = () => {
  return <h1>Dude, where is my car<h1>
}
export default Search
```

- import all of them in App.js
- setup following structure

```js

import './App.css'



import Search from './components/Search'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Favorites from './components/Favorites'

export default function App() {

  return (
    <main>
      <Search />
      <Favorites/>
      <Meals />
      <Modal />
    </main>
  )
}

```
- comment out Search, Favorites, Modal

```js
export default function App() {

  return (
    <main>
      {/* <Search /> */}  
      {/* <Favorites/>*/}  
      <Meals />
      {/*  <Modal /> */}  
    </main>
  )
}

```
