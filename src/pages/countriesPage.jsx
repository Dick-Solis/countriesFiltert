import styled from "@emotion/styled";
import Input from "../components/input/input";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { ALL_PAISES } from "../services/continents";
import { CardCountry } from "../components/card/cardCountrie";
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

  const StyledSection = styled.section`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 15px;
    justify-content: center;
    align-items: center;
  `;

//#endregion

export function PageCountries(){
  const [textSearch,setTextSearch] = useState("");
  const { cargando, error , data }=useQuery (ALL_PAISES);   
  const [filteredData, setFilteredData] = useState([]);

  if(cargando)return 'Cargando...';   
  if(error)return `¡Error! ${error.mensaje }`; 

  function handleInputChange(textSearchValue){
    const filteredResults = data.countries.filter((item) =>
      item.name.toLowerCase().indexOf(textSearchValue.toLowerCase()) === 0
    );
    setFilteredData(filteredResults);
  };
  
  return (
    <ContentPage>
      <StyledHeader>  
        <ContentInput>
          <Input
            name="countrySearch"
            label="País"
            placeholder="Escribe el País que deseas ver"
            onKeyUp={(event) => {
              setTextSearch(event.target.value)
              }}
            onChange={(event) => {
              handleInputChange(event.target.value)
              }}
          />
          <SytyledButton>
            <FaSearch />
            Buscar
          </SytyledButton>
        </ContentInput>
      </StyledHeader>
      <StyledSection>
        {textSearch && filteredData.map(element=>(
            <CardCountry key={element.name} element={element}/>
          )) || data && data.countries.map(element=>(
            <CardCountry key={element.name} element={element}/>
        ))}
      </StyledSection>
    </ContentPage>
  )
}