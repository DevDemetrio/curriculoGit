import GlobalStyles from './components/EstilosGlobais'
import RepoDescription from './components/RepoDescription'
import SideBar from './components/SideBar'

import { useFetch } from './hooks/useFetch';


import {styled} from "styled-components";

import { useState, useEffect } from 'react'
import Home from './pages/Home';



const ContainerMain = styled.main`
  display: flex;
  gap: 70px;
  background: #FAFAFA;;
`


function App() {

const user = "devdemetrio"
const url = `https://api.github.com/users/${user}`
const urlFollowers = `https://api.github.com/users/${user}/followers`
const urlFollowing = `https://api.github.com/users/${user}/following`
const urlRepos =`https://api.github.com/users/${user}/repos`


const [photo, setPhoto] = useState(" ")
const [name, setName] = useState("")
const [socialName, setSocialName] = useState("@username")
const [description, setDescription] = useState(" ")

/*Social Media */
const [followrs, setFallowrs] = useState();
const [following, setFollowing] = useState();
const [stars, setStart] = useState(100);

/*Personal Information */
const [organization, setOrganization] = useState('empresa');
const [location, setLocation] = useState('');
const [email, setEmail] = useState(" ");
const [webSite, setWebSite] = useState("www.devdemetrio.com");
const [twitter, setTwitter] = useState("devDemetrio");


/*Repository Information */
const [uploadDay, setUploadDay] = useState("update 30 day 30 ago")

/*Repository Description */
const [repoName, setRepoName] = useState('');




const {data: followersData} = useFetch(urlFollowers);
useEffect(() =>{
  if(followersData){
    setFallowrs(followersData.length)
  }
  
},[followersData])

//useEffect(() =>{
//  async function getFollowers(){
//    try {
//      const res = await fetch(urlFollowers)
//      const followers = await res.json()
//      setFallowrs(followers.length)
//    } catch (error) {
//  
//        console.log(error)
//      }
//    
//   
//  }
//  getFollowers()
//},[])

useEffect(() =>{
  async function getFollowing(){
    const res = await fetch(urlFollowing)
    const following =  await res.json();

    setFollowing(following.length)
  }

  getFollowing()
},[])

useEffect(() =>{
  async function getData(){
    const res = await fetch(url)
    const data = await res.json()
     
    setPhoto(data.avatar_url)

    setName(data.name);
    setDescription(data.bio)
    setSocialName(data.login)

    setLocation(data.location)
    setWebSite(data.blog)

    setFollowing(data.following)
    setFallowrs(data.followers)


  }
  getData();
},[])

useEffect(() =>{
async function getRepos(){
    const res = await fetch(urlRepos);
    const  data = await res.json(); 

    setRepoName(data)

}
    getRepos()
    
},[]);

  return (
    <ContainerMain>
    <Home />      
    <GlobalStyles />
    <SideBar 
      photo={photo} name={name} 
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
  
      <RepoDescription 
      repoName={repoName} 
      />
    </ContainerMain>
  )
}

export default App
