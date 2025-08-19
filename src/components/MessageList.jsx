

export function MessageList() {
    return (
        <div className="nes-container">
            <div className="message-list">
                <div className="message -left">
                    <div>
                        <a href="projects.html" title="Link to project page"><img src="src/assets/macpack_icon.png" alt="pixelated icon of the MacPack" /></a>
                    </div>
                    <div>
                        <div className="nes-balloon from-left macpack">
                            <p>Check out my<br /> <a href="projects.html">fun projects!</a></p>
                        </div>
                        <div className="nes-balloon from-left macpack">
                            <p>Or my awesome<br /> <a href="traderkiki.html">earrings on Etsy!</a></p>
                        </div>
                    </div>
                </div>
                <div className="message -right">
                    <div className="nes-balloon from-right">
                        <p>Or check out my<br />silly webring!</p>
                    </div>
                    <div>
                        <a href="https://Calcul8er.com/" className="nes-btn is-warning" title="Calcul8er.com" target="_blank">Calcul8er</a>
                        <a href="https://kaceykaso.github.io/tradertiki/" className="nes-btn is-error" title="Tiki Name Generator" target="_blank">Tiki Name<br />Generator</a>
                    </div>
                </div>
                 <div className="message -left">
                    <div>
                        <a href="./about.html" className="nes-btn is-primary" title="About Kacey Lewis" target="_self">About</a>
                    </div>
                    <div className="nes-balloon from-left">
                        <p>Read more about me!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}