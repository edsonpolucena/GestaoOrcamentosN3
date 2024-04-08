import React, {useState} from "react";
import styled from "styled-components";
import bg from './img/bg.png';
import {MainLayout} from './styles/layouts'
import Orb from './components/Orb/Orb'
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [active, setActive] = useState(1)

  return (
    <AppStyled bg={bg}className="App">
      <Orb/>
      <MainLayout>
      {<Navigation  active={active} setActive={setActive}/>}
        <main>
          
        </main>
      </MainLayout>
   
      </AppStyled>
  
    
  );
}
const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg});
position: relative;
main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3x solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0;
  }
}
`;

export default App;
