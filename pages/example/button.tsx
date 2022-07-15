import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode,
  btn?: string,
  onclick?: () => void,
}

export const Button = (props: Partial<ButtonProps>) => {
  const { children, btn = 'dark', onclick } = props
  return (
    <button type="button" onClick={onclick} className={`btn btn-${btn} py-2 rounded-1 w-100`}>{children}</button>
  )
}
