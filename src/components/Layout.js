import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <div className="background-green"></div>
      {children}
    </>
  )
}

export default Layout