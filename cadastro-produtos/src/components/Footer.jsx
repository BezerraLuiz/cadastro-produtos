import { Outlet } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <>
      <Outlet/>
      <footer>
        <p>Code & Designed by Luiz Antônio Bezerra and Ana Beatriz Meller</p>
      </footer>
    </>
  )
}

export default Footer