import React from 'react';
import styles from "./bar.module.scss";
function ProgressBar(props) 
{
    const {percentage} = props;
  return (
    <div className={styles.container}>
        <span style={{width: percentage || "80%"}}></span>
        
    </div>
  )
}

export default ProgressBar