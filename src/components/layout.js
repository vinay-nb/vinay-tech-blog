import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
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
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        {` `}
       <a href="https://www.linkedin.com/in/vinay-nb">linkedin</a>
        &nbsp;&nbsp;&nbsp;
        <a href="https://twitter.com/vinay_nb7">twitter</a>
        &nbsp;&nbsp;&nbsp;
        <a href="https://github.com/vinay-nb">github</a>
        &nbsp;&nbsp;&nbsp;
      </footer>
    </div>
  )
}

export default Layout
