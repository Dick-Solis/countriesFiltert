import styled from "@emotion/styled";
import imgExample from "../../assets/logoExample.jpg"

//#region
  const ContainerCard = styled.div`
    width: 250px;
    /* height: 150px; */
    display: flex;
    border-radius: 25px;
    background-color: #ffffff;
    overflow: hidden;
    flex-direction: column;
  `;

  const StyledImage = styled.img`
    width: 100%;
    height: 120px;
  `;

  const StyledEmoji = styled.h2`
    font-size: 40px;
  `;

  const ContainerDescription = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    height: 60px;
    padding:0 0 0 15px;
    /* justify-content: center; */
  `;

  const StyledNameCountry = styled.h4`
    color: #009AB6;
    font-weight: bold;
  `;
//#endregion

export function CardCountry({...props}){
  const {element} = props;
  return(
    <ContainerCard>
      <StyledImage src={imgExample}/>
      <ContainerDescription>
        <StyledEmoji>{element.emoji}</StyledEmoji>
        <div>
          <StyledNameCountry>{element.name}</StyledNameCountry>
          <h6>{element.continent.name}</h6>
        </div>
      </ContainerDescription>
    </ContainerCard>
  )
}