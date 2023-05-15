import React, { useEffect, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillSmile } from "react-icons/ai";

//fetch 網址 
//response jason -> message物件，status不會顯示
const data = fetch("https://dog.ceo/api/breeds/image/random",{

    method:"GET"
})
.then(res => (res.json()))
.catch((e)=>{
    console.log("api read Error");
}); 

function Visuallizations(){
    const [image,setImage] = useState('');
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(data => (data.json()))
        .then((data) =>{
            console.log(data.message);
            setImage(data.message);
        } );
    },[]);
    return (
        <div className="container">
            <p>api串接練習</p>
            <img src={image}></img>
        </div>
    );
}

export default Visuallizations;
