import React from "react";


function Button ({nameButton, disabled}) {
    return (
        <>
            <button disabled={disabled} onClick={()=>{console.log(nameButton)}}>{nameButton}</button>
        </>

    )
}

export default Button;