import React from 'react'
import "../popup.css"

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-innter'></div>
        <table className = "centerTable">
          <tr style={{textAlign: 'center'}}>
            {props.children}
          </tr>
          <tr style={{textAlign: 'center'}}>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
          </tr>
        </table>
        
        

    </div>
  ): "";
}

export default Popup