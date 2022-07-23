import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import Menu from "./Menu/Menu"
import { SiteContext } from "../context/SiteContext"
import MobileMenu from "./Menu/MobileMenu"
import {
  header,
  header__flexWrapper,
  header__logo,
  menuBtn,
  menuCross,
} from "../styles/header.module.css"
import Logo from "../assets/logo.svg"

const Header = () => {
  const { toggleMenu, isMenuOpen } = useContext(SiteContext)

  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-menu" }) {
        menuItems {
          nodes {
            key: id
            title: label
            connectedNode {
              node {
                uri
              }
            }
            parentId
            url
          }
        }
      }
    }
  `)

  return (
    <header className={header}>
      <div className="container">
        <div className={header__flexWrapper}>
          <Link to="/" className={header__logo} aria-label="CLVC Logo">
            <Logo />
          </Link>
          <div
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
            aria-label="Toggle Mobile Menu"
            className="flex items-center"
            role="button"
            tabIndex={0}
          >
            <button
              aria-label="Toggle Mobile Menu"
              className={`${menuBtn} ${isMenuOpen ? menuCross : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="xl:hidden text-white font-medium text-xs">MENU</div>
            {wpMenu ? (
              <Menu menu={wpMenu} />
            ) : (
              <div className="text-white">
                Please configure your "main-menu".
              </div>
            )}
          </div>
        </div>
      </div>
      {wpMenu && <MobileMenu menu={wpMenu} />}
    </header>
  )
}

export default Header
