import React from 'react'
import "../popup.css"

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-innter'></div>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
        {props.children}

    </div>
  ): "";
}

export default Popup