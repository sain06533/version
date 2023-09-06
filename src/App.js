import './App.css';
import Home from './Components/Home';
import RootLayout from './Components/RootLayout';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Registration from './Components/Registration';
import Committes from './Components/Committes';
function App() {
  const RouterObj=createBrowserRouter([
    {
      path:'/version',
      element:<RootLayout />,
      children:
      [
        {
          path:'/version',
          element:<Home/>
        },
        {
          path:'/version/register',
          element: <Registration />
        },
        {
          path:'/version/committees',
          element: <Committes />
        }
      ]
    }
  ])

  return (
    
    <div className="App">
      <RouterProvider router={RouterObj} />    
      
      
      
    </div>
  );
}

export default App;
