import React from 'react'


function Square({value, onClick}) {
  return (
    <button className='button' onClick={onClick}>
      {value}
    </button>
  )
}

export default Square