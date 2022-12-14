import styled,{keyframes} from "styled-components"
export default function Deploys(){
    return(
        <Container>
            <AnimationDeploys>
            <div className="carrusel">
            <div className="item1"><a href="https://cartags.netlify.app/" target='_blank' rel="noopener noreferrer">
            <DeployImg>
            <header className="imgdeploy"><img className="cara1" src={require('../images/cartags.jpg')}  alt="yo"/>
            </header>
            <footer className="description"><p>
                    Puedes crear tus propios diseños de cards con botones,
                    el proyecto fue pensado para que puedas editar la tarjeta y agregar el codigo a tu portafilo personal
                </p></footer>
            </DeployImg>
            </a>
            </div>
            <div className="item1"><a href="https://deploy-disney.vercel.app/home" target='_blank' rel="noopener noreferrer">
            <DeployImg>
            <header className="imgdeploy"><img className="cara1" src={require('../images/disney.jpg')} alt="yo"/>
            </header>
            <footer className="description"><p>
                    Prueba tecnica, Clon visual de Disney plus para la empresa BeMaster
                </p></footer>
            </DeployImg>
            </a>
            </div><div className="item1"><a href="https://calculator-with-react-smoky.vercel.app/" target='_blank' rel="noopener noreferrer">
            <DeployImg>
            <header className="imgdeploy"><img className="cara1" src={require('../images/calculadora.jpg')} alt="yo"/>
            </header>
            <footer className="description"><p>
                    Calculadora hecha con react y Hooks, fue un proyecto personal para poner en practica mis conocimientos
                </p></footer>
            </DeployImg>
            </a>
            </div><div className="item1"><a href="https://lnkd.in/dXaT9v-P" target='_blank' rel="noopener noreferrer">
            <DeployImg>
            <header className="imgdeploy"><img className="cara1" src={require('../images/app.jpg')} alt="app de react native"/>
            </header>
            <footer className="description"><p>
                    Aplicacion movil desarrollada en React Native para localizar todos los Skate-Parks de Argentina
                </p></footer>
            </DeployImg>
            </a>
            </div>          
            </div>
            </AnimationDeploys>
        </Container>
    )
}
const rotate=keyframes`
    from{
        transform: rotateY(0deg);
    }
    to{
        transform: rotateY(360deg);
    }
`
const Container=styled.body`
    
    min-height: 100vh;
    width: 100%;
    background: #15518e;
    display: flex;
    justify-content: center;
    align-items: center;
   

`
const AnimationDeploys=styled.div`
        position: relative;
        height: 200px ;
        width: 350px;
        perspective: 200vh;
        a{
            text-decoration: none;
        }
   
    .carrusel{
        position: absolute;
        height: 100%;
        width: 100%;
        transform-style: preserve-3d;
        transition: transform 1s;
        animation: ${rotate} 20s infinite linear ;
    }
    .item1{
        display: block;
        position: absolute;
        width: 200px;
        opacity: 0.9;
        &:hover{
            opacity: 1;
        }
        &:hover::after{
            content: '';
            box-shadow:  5px 5px 10px  #000;
            width: 89%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            border: none;
            z-index: -1;
            }
        
    }
    .item1:nth-child(1){
        transform: rotateY(0deg) translateZ(350px);
    }
  
   
    .item1:nth-child(2){
        transform: rotateY(90deg) translateZ(350px);
    }
   
    .item1:nth-child(3){
        transform: rotateY(180deg) translateZ(350px);
    }
   
    .item1:nth-child(4){
        transform: rotateY(260deg) translateZ(350px);
    }
    .carrusel:hover{
        animation-play-state: paused;
    }
   
   
`
const DeployImg=styled.article`
    border: 2px groove #fff;
    height: 250px;
    width: 180px;
     .imgdeploy{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
    }
    
    .cara1{
        width: 100%;
        object-fit: cover;
    }
    p{
        color: white;
        opacity: 1;
        font-size: 11px;       
        display: block;
        padding: 3px;
    }
    .description{
        background: black;
        height:95px;
        padding: 2px;
        margin-bottom: 15px;
    }
`


