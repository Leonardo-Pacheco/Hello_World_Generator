import React, { useState } from "react"
import './style.css'

export default HelloWorld

function HelloWorld({ getRandom }) {
    const [randomIndex, setRandomIndex] = useState(1)
    const helloWorlds = [
        {
            hello: "Hello World",
            language: "English"
        },
        {
            hello: "Olá Mundo",
            language: "Português"
        },
        {
            hello: "Hallo Welt",
            language: "Alemão"
        },
        {
            hello: "Geiá sou Kósme",
            language: "Grego"
        },
        {
            hello: "Marhaban Bialealam",
            language: "Árabe"
        },
        {
            hello: "Salut Lume",
            language: "Romeno"
        },
        {
            hello: "Privet mir",
            language: "Russo"
        },
        {
            hello: "Ciao mondo",
            language: "Italiano"
        },
        {
            hello: "Kon'nichiwa Sekai",
            language: "Japonês"
        },
        {
            hello: "Hola Mundo",
            language: "Espanhol"
        },
        {
            hello: "Bonjour le monde",
            language: "Francês"
        },
        {
            hello: "Hei Verden",
            language: "Norueguês"
        },
        {
            hello: "Hello Wêreld",
            language: "Africâno"
        },
        {
            hello: "Helo Byd",
            language: "Galês"
        },
        {
            hello: "Hēlō varlḍa",
            language: "Guzerate"
        },
        {
            hello: "Bonjou Mondyal",
            language: "Haitiano"
        },
        {
            hello: "Barev ashkharh",
            language: "Armênio"
        },
        {
            hello: "Witaj świecie",
            language: "Polonês"
        },
        {
            hello: "namaste duniya",
            language: "Híndi"
        },
        {
            hello: "Helló Világ",
            language: "Húngaro"
        },
        {
            hello: "Halo Dunia",
            language: "Indonésio"
        },
        {
            hello: "Dia duit an Domhan",
            language: "Irlandês"
        }
    ]

    return (
        <div className="container">
            <button className="container-button" onClick={e => { setRandomIndex(getRandom(helloWorlds))}}>Gerador de "Olâ Mundo"</button>
            <div className="container-box">
                <h1 className="container-hello">{helloWorlds[randomIndex].hello}</h1>
                <h2 className="container-language">{helloWorlds[randomIndex].language}</h2>
                <div className="container-box_img"/>
            </div>
        </div>
    )
}