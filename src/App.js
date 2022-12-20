
import Link from './components/Link';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';
import Error404 from './components/Errores/404';
import PaginaBuscador from './paginas/PaginaBuscador';

const router = createBrowserRouter([
  {
    path: "",
    element: <PaginaBuscador />,
    errorElement: <Error404 />,
  },

]);


function App() {
  return (
 
      <RouterProvider router={router} />
   
  );
}

export default App;
