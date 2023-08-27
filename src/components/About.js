import React from 'react'

function About({image, about}) {
  return (
    <aside>
        <img alt= "blog logo" placeholder="https://via.placeholder.com/215" src={image}/>
        <p>{about}</p>
    </aside>
    )
}

export default About