import React, { useState } from 'react'
import styles from './navbar.module.scss';
import { Icon } from '@iconify/react';
import Input from '../../atoms/input';
function Navbar() {
    const[searchText, setSearchText] = useState("");

  return (
   <header className={styles.header}>
        <article className={styles.searchbar}>
            {/* searchbar */}
            <Icon icon={"ion:search"}></Icon>
            <Input 
            type="text" 
            value={searchText}
            className={styles.field}
            placeholder="Search Notes..."
            onChange={(e)=> setSearchText(e.value)}></Input>
        </article>
        <div className={styles.theme}>
            <Icon icon={"ph:sun-light"}></Icon>
        </div>

   </header>
    
    )
}

export default Navbar