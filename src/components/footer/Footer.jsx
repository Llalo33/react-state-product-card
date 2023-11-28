import React , {useState} from "react";
import styles from './Footer.module.css'

const Footer = () => {
  
    const [cart, setCart] = useState(false)
    
    const handleClickOpen = () => {
        setCart(true)
    }

    const handleClickRemove = () => {
        setCart(false)
    }
    return (

        <div className={styles.footer}>
            <hr />
            <div className={styles.name}>
                <div className={styles.loremName}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloremque dolores sit, necessitatibus sunt maiores soluta excepturi molestiae ut suscipit! Dignissimos possimus laborum ullam voluptatum rerum nostrum sint distinctio sit?</div>
            </div>
            <div className={styles.cart}>
                <button className={cart ? styles.cartRemoveButton : styles.cartButton} onClick={handleClickOpen}>{cart ? 'Уже добавлен' : 'Добавить в корзину'}</button>
                {cart && (
                    <div className={styles.cartRemove}>
                        <p onClick={handleClickRemove}>Удалить из корзины</p>
                    </div>   
                )}
            </div>
        </div>

    )
}

export default Footer