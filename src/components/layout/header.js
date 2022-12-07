import React, { useState } from 'react';
import styles from "./header.module.css";

const Header = (props) => {

    return (
        <header className={styles.header}>
            <div>
                <h1>Kakaomap + weather</h1>
            </div>
        </header>
    );
};

export default Header;