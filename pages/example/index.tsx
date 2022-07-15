import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

export default function Example() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const onSubmit = () => {
    console.log(email)
    console.log(password)
    router.push('/')
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card mt-5">
            <div className="card-header">
              Sign In Form
            </div>
            <div className="card-body">
              <form>
                <Input value={email} onchange={(e) => setEmail(e.target.value)} title="Email Address" type="email" />
                <Input value={password} onchange={(e) => setPassword(e.target.value)} title="Password" type="password" />
                <Button onclick={onSubmit} btn="dark">Sign In</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
