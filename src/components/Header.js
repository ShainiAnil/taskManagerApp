import React from 'react'

const Header = ({title,content}) => {
  return (
    <div className="appHeader">
    <h1>{title}</h1>
    <p>{content}</p>
 </div>
  )
}

export default Header