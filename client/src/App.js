import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import NavBar from './components/navBar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Messages from './components/popups/messages'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {

  const Layout=()=>{
    return (
      <div className="Layout">
        <NavBar/>
        <div className='flex text-xs p-10'>
            <Outlet/>
            <Messages/>
          <LeftBar className='self-start'/>
          <RightBar className='self-end'/>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<p>nothng to see here</p>
        },
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:'/Search',
          element:<SearchPage/>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
