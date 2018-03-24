/*
 * Guangyao Li
 * 2018/03/21
 * lgy87@foxmail.com
 */
import createElement from "utils/component/createElement"

const Navbar =
  createElement("header", "navbar")

export const NavbarSection =
  createElement("section", "navbar-section")

export const NavbarCenter =
  createElement("section", "navbar-center")

Navbar.Section = NavbarSection
Navbar.Center = NavbarCenter

export default Navbar