import * as React from "react"
import { Link, PageProps } from "gatsby"
import styled from "styled-components"

interface LayoutProps {
  location: {
    pathname: string
  }
  title: string
  children?: JSX.Element | JSX.Element[]
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        BB - {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        <Links />
      </header>
      <main>{children}</main>
    </div>
  )
}

const Links = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  return (
    <div className="header-links">
      <Link to="/about">About</Link>
      <a target="_blank" href="https://www.linkedin.com/in/chris-berns/">
        LinkedIn
      </a>
    </div>
  )
}

const StyledLinks = styled(Links)`
  display: flex;
`

export default Layout
