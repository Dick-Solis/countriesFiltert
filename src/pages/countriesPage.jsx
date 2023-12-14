import styled from "@emotion/styled";
import Input from "../components/input/input";
import { FaSearch } from "react-icons/fa";

//#region
  const ContentPage = styled.main`
    background-color: #28BDD155;
    width: 100%;
    min-height: 100vh;
  `;

  const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;  
    width: 100%;
    margin-top: 20px;
    padding: 0 20px;
  `;

  const ContentInput = styled.div`
    align-self: center;  
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    padding: 5px 10px;
    background-color: #ffffff;
    max-width: 700px;
    width: 100%;
  `;

  const SytyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #02A9FD;
    width: 120px;
    padding: 0 15px;
    height: 30px;
    gap: 10px;
    cursor: pointer;
    border-radius: 25px;
    border: none;
  `;
  
//#endregion

export function PageCountries(){
  return (
    <ContentPage>
      <StyledHeader>
        <ContentInput>
          <Input
            label="País"
            placeholder="Escribe el País que deseas ver"
          />
          <SytyledButton>
            <FaSearch />
            Buscar
          </SytyledButton>
        </ContentInput>
      </StyledHeader>
      <section>
        
      </section>
    </ContentPage>
  )
}