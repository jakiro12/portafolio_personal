import styled from "styled-components";
export default function ModalToSeeDetails({closeModal,deployResizeChosen}){
    const allUrlDeploys=[
        'https://www.mediafire.com/file/irumwnvkd9ncj24/bikeParksApp.apk/file',      
        'https://github.com/jakiro12/Dovere',
         'https://colors-game-murex.vercel.app/',
        'https://fluvialesapp.vercel.app/',
    ]
    
    const LinkTo=(e)=>{
        window.open(e,'_blank')
    }
    let rio=require('../../images/fluviales.png')
    let dovere =require('../../images/dovereapp1.png')
    let tres=require('../../images/game_balls.jpg')
    let skApp=require('../../images/skatepark3.png')
    const techOfEachProject=[
        ['React-Native','Expo','RN-Navigation','React-Hooks'],
        ['React Native','Expo Go','Supabase','React Hooks','RN Navigation','Expo Camera','Expo Location','RN Maps'],
        ['HTML','CSS','JavaScript','PhaserJs'],
        ['HTML','CSS','ReactJS','NextJs','Redux','Supabase'],
    ]
    return(
        <Modal>
           <article>
           <header>
            <h3>
                {deployResizeChosen === 1 ? 'Skate Park App' : deployResizeChosen === 2 ? 'Dovere App' : deployResizeChosen === 3 ? 'Ball Game Web' : deployResizeChosen ? 'Fluviales Web' : undefined}
            </h3>
            <button onClick={closeModal} className="close_modal">X</button>
           </header>
           <main>
            <img className='img_deploy' src={deployResizeChosen === 1 ? skApp : deployResizeChosen === 2 ? dovere : deployResizeChosen === 3 ? tres : rio} alt="holaa"/>
           </main>
           <footer>
            <h4>Tecnologias utilizadas:</h4>
            <div className="techs">
                {
                    techOfEachProject[deployResizeChosen - 1].map((e,i)=>(
                        <p key={i} className="tech_inside">{e}</p>
                    ))
                }
            </div>
            <button className="open_project" onClick={()=>LinkTo(allUrlDeploys[deployResizeChosen-1])}>Ver - Descargar</button>
           </footer>
           </article>
        </Modal>
    )
}


const Modal=styled.div`
        position: fixed;
        z-index: 1;
        top: 0px;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(143, 143, 143);
        display: flex;
        justify-content: center;
        align-items: center;
        article{
            width: min(400px,80%);
            height: min(85%,600px);
            display: grid;
            grid-template-columns:1fr;
            grid-template-rows: 12% 50% 38%;
            background-color:#e3e1e1;
            border-radius: 10px;
            box-shadow: 3px 3px 10px black;
        }
        header{
            width: 90%;
            height: 100%;
            margin-inline: auto;
            display: grid;
            grid-template-columns: 85% 15%;
            grid-template-rows: 1fr;
            .close_modal{
                width: fit-content;
                height: fit-content;
                padding: 4px 8px;
                font-weight: bold;
                font-size: larger;
                border: none;
                color: white;
                border-radius: 5px;
                background-color: black;
                border-radius: 5px;
                margin: auto;
                cursor: pointer;
            }
            & > h3{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                text-indent: 10px;
            }
        }
        main{
            width: 90%;
            height: 90%;
            margin: auto;
        }
        footer{
            width: 90%;
            height: 95%;
            margin: auto;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 15% 60% 25% ;
        }
        .img_deploy{
            width: 100%;
            object-fit: fill;
            height: 100%;
        }
        .img_deploy:nth-last-child(1){
            object-fit: contain;
        }
        .techs{
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: repeat(5,1fr);
        }
        h4{
            text-decoration: underline;
        }
        .open_project{
            width: fit-content;
            height: fit-content;
            border:none;
            background-color: black;
            color: white;
            margin: auto;
            font-size: larger;
            border-radius: 5px;
            cursor: pointer;
            padding: 3px 5px;
            }
        .tech_inside{
            width: fit-content;
            height: fit-content;
            margin: auto;
            font-weight: bold;
        }
`