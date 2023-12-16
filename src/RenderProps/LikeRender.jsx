import React from 'react'

const LikeRender = (props) => {
  return (
    <div>
      <button onClick={props.func}>Like Image{props.count}</button>
      
    </div>
  )
}

export default LikeRender