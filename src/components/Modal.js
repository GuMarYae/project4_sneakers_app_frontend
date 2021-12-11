import React from "react"

const MODAL_STYLES = {
    position:"fixed",
    top:"50",
    left:"50%",
    transform:"translate(-50%, -50%)",
    backgroundColor:"#fff",
    padding:"50px",
    zIndex:1000
}

const OVERLAY_STYLES ={
    position:"fixed",
    top:400,
    left:250,
    right:250,
    bottom:400,
    backgroundColor:"rgba(0,0,0, 0.7)",
    borderRadius:"11em",
    zIndex:1000

}

const Modal =({children, open, onClose})=>{
    if(!open) return null
return(

    <>
    <div style={OVERLAY_STYLES}></div>
    <div style = {MODAL_STYLES}>
        <button onClick={onClose}>Close MOdal</button>
        {children}
    </div>
    </>

)
}

export default Modal