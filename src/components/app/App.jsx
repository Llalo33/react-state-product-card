import React from "react";
import Header from '../header/Header'
import Body from "../body/Body";
import styles from "./App.module.css"
import Footer from "../footer/Footer";

function App()  {
    return (
        <div className={styles.app}>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default App
