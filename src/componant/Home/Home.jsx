


import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Nav2bar from '../Nav2bar/Nav2bar'
export default function Home() {
  return (
<>



<Navbar/>

<Outlet/>

<Nav2bar/>

</>
  )
}
