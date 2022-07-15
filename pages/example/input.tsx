import { ChangeEvent } from "react"

interface InputProps {
  title: string,
  type: 'text' | 'number' | 'email' | 'password',
  value: string,
  onchange?: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const Input = (props: InputProps) => {
  const { title, type, onchange, value } = props
  return (
    <div className="mb-3">
      <label htmlFor="email" className="form-label">{title}</label>
      <input type={type} value={value} className="form-control" onChange={onchange} />
    </div>
  )
}
