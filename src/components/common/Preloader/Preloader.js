import React from 'react'
import styles from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.svg'

const Preloader = () => {
    return (
        <img className={styles.preloader} src={preloader} alt="preloader" />
    )
}

export default Preloader