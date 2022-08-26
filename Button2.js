import React from "react";

const Button2=(props)=>{
    let{searchDataHandler,filterDataHadler}=props
    return (
        <div>
            <input type="text" onChange={searchDataHandler} />
            <button onClick={filterDataHadler}>PostData</button>
        </div>
    )
}
export default Button2