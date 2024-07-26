import React from 'react'

function Button(props) {
  return (
    <button className={`btn ${props.className}`}>
        {props.children}
    </button>
  )
}

export default Button