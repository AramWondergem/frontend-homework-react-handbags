import React from "react";


function Button ({nameButton}) {
    return (
        <>
            <button onClick={()=>{console.log(nameButton)}}>{nameButton}</button>
        </>

    )
}

export default Button;