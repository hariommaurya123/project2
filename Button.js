import React from "react";


const Button=(props)=>{
    let{item}=props
    let{userId,id,title }=item
    // console.log("posts" ,posts)


    return(
        <div>

            
            <p>UserId:{userId}</p>
            <p>Id:{id} </p>
            <p>Title : {title}</p>


        </div>
    )
}
export default Button