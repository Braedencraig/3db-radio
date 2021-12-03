import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useWindowSize } from 'use-window-size-hook';
import { Sling as Hamburger } from "hamburger-react"

export const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  const {
    width,
  } = useWindowSize();

  if (width < 768) {
    return (
      <nav style={{maxHeight: isOpen ? '300px' : '100px'}} className="navigation mobile">
        <div className="top-nav">
          <Link href="/">
            <a>
              <Image
                src="/assets/logo.png"
                alt="3dB Logo"
                width="100"
                height="65"
              />
            </a>
          </Link>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
          <div className="ham-menu">
            <ul style={{maxHeight: isOpen ? '200px' : ''}} >
              <li className="margin-nav">
                <Link href="/about">
                  <a>about</a>
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <a>work</a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a>team</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>contact</a>
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    );
  }
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/">
            <a>
              <Image
                src="/assets/logo.png"
                alt="3dB Logo"
                width="200"
                height="125"
              />
            </a>
          </Link>
        </li>
        <li className="margin-nav">
          <Link href="/about">
            <a className="hover">about</a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a className="hover">work</a>
          </Link>
        </li>
        <li>
          <Link href="/team">
            <a className="hover">team</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="hover">contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
