import React from 'react'
import Header from './Header'

function Layout(props) {
  return (
      <>
        <Header></Header>
        <main>
            {props.children}
        </main>
    </>
  )
}

export default Layout