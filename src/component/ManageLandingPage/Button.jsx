import React from 'react'

const Button = ({ children , className, white }) => {
  const classes = `rounded-full py-3 px-10  ${white ? "bg-white text-[#f25f3a] hover:text-[#F98F75]" : "bg-[#f25f3a] text-white shadow-[#f25f3a]/[0.3] shadow-lg hover:bg-[#F98F75]"} ${className}`;
  return (
    <button className={classes}>
      <span>
        {children}
      </span>
    </button>
  )
}

export default Button;