import React, { Fragment, useState } from "react"
import { Primary, GlobalStyles } from "./Layout.styles"
import Hamburger from "../Hamburger/Hamburger"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import OverlayMenu from "../OverlayMenu/OverlayMenu"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <Primary>{children}</Primary>
      <Footer />
    </>
  )
}

export default Layout
