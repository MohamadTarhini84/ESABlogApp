import './App.css';
import Home from './pages/Home';
import NavBar from './components/navBar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {
  const Layout=()=>{
    return (
      <div className="Layout">
        <NavBar/>
        <Outlet/>
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
