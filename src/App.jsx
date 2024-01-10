import GlobalStyles from './components/EstilosGlobais'
import SideBar from './components/SideBar'
import { useState } from 'react'



function App() {

const [photo, setPhoto] = useState("https://avatars.githubusercontent.com/u/81098797?v=4")
const [name, serName] = useState("Demétrio do Nascimento Lopes")
const [socialName, setSocialName] = useState("@username")
const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.")

  return (
    <>
    <GlobalStyles />
    <SideBar photo={photo} name={name} socialName={socialName} description={description}/>
    </>
  )
}

export default App
