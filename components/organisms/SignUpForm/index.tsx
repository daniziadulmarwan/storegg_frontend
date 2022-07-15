import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function SignUpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const onSubmit = () => {
    const userForm = { name, email, password }
    localStorage.setItem('user-form', JSON.stringify(userForm))
    router.push('/sign-up-photo')
  }

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
      <div className="pt-50">
        <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">Full Name</label>
        <input value={name} onChange={(event) => setName(event.target.value)} type="text" className="form-control rounded-pill text-lg" id="name"
          aria-describedby="name" placeholder="Enter your name" />
      </div>
      <div className="pt-30">
        <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">Email
          Address</label>
        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="form-control rounded-pill text-lg" id="email"
          aria-describedby="email" placeholder="Enter your email address" />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="form-control rounded-pill text-lg" id="password"
          aria-describedby="password" placeholder="Your password" />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button onClick={onSubmit} type="button" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          role="button">Continue</button>
        <Link href="/sign-in">
          <a className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" role="button">Sign In</a>
        </Link>
      </div>
    </>
  )
}
