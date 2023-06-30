import React from 'react'

const Button = ( {styles} ) => {
  return (
    <button type='button' className={`font-poppins font-medium text-primary outline-none text-[18px]py-4 px-6 p-4 bg-blue-gradient rounded-[10px] ${styles}`}>Get Started</button>
    )
}

export default Button