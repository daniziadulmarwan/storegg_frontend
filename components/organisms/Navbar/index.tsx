/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Menu from "./menu";
import Auth from "./auth";
import ToggleMenu from "./toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <img
                src="/icon/logo.svg"
                alt="image-logo"
                width={60}
                height={60}
              />
            </a>
          </Link>
          <ToggleMenu onclick={() => setOpen(!open)} />
          <div
            className={`collapse navbar-collapse ${open ? "d-block" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" active href="/" />
              <Menu title="Games" />
              <Menu title="Rewards" />
              <Menu title="Discover" />
              <Menu title="Global Rank" />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
