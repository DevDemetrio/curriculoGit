import {styled} from "styled-components"
import ContainerPhoto from "../ContainerPhoto";
import SocialMedia from "../SocialMedia";
import PersonalInformation from "../PersonalInformation";



const BarColor = styled.header`
  background-color: #3b4252;  

`
const Container = styled.div`
    width: 28.125rem;
    height: 64rem;
    padding-top: 30px;
`
const DevDescription = styled.section`
  margin: 0 auto;
  padding: 0 50px;


  p{
    margin: 23px auto 23px auto;
    color: #8190A5;
  }
  h1{
    margin-top: 33px;
    color: #ECEFF4;
  }
  span{
    color: #ECEFF4;
  }
`


const SideBar = ({photo, name, socialName, description, 
                  followrs, following, stars, organization, location, email, webSite, twitter }) =>{
    return(
    <BarColor>
        <Container>
            <ContainerPhoto photo={photo}/>
            <DevDescription>
              <h1>{name}</h1>
              <span>{socialName}</span>
              <p>{description}</p>
            </DevDescription>
            <SocialMedia followrs={followrs}  
                         following={following} 
                         stars={stars}/>
            <PersonalInformation organization={organization} 
                                 location={location} 
                                 email={email} 
                                 webSite={webSite} 
                                 twitter={twitter}


            />
        </Container>
    </BarColor>
    )

}

export default SideBar;