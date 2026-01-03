import { Link } from 'react-router-dom';
import mackpack_icon from '/src/assets/macpack_icon.png';

export function MessageList() {
    return (
        <div className="nes-container">
            <div className="message-list">
                <div className="message -left">
                    <div>
                        <Link to="/projects" title="Link to project page">
                            <img src={mackpack_icon} alt="pixelated icon of the MacPack" />
                        </Link>
                    </div>
                    <div>
                        <div className="nes-balloon from-left macpack">
                            <p>
                                Check out my<br /> 
                                <Link to="/projects">fun projects!</Link>
                            </p>
                        </div>
                        <div className="nes-balloon from-left macpack">
                            <p>
                                Or my awesome<br /> 
                                <Link to="/projects/traderkiki">earrings on Etsy!</Link></p>
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
                        <Link to="/about" className="nes-btn is-primary" title="About Kacey Lewis">About</Link>
                    </div>
                    <div className="nes-balloon from-left">
                        <p>Read more about me!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}