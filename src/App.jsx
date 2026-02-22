import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css';
import Button_container from "./components/Button_container";
import Display from "./components/Display";
function App() {
let [calval,updatedisplay]=useState("10+5");

  return (
    <>
    <center>
     <div className={styles.calculator}>
     <Display calval={calval} updatedisplay={updatedisplay}></Display>
     <Button_container calval={calval} updatedisplay={updatedisplay}></Button_container>
     </div>
    </center>
    </>
  )
}

export default App
