import '../styles/App.css';
import Dashboard from './dashboard/Dashboard';
import Connexion from './login/Connexion';
import Users from './dashboard/Users.jsx'
import Serveurs from './dashboard/Serveurs.jsx'
import Applications from './dashboard/Applications.jsx'
import Profile  from './dashboard/Profile.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {

  const router_app = createBrowserRouter([
    {
      path: "/",
      element: (
        <Connexion/>
      )
    },
    {
      path: "/login",
      element: (
        <Connexion/>
      )
    },
    {
      path: "/dashboard",
      element: (
        <Dashboard/>
      )
    },
    {
      path: "/dashboard/user",
      element: <Users/>
    },
    {
        path: "/dashboard/server",
        element: <Serveurs/>
    },
    {
        path: "/dashboard/application",
        element: <Applications/>
    },
    {
        path: "/dashboard/profile",
        element: <Profile/>
    },
  ]);
  
  return (
    <div>
      <RouterProvider router={router_app}/>
    </div>
  );

}


export default App;