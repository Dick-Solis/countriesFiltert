import { gql } from "@apollo/client";

const ALL_PAISES = gql`
  query{
  	countries{
      name
      continent{
        name
      }
      emoji
    }
  }
`;

const ALL_PAISES_CONTINENT = gql`
  query FindCountriesContinent($codeContinent: String!){
  	continents(code:$codeContinent){
      countries{
        name
        continent{
          name
        }
        emoji
      }
    }
  }
`;