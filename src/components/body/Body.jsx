import React, { useState } from "react";
import styles from "./Body.module.css";

const Body = () => {
  const [detal, setDetal] = useState(false);

  const handleClickOpen = () => {
    setDetal(true)
  }

  const handleClickClose = () => {
    setDetal(false)
  }

  return (
    <div className={styles.cartBody}>
      <div className={styles.name}>
        <div>
            <p>Nike sneaker</p>
            <p>$120</p>
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.openInfo} onClick={handleClickOpen}>Детали</button>
        {detal && (
          <div className={styles.info}>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              vel numquam deleniti quis eaque culpa totam nobis doloribus dolor.
            </h5>
            <button className={styles.closeBtn} onClick={handleClickClose}>X</button>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Body;
