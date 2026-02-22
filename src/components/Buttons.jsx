import styles from "../css/Buttons.module.css"

function Buttons({ ele, calval, updatedisplay }) {
  return (
    <button
      className={styles.buttons}
      onClick={() => {
        if (ele === 'AC') {
          updatedisplay("")
        } 
        else if (ele === 'DEL') {
          updatedisplay(calval.slice(0, -1)) 
        } 
        
         else if(ele==`=`){
          updatedisplay(calval)
        }
        else {
          updatedisplay(calval + ele)
        }
      }}
    >
      {ele}
    </button>
  )
}

export default Buttons;