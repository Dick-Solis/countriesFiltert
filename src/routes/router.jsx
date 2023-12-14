import { Route,Routes } from "react-router-dom";
import { PageCountries } from "../pages/countriesPage";

export function MyRoutes(){
  return(
    <Routes>
      <Route path="/" element={<PageCountries/>}/>
    </Routes>
  )
}