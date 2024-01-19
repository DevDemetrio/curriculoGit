import followrsImg from '../../assets/icones/pessoas.png';
import followingImg from '../../assets/icones/coracao2.png'
import starsImg from '../../assets/icones/star2.png'
import {styled} from "styled-components"


const SocialContainer = styled.section`
    display: flex;
    justify-content: space-between;
    width: 350px;
    margin: 0 auto;
`
const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    margin-right:10px ;
    color: #ECEFF4;
    img{
        width: 15px;
        height: 15px; 
    }
    span{
        margin: 0 4px 0 4px;
    }
    h2{
        font-size: 14px;
    }
   
`

const SocialMedia = ({followrs, following, stars}) => {
    return(
        <SocialContainer>
            
            <ContainerImg>
            <img src={followrsImg} alt="teste" />
            <span>{followrs}</span>
            <h2>Followrs</h2>
            </ContainerImg>

            <ContainerImg>
            <img src={followingImg} alt="" />
            <span>{following}</span>
            <h2>following</h2>
            </ContainerImg>

            <ContainerImg>
            <img src={starsImg} alt="" />
            <span>{stars}</span>
            <h2>stars</h2>
            </ContainerImg>

        </SocialContainer>
    )
}

export default SocialMedia;