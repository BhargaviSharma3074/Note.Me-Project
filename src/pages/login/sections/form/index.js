import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./form.module.scss";
import BrandLogo from '../../../../components/shared/brand';
// import {Icon} from '@iconify/react';
import Input from '../../../../components/atoms/input';
import Button from '../../../../components/atoms/button';

function Form()
{
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    return(
        <section className={styles["form-container"]}>
            <BrandLogo></BrandLogo>
            <div className={styles.form}>
                <Button 
                text="Join with Google"
                icon={"bi:google"}
                className={styles.google}>
                </Button>
                <div className={styles.option}>
                    <span>or join using E-mail address</span>
                </div>
                <article className={styles.details}>
                    <Input 
                    type={"email"}
                    placeholder={'Enter E-mail Address'} 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}>
                    </Input>
                    <Input 
                    type={password}
                    placeholder={'Enter Password'} 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}>
                    </Input>
                    <Button 
                    text="Join with Email"
                    icon={"material-symbols-light:login-outline"}
                    className={styles.emailBtn}
                    handleClick={() => navigate("/notes")}>
                    </Button>
                </article>
            </div>
        </section>        
    )
}

export default Form