/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SignUpForm from "../components/organisms/SignUpForm";

export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form>
          <div className="pb-50">
            <Link href="/">
              <a className="navbar-brand">
                <Image
                  src="/icon/signup.svg"
                  width={60}
                  height={60}
                  alt="Gambar Logo"
                />
              </a>
            </Link>
          </div>
          <SignUpForm />
        </form>
      </div>
    </section>
  );
}
