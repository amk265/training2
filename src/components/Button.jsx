import React from 'react'
import styles from './Button.module.scss'

const Button = () => {
  return (
    <button className={`${styles.btn}`} type='submit'>Button</button>
  )
}

export default Button