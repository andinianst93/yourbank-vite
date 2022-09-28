import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { close, menu } from '../assets'
import { navLinks } from '../constants'
import styles from '../style'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className='w-full flex py-6 justify-between items-center navbar'>
            <Link to='/'>
              <h1 className='text-white text-3xl tracking-wide font-poppins font-bold'>
                <span className='text-teal-500'>.Your</span>Bank
              </h1>
            </Link>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
                  } text-white`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img
                src={toggle ? close : menu}
                alt='menu'
                className='w-[25px] h-[25px] object-contain'
                onClick={() => setToggle((prev) => !prev)}
              />
              <div
                className={`${
                  toggle ? 'flex' : 'hidden'
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                  {navLinks.map((link, index) => (
                    <li
                      key={link.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px] ${
                        index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                      } text-white`}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
