import React, { MouseEventHandler } from 'react'

interface MenuProps {
  onclick: MouseEventHandler<HTMLButtonElement>,
}

export default function ToggleMenu(props: MenuProps) {
  const { onclick } = props
  return (
    <button
      onClick={onclick}
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  )
}
