import GlobalStyles from './components/EstilosGlobais'
import SideBar from './components/SideBar'
import { useState } from 'react'



function App() {

const [photo, setPhoto] = useState("https://avatars.githubusercontent.com/u/81098797?v=4")
const [name, serName] = useState("Demétrio do Nascimento Lopes")

  return (
    <>
    <GlobalStyles />
    <SideBar photo={photo} name={name}/>
    </>
  )
}

export default App
