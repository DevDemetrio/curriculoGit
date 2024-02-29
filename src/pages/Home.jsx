import { styled } from "styled-components"

const Articlebg = styled.article `
  background-color: #FAFAFA;
`
const InputText = styled.input`
  width: 400px;
  height: 50px;
  padding-left: 23px;
  border: 1px solid #3B4252;
  border-radius: 5px;
`
const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const Form = styled.form`
  display: flex;
`

const Home = () => {
  return(
     <Articlebg>
         <DivContainer>
            <Form>
                <label>
                    <InputText type="text" value="Type the username here..." />
                </label>
                <input type="button"/>
            </Form>
         </DivContainer>
     </Articlebg>   
  )
}


export default Home