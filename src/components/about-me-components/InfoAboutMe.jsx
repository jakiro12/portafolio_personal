import styled from "styled-components";
export default function TextAbout(){
 
    return(
        <Container>
            <p>
            Tengo un historial destacado en el desarrollo de aplicaciones
             utilizando React y React-Native, respaldado por mi dominio del lenguaje principal, JavaScript.
              Mi trayectoria abarca más de dos años de experiencia en este campo, durante los cuales he tenido el privilegio de colaborar en equipos de desarrollo internacionales. Estas experiencias me han permitido interactuar con profesionales de distintos países y con diversos 
            niveles de conocimiento, abarcando tanto la programación como distintos contextos laborales.
            </p>
        </Container>
    )
}
const Container=styled.div`
    width: min(90%,500px);
    height: min(250px,100%);
    display: grid;
    margin-inline: auto;
    font-size: large;
    padding: 5px;
    box-shadow: 7px 7px rgba(77, 65, 65, 0.3);    
    border-radius: 10px;
    overflow: hidden;
        p{
            font-size: 19px;
            margin-top: 5px;
            margin-left: 5px;
        }
        p::first-letter{
            font-weight: bolder;
        }
    @media screen and (max-width:847px) {
        margin-inline: auto;
        overflow-y: scroll;
        p{
        font-size: 16px;
    }
    }
`