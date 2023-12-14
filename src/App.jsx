import styled from "@emotion/styled";
import { MyRoutes } from "./routes/router";
// import { ComponentSideBar } from "./components/sidebar/SideBar";


//#region
  const ContentPage = styled.div`
    display: flex;
  `
//#endregion

function App() {
  return (
    <ContentPage>
      {/* <ComponentSideBar/> */}
      <MyRoutes/>
    </ContentPage>
  )
}

export default App
