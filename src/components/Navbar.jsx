import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={`${styles.mainnav}`}>
        <div>AMK Rise</div>
        <ul>
        <li>home</li>
        <li>about</li>
        <li>sevices</li>
        <li>contact</li>
        </ul>
    </nav>
  )
}

export default Navbar