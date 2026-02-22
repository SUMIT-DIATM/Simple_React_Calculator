import { useState } from "react";
import styles from "../css/Display.module.css"
function Display({calval,updatedisplay}){
    let result = "";

  try {
    const value = eval(calval);
    if (!Number.isNaN(value)) {
      result = value;
    }
  } catch (e) {
    result = "error";
  }
 return <>
  <div className={styles.display}><span className={styles.equ}>{calval}</span> <span className={styles.ans}>{result}</span></div> 
 </>
}

export default Display;