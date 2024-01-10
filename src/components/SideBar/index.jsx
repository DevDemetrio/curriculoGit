import {styled} from "styled-components"
import ContainerPhoto from "../ContainerPhoto";


const Bar = styled.header`
  width: 28.125rem;
  height: 64rem;
  padding-top: 30px;
  background-color: #3b4252;  

`
const DevDescription = styled.section`
  display: block;
`

const SideBar = ({photo, name, socialName, description}) =>{
    return(
    <Bar>
      <ContainerPhoto photo={photo}/>
      <DevDescription>
        <h1>{name}</h1>
        <h2>{socialName}</h2>
        <p>{description}</p>
        
      </DevDescription>
    </Bar>
    )

}

export default SideBar;