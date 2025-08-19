import { useState } from 'react'
import "/src/css/gameboy.css"
import "/src/css/snowflakes.css"

import banana from '/src/assets/banana_dolphin_taco.png';

export function Gameboy() {
    /** Variables and things */
    const [gameboyImg, setGameboyImg] = useState("https://c.tenor.com/-aAhEh6khUUAAAAd/tenor.gif");
    const [styleBlock, setStyleBlock] = useState("none");
    const surpriseLink = document.getElementsByClassName("surprise");
    let code = [];

    /**
     * 
     * @returns Snowflakes
     */
    function Snowflakes() {
        return (
            <div className="snowflakes" id="surprise" aria-hidden="true" style={{ display: styleBlock, border: "none", boxShadow: "none" }}>
                {/* Make 11 snowflakes*/}
                {Array.from({ length: 11 }, (_, i) => (
                    <div className="snowflake" key={i}><div className="inner"></div></div>
                ))}
            </div>
        )
    }

    /**
     * konamiGo: evaluates whether or not user has correctly entered the Komani code
     * @param {array} code - array of strings, containing button names
     * @returns string
     */
    function KonamiGo(code) {
        const correct = ["Up","Up","Down","Down","Left","Right","Left","Right","B","A","Start"];
        if (code.length === correct.length && code.every((element, index) => element === correct[index])) {
            setGameboyImg(banana);
            setStyleBlock("block");
            surpriseLink[0].style.setProperty("display", "block");
        }
    }

    /**
     * Button click handler, pushes button name to array, if Start is clicked, kicks off KonamiGo and clears array
     * @param {title} string, name of the button
     */
    function btnClick({title}) {
        code.push(title);
        if (title == "Start" ) {
            KonamiGo(code);
            code = [];
        }
    }

    return (
        <>
            <div className="gameboy">
                <div className="screen">
                    <img id="gameboy-img" className="fullImg" src={gameboyImg} alt="vaporwave valley" />
                </div>
                <div className="brand">
                    Kaso GAMEGIRL
                </div>
                <div className="controls">
                    <div className="d-pad">
                        <div className="d-row">
                            <button type="button" className="d-up single" id="d-up" title="Up" onClick={() => btnClick({title: "Up"})}>❯</button>
                        </div>
                        <div className="d-row">
                            <button type="button" className="d-left" id="d-left" title="Left" onClick={() => btnClick({title: "Left"})}>❮</button>
                            <button type="button" className="d-center" title="Center" onClick={() => btnClick({title: "Center"})}></button>
                            <button type="button" className="d-right" id="d-right" title="Right" onClick={() => btnClick({title: "Right"})}>❯</button>
                        </div>
                        <div className="d-row">
                            <button type="button" className="d-down single" id="d-down" title="Down" onClick={() => btnClick({title: "Down"})}>❮</button>
                        </div>
                    </div>
                    <div className="middle-btns">
                        <button type="button" id="start-btn" title="Start" onClick={() => btnClick({title: "Start"})}>Start</button>
                        <button type="button" id="select-btn" title="Select" onClick={() => btnClick({title: "Select"})}>Select</button>
                    </div>
                    <div className="right-btns">
                        <button type="button" className="nes-btn is-error" id="b-btn" title="B" onClick={() => btnClick({title: "B"})}>B</button>
                        <button type="button" className="nes-btn is-warning" id="a-btn" title="A" onClick={() => btnClick({title: "A"})}>A</button>
                    </div>
                </div>
                <div className="vents"></div>
            </div>
            <Snowflakes />
        </>
    )
}