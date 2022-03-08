import React from 'react'
import Figure from 'react-bootstrap/Figure'
import home from "../images/home.jpg"



function Home() {
  return (
    <div>
        <Figure>
          <img
            alt="171x180"
            src={home}
          />
        </Figure>
    </div>
  )
}

export default Home