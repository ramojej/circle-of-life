import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import { StaticImage } from "gatsby-plugin-image"
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
      <div className="container-lg">
        <div className={header__flexWrapper}>
          <Link to="/" className={header__logo} aria-label="CLVC Logo">
            <StaticImage src="../assets/header-logo.png" alt="CLVC Logo" />
          </Link>
          <div>
            <button
              onClick={toggleMenu}
              aria-label="Toggle Mobile Menu"
              className={`${menuBtn} ${isMenuOpen ? menuCross : ""}`}
            >
              <span></span>
              <span></span>
            </button>
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
