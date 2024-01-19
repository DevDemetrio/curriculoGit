import GlobalStyles from './components/EstilosGlobais'
import RepoDescription from './components/RepoDescription'
import SideBar from './components/SideBar'


import {styled} from "styled-components";

import { useState, useEffect } from 'react'


const ContainerMain = styled.main`
  display: flex;
  gap: 70px;
  background-color: antiquewhite;
`


function App() {


const url = "https://api.github.com/users/devdemetrio"
const [photo, setPhoto] = useState("https://avatars.githubusercontent.com/u/81098797?v=4")
const [name, setName] = useState()
const [socialName, setSocialName] = useState("@username")
const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.")

/*Social Media */
const [followrs, setFallowrs] = useState(200);
const [following, setFollowing] = useState(130);
const [stars, setStart] = useState(100);

/*Personal Information */
const [organization, setOrganization] = useState('empresa');
const [location, setLocation] = useState('Boa Vista');
const [email, setEmail] = useState("devdemetrio@gmail.com");
const [webSite, setWebSite] = useState("www.devdemetrio.com");
const [twitter, setTwitter] = useState("devDemetrio");


/*Repository Information */
const [uploadDay, setUploadDay] = useState("update 30 day 30 ago")

useEffect(() =>{
    async function getData(){
      const res = await fetch(url)
      const data = await res.json()

      setName(data);
    }

    getData();
},[])

  return (
    <ContainerMain>
    <GlobalStyles />
    <SideBar 
      photo={photo} name={name.login} 
      socialName={socialName} 
      description={description}
      followrs={followrs}
      following={following}
      stars={stars}

      organization={organization}
      location={location}
      email={email}
      webSite={webSite}
      twitter={twitter}
      
      />
      <RepoDescription name={name} description={description} uploadDay={uploadDay}/>
    </ContainerMain>
  )
}

export default App
