import styled,{keyframes} from 'styled-components';
import ImageWeb from './SpecialComponents/FirstImage';
import TextAbout from './SpecialComponents/InfoAboutMe';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Init(){
    const[ver,setVer]=useState('hidden')
    const navigate=useNavigate()
    return(
        <Container>            
           <div className='btn-photo'>
            <Direction  time={ver} onMouseOver={()=>setVer('visible')} onMouseOut={()=>setVer('hidden')}>
                <header >
                hola por aqui   
                </header>
                <main>
                    hola
                </main>
              
                <ImageWeb  />
                <button className='btn-proyects'onClick={()=>navigate('/proyects')}>Proyectos</button>
            </Direction>
           </div>
           <div className='my-info'>
            <div className='about'>
            <hr className='left'/>
            <p>Sobre mi</p>
            <hr className='right'/>
            </div>
            <TextAbout/>
              </div>
        </Container>
    )
}
const Container=styled.div`
    height: 100vh;
    font-size: medium;
    color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    background:#15518e;
   @media screen and (max-width:847px){
        display: grid;
        height: 200vh;
   }
 
    .btn-photo{
        display: flex;
        justify-content: center;
        width:  45%;
        height: 520px;
        margin: 5%; 
        border: 2px solid #96c2ee15;
        transition: all 1.5s;
        &:hover{
            transition: all 1.5s;
            transform: scale(1.05);
            box-shadow: 2px 2px 2px black,
            4px 4px 2px black,
            6px 6px 2px black,
            8px 8px 2px black,
            10px 10px 2px black,
            12px 12px 2px black,
            14px 14px 2px black;
        }
        @media screen and (max-width:847px){
            width: min(400px,50%) ;
            height: 480px;
            margin-inline: auto;
   }
       }
    .my-info{
        display: grid;
        justify-content: center;
        width:  45%;
        height: 420px;
        margin: auto; 
        @media screen and (max-width:847px){
        width: min(400px,70%);
        margin-inline: auto;
        overflow:hidden;
        }
    }
    .about{
        width: 80%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        p{
            font-size: larger;
            margin-left: 2%;
            margin-right: 2%;
        }
    }
    .left{
            height:20px;
            background: linear-gradient(to left, #50bc34,white);
            width: 50px;
            margin-left: auto;
            border: none;
            border-radius:  100% 0 0 0;
    }
    .right{
            height:20px;
            background: linear-gradient(to right, #50bc34,white);
            width: 50px;
            margin-right: auto;
            border: none;
            border-radius:  0 100% 0 0;
    }
`
const Direction=styled.article`
    height: 90%;
    width: 300px;
    margin: auto;
    display: grid;
    justify-content: center;
    position: relative;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 40% 50%;
    .btn-proyects{
        position: absolute;
        top: 72%;
        left: 35%;
        visibility: ${(props)=>props.time};
        background: #50bc34;
        border: none;
        padding:3px ;
        color: white;
        &:hover{
            cursor: pointer;
        }
        
    }
    header{
        width: auto;
        height: 100%;        
        overflow: hidden;
        text-align: center;
     
        
        }
    main {
        width: auto;
        height: 100%;
        text-align: center;
    }
    
   
    
`