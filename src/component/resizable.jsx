import { useEffect } from "react";
import { useState } from "react";
import { ResizableBox } from "react-resizable";

const Resizable =({direction,children})=>{
    const [innerWidth,setInnerWidth]=useState(window.innerHeight);
    const [innerHeight,setInnerHeight]=useState(window.innerWidth);

    useEffect(()=>{
// debounce for more performence
let timer;
const DebouncedListener=(fn)=>{
    if(timer){
        clearInterval(timer)
    }
    timer=setTimeout(()=>{
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth)
    },100)
}
        window.addEventListener('resize',DebouncedListener);
        return ()=>{
            window.removeEventListener('resize',DebouncedListener)
        }
    },[]);
let resizableProps={};
if(direction==='horizontal'){
    resizableProps={
        height:Infinity,
        width:innerWidth*0.75,
        resizeHandles:['e']
    }
}else{
    resizableProps={
        height:innerHeight*0.25,
        width:Infinity,
        resizeHandles:['s']
    }
}



return (<ResizableBox
    {...resizableProps}
>{children}</ResizableBox>)
}

export default Resizable;
