import React from 'react'
import styles from "./login.module.scss";
import Left from "./sections/left";
import Form from "./sections/form";
function Login()
{
    return(
        <main className={styles.container}>
            <Left></Left>
            <Form></Form>
        </main>        
    )
}

export default Login