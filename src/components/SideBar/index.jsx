import {styled} from "styled-components"
import ContainerPhoto from "../ContainerPhoto";


const Bar = styled.header`
  width: 28.125rem;
  height: 64rem;
  padding-top: 30px;
  background-color: #3b4252;  

`
const DevName = styled.h1`
  display: block;
  
`

const SideBar = ({photo, name}) =>{
    return(
    <Bar>
      <ContainerPhoto photo={photo}/>
      <DevName>
        {name}
      </DevName>
    </Bar>
    )

}

export default SideBar;