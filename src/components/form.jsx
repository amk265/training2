import React from 'react'
import Inputtxt from './Inputtxt'
import styles from './form.module.scss'
import Button from './Button'
const form = () => {
  return (
    <form className={`${styles.mainform}`}>
        <Inputtxt txt="Product Name" type="text"/>
        <Inputtxt txt="Product Price" type="number"/>
        <Inputtxt txt="Product Category" type="text"/>
        <Inputtxt txt="Product Exist" type="number"/>
        <Button/>
    </form>
        
    
  )
}

export default form