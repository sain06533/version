import './App.css';
import Home from './Components/Home';
import RootLayout from './Components/RootLayout';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Registration from './Components/Registration';
import Program from './Components/Program';
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
