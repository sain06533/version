import './App.css';
import Home from './Components/Home';
import RootLayout from './Components/RootLayout';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Registration from './Components/Registration';
import Committes from './Components/Committes';
function App() {
  const RouterObj=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout />,
      children:
      [
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/register',
          element: <Registration />
        },
        {
          path:'/committees',
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
