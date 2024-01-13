
import organizationImg from "../../assets/icones/organization.png";
import locationImg from "../../assets/icones/location.png";
import emailImg from "../../assets/icones/email.png";
import webSiteImg from "../../assets/icones/webSite.png"
import TwitterImg from "../../assets/icones/twitter.png"
import {styled} from "styled-components"



const ContainerPersonal = styled.section`
     margin-top: 38px;
`

const PersonalItems = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    margin: 0 auto 10px auto;
    gap: 8px;
    padding: 0 20px;

    img{
        width: 25px;
        height: 25px;
    }
    
    span{
        font-size: 20px;
        color: #ECEFF4;
    }
    
`

const PersonalInformation = ({organization, location, email, webSite, twitter}) =>{
    return(
        <ContainerPersonal>
            <PersonalItems>
                <img src={organizationImg} alt="" />
                <span>{organization}</span>
            </PersonalItems>
            <PersonalItems>
                <img src={locationImg} alt="" />
                <span>{location}</span>
            </PersonalItems>
            <PersonalItems>
                <img src={emailImg} alt="" />
                <span>{email}</span>
            </PersonalItems>
            <PersonalItems>
                <img src={webSiteImg} alt="" />
                <span>{webSite}</span>
            </PersonalItems>
            <PersonalItems>
                <img src={TwitterImg} alt="" />
                <span>{twitter}</span>
            </PersonalItems>
        </ContainerPersonal>
    )
}

export default PersonalInformation 


