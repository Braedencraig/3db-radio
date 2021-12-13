import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  useWindowSize,
} from '@react-hook/window-size'
import { Sling as Hamburger } from 'hamburger-react'

export const Nav = () => {
  const [isOpen, setOpen] = useState(false)
  const [mobile, setMobile] = useState(false)

  const [width, height] = useWindowSize()

  useEffect(()=> {
    if(width < 768) {
      setMobile(true)
    } else {
      setMobile(false)  
    }
  }, [width])

  if (mobile) {
    return (
      <nav style={{ maxHeight: isOpen ? '300px' : '' }} className='navigation mobile'>
        <div className='top-nav'>
          <div onClick={() => setOpen(false)} className='one'>
            <Link href='/'>
              <a>
                <img src='/assets/logo.png' alt='3dB logo' />
              </a>
            </Link>
          </div>
          <div className='two'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        <div className='ham-menu'>
          <ul>
            <li onClick={() => setOpen(false)} className='margin-nav'>
              <Link  href='/about'>
                <a>about</a>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href='/work'>
                <a>work</a>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href='/team'>
                <a>team</a>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href='/contact'>
                <a>contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <Link href='/'>
            <a>
              <img src='/assets/logo.png' alt='3dB logo' />
            </a>
          </Link>
        </li>
        <li className='margin-nav'>
          <Link href='/about'>
            <a className='hover'>about</a>
          </Link>
        </li>
        <li>
          <Link href='/work'>
            <a className='hover'>work</a>
          </Link>
        </li>
        <li>
          <Link href='/team'>
            <a className='hover'>team</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a className='hover'>contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
