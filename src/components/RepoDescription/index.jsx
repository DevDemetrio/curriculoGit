import {styled} from "styled-components"

import starsImg from '../../assets/icones/star2.png'

const SectionRepo = styled.section`
    margin-top: 25px;

    h2{
        font-size: 40px;
    }

    div img{
        display: block;
        width: 20px;
        height: 20px; 
    }
    
`

const RepoDescription = ({repoName}) =>{
    return(
        <SectionRepo>
       
            {repoName && repoName.map((item) =>(
                <div key={item.id}>
                    <h3 >{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.updated_at}</p>
                    <hr />
                </div>
            ))}


            
        </SectionRepo>
    )
}

export default RepoDescription;