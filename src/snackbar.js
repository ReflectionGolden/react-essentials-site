import { useState, forwardRef, useImperativeHandle } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import './snackbar.css';

const Snackbar = forwardRef((props, ref) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    useImperativeHandle(ref, () => ({
        show() {
            setShowSnackbar(true);
            setTimeout(() => {setShowSnackbar(false)}, 3000);
        }
    }));
  return (
    <div 
        className="snackbar"
        id={showSnackbar ? "show" : "hide"}
        style={{backgroundColor: props.type == "success" ? "#006020F7" : "#600000F7"}}
    >
      <div className="symbol">{props.type === "success" ? <FontAwesomeIcon icon={faCircleCheck} style={{color: "#00ff00",}} /> : <FontAwesomeIcon icon={faCircleXmark} style={{color: "#ff0000",}} />}</div>
      <div className="message">{props.message}</div>
    </div>
  )
})

export default Snackbar;
