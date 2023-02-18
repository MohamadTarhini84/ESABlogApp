import {   BrowserRouter,Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './scenes/global/Sidebar';
import Dashborad from './scenes/dashborad';
import { useState } from "react";


//pages & components
import Home from './pages/Home';


import User from './pages/User';

import Topbar from './scenes/global/Topbar';
import HAdmins  from'./pages/HAdmins';



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
  <BrowserRouter>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
           
          <main className='content'>
            
            <Topbar setIsSidebar={setIsSidebar} />
        

       
        
       
        
          <Routes>
           
            <Route 
           path="/"
             element={<Dashborad />}
            />
             <Route 
             path="/Home"
             element={<Home />}
            />
              <Route 
              path="/User"
             element={<User />}
             /> 
              <Route 
              path="/HAdmins"
             element={<HAdmins />}
             /> 
            
       </Routes>
       
     
     </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
