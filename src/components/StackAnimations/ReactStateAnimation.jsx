import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
export default function StateIncrement({status}){
    const[count,setCount]=useState(16)
    useEffect(()=>{
        let textChange=document.querySelector('.text_render')
        if(status === 'visible'){
            setTimeout(
                function(){
                textChange.style.fontSize=`${count}px`
            setCount(count + 1)
                }, 2000
            )
        }else{
            textChange.style.fontSize=`16px`
            setCount(16)
        }
    })
    return(
        <Phrase appear={status} font={count}>
          <p className='text_render'>Crea tus Hooks </p>  
        </Phrase>
    )
}

const Phrase = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    outline: 2px solid black;
    visibility: ${(props)=>props.appear};
    .text_render{
        transition: all 2s;
    }
`