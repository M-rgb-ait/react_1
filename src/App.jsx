
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Contant from './componant/Contant/Contant'
import Layout from './componant/Layout/Layout'
import Home from './componant/Home/Home'
import Hom2e from './componant/Home2/Hom2e'
import Display from './componant/Display/Display'


const router = createBrowserRouter([
  {path: '', element: <Home/>, children:[
    {path: '', element: <Display/>},
    {path: 'Hom2e', element: <Hom2e/>},
    {path: 'Layout', element: <Layout/>},
    {path: 'Contant', element: <Contant/>},

  ]},
])
function App() {
  return (
<>

<RouterProvider router={router}/>







</>
  )
}

export default App
