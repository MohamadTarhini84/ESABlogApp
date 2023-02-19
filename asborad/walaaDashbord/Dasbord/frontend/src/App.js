
import { BrowserRouter, Routes, Route , Navigate  } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './scenes/global/Sidebar';
import Dashborad from './scenes/dashborad';
import { useState } from "react";
import { useAuthContext } from './hooks/useAuthContext';


//pages & components
import Home from './pages/Home';


import User from './pages/User';

import Topbar from './scenes/global/Topbar';
import HAdmins  from'./pages/HAdmins';
import Login from'./pages/Login';


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const { admin } = useAuthContext()
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
          element={admin ? <Dashborad /> : <Navigate to='/login' />}
        />
        <Route
          path="/login"
          element={!admin ? <Login /> : <Navigate to='/' />}
        />
        {/* <Route 
           path="/login"
             element={<Login />}
            />
            <Route 
           path="/"
             element={<Dashborad />}
            /> */}
            <Route
          path="/Home"
          element={admin ? <Home /> : <Navigate to='/login' />}
        />
            
             {/* <Route 
             path="/Home"
             element={<Home />}
            /> */}
              {/* <Route 
              path="/User"
             element={<User />}
             /> 
          */}
         <Route
          path="/User"
          element={admin ? <User /> : <Navigate to='/login' />}
        />

              {/* <Route 
              path="/HAdmins"
             element={<HAdmins />}
             />  */}
              <Route
          path="/HAdmins"
          element={admin ? <HAdmins/> : <Navigate to='/login' />}
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
