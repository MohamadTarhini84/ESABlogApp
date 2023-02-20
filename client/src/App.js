import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Post from './components/post/Post';

// pages & components
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NavBar from './components/navBar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Messages from './components/popups/messages'
import SearchPage from './pages/SearchPage';
import Navbar from './components/navBar';
// import Profile from './pages/profile/Profile'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
      <div className="Layout">
        {user && <NavBar/>}
        <div className='flex text-xs'>
        <div className="pages w-full">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Navigate to='/home' /> : <Navigate to="/login" /> }
            />
            <Route
              path="/home"
              element={user ? <Home/> : <Navigate to='/login'/>}
            />
            {/* <Route
              path="/Profile" 
              element={<Profile />} 
            /> */}
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/search" 
              element={<SearchPage />} 
            />
            <Route 
              path="/post/:postId"
              element={<Post/>}
            />
          </Routes>
        </div>
        {user && <Messages/>}
        {user && <LeftBar className='self-start'/>}
        {user && <RightBar className='self-end'/>}
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
