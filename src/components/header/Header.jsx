import React from 'react'
import sneaker from './sneaker.jpg'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={sneaker}></img>
        </div>
    )
}

export default Header