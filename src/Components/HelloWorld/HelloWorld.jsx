import React, { useState } from "react"
import './style.css'

export default HelloWorld

function HelloWorld({ getRandom }) {
    const [randomIndex, setRandomIndex] = useState(1)
    const helloWorlds = [
        {
            hello: "Hello World",
            language: "English",
            flag: "https://image.flaticon.com/icons/png/128/197/197484.png"
        },
        {
            hello: "Olá Mundo",
            language: "Português",
            flag: "https://image.flaticon.com/icons/png/128/197/197386.png"
        },
        {
            hello: "Hallo Welt",
            language: "Alemão",
            flag: "https://image.flaticon.com/icons/png/128/197/197571.png"
        },
        {
            hello: "Geiá sou Kósme",
            language: "Grego",
            flag: "https://image.flaticon.com/icons/png/128/197/197566.png"
        },
        {
            hello: "Marhaban Bialealam",
            language: "Árabe",
            flag: "https://image.flaticon.com/icons/png/512/197/197578.png"
        },
        {
            hello: "Salut Lume",
            language: "Romeno",
            flag: "https://image.flaticon.com/icons/png/128/197/197587.png"
        },
        {
            hello: "Privet mir",
            language: "Russo",
            flag: "https://image.flaticon.com/icons/png/512/197/197408.png"
        },
        {
            hello: "Ciao mondo",
            language: "Italiano",
            flag: "https://image.flaticon.com/icons/png/512/197/197626.png"
        },
        {
            hello: "Kon'nichiwa Sekai",
            language: "Japonês",
            flag: "https://image.flaticon.com/icons/png/512/197/197604.png"
        },
        {
            hello: "Hola Mundo",
            language: "Espanhol",
            flag: "https://image.flaticon.com/icons/png/512/197/197593.png"
        },
        {
            hello: "Bonjour le monde",
            language: "Francês",
            flag: "https://image.flaticon.com/icons/png/512/197/197560.png"
        },
        {
            hello: "Hei Verden",
            language: "Norueguês",
            flag: "https://image.flaticon.com/icons/png/128/197/197579.png"
        },
        {
            hello: "Hello Wêreld",
            language: "Africâno",
            flag: "https://image.flaticon.com/icons/png/128/197/197562.png"
        },
        {
            hello: "Helo Byd",
            language: "Galês",
            flag: "https://image.flaticon.com/icons/png/512/197/197620.png"
        },
        {
            hello: "Hēlō varlḍa",
            language: "Guzerate",
            flag: "https://image.flaticon.com/icons/png/128/197/197419.png"
        },
        {
            hello: "Bonjou Mondyal",
            language: "Haitiano",
            flag: "https://image.flaticon.com/icons/png/128/197/197389.png"
        },
        {
            hello: "Barev ashkharh",
            language: "Armênio",
            flag: "https://image.flaticon.com/icons/png/128/197/197516.png"
        },
        {
            hello: "Witaj świecie",
            language: "Polonês",
            flag: "https://image.flaticon.com/icons/png/128/197/197529.png"
        },
        {
            hello: "namaste duniya",
            language: "Híndi",
            flag: "https://image.flaticon.com/icons/png/512/197/197620.png"
        },
        {
            hello: "Helló Világ",
            language: "Húngaro",
            flag: "https://image.flaticon.com/icons/png/128/197/197584.png"
        },
        {
            hello: "Halo Dunia",
            language: "Indonésio",
            flag: "https://image.flaticon.com/icons/png/128/197/197594.png"
        },
        {
            hello: "Dia duit an Domhan",
            language: "Irlandês",
            flag: "https://image.flaticon.com/icons/png/512/197/197567.png"
        }
    ]
    let lastIndex = getRandom(helloWorlds);

    function newRandomIndex(){
            if(randomIndex === lastIndex){
                return getRandom(helloWorlds)
            }
            return getRandom(helloWorlds)
    }
    
    return (
        <div className="container">
            <button className="container-button" onClick={e => {setRandomIndex(newRandomIndex())
            }}
                >Gerador de "Olâ Mundo"</button>
            <div className="container-box">
                <h1 className="container-hello">{helloWorlds[randomIndex].hello}</h1>
                <h2 className="container-language">{helloWorlds[randomIndex].language}</h2>
                <img className="container-flag_png" alt="Country Flag" src={helloWorlds[randomIndex].flag} />
                <div className="container-box_img"/>
            </div>
        </div>
    )
}