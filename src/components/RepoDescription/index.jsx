import {styled} from "styled-components"

import starsImg from '../../assets/icones/star2.png'

const SectionRepo = styled.section`
    margin-top: 25px;

    h2{
        font-size: 40px;
    }

    div{
        display: flex;
        gap: 10px;
    }
    div img{
        display: block;
        width: 20px;
        height: 20px; 
    }
    
`

const RepoDescription = ({name, description, uploadDay}) =>{
    return(
        <SectionRepo>
        <h2>{name}</h2>
        <p>{description}</p>
        <div>
        <img src={starsImg} alt="" />
            <p>{uploadDay}</p>
        </div>
        </SectionRepo>
    )
}

export default RepoDescription;