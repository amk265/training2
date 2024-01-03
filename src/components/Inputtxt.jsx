import React from 'react'
import styles from './Inputtxt.module.scss'
const Inputtxt = ({txt,type}) => {
  const clickhandler = (e)=>{
    e.preventdefualt();
  }
  return (
    <div className={`${styles.inputgroup}`}>
    <input id={`id-${txt}`} type={type} name={txt} onClick={clickhandler} required=" " autocomplete="off" />
    <label for={`id-${txt}`}>{txt}</label>
    </div>
  )
}

export default Inputtxt