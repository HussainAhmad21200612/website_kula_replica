import React,{useEffect,useState,setState} from "react";
function Content(){
    const [text,setData]=useState({})
    useEffect(()=>{
        fetch('https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1')
.then(res =>{ res.json().then(resp =>{
setData(resp)
})
})
},[]);
console.log(text["texts"]);
const arr=text["texts"]
return(<div className="head">

   {arr && arr.map(txt=>
    <div className="top">
        <h3>{txt.heading}</h3><h1>{txt.subHeading}</h1><p>{txt.description}</p>
        </div>)}
    </div>
    );

}

export default Content;