import {styled} from "styled-components"

const PhotoStyle = styled.div`
    width: 18.62rem;
    height: 18.62rem;
    margin: 0 auto;


    img{
        display: block;
        width: 100%;
    }
`


const ContainerPhoto = ({photo}) =>{
    return(
        <PhotoStyle>
            <img src={photo} alt="teste" />
        </PhotoStyle>
    )
}

export default ContainerPhoto;