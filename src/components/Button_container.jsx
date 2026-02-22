import styles from "../css/Button_container.module.css"
import Buttons from "./Buttons";
function Button_container({calval,updatedisplay}){
    const elements = [
  "AC", "1", "2", "+",
  "3", "4", "5", "-",
  "6", "7", "8", "*",
  "9", ".", "0", "/",
  "DEL", "00", "="
];
return <>
    <div className={styles.btn_container}>{elements.map((ele)=><Buttons  ele={ele} calval={calval} updatedisplay={updatedisplay} key={ele} ></Buttons>)}</div>
</>
}
export default  Button_container;