import "/src/css/header.css"
import { icons } from '../js/icons.jsx';


export function Hero() {
    return (
        <header className="hero">
            <div className="details">
                <p>The adventures of Kacey Lewis</p>
            </div>
                <div className="title-container">
                <h1 className="title">kaso.rocks</h1>
                <h1 className="shade">kaso.rocks</h1>
            </div>
            <ul className="hero">
                <li>
                    <a href="https://dcgsantacruz.org/" title="Defcon Group Santa Cruz - DCG 831" target="_blank">
                        <img src={icons.dcg_831} height="46px" width="46px" />
                    </a>
                </li>
                <li>
                    <a href="https://traderkiki.etsy.com" title="Trader Kiki shop on Etsy with 3D printed earrings" target="_blank">
                        <img src={icons.etsy_icon} height="46px" width="46px" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Kaceykaso" title="Kaceykaso on Github" target="_blank">
                        <i className="nes-icon github is-medium"></i>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/kaceylewis" title="Kacey Lewis on LinkedIn" target="_blank">
                        <i className="nes-icon linkedin is-medium"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:mackovision+website@gmail.com" title="Email me?" target="_blank">
                        <i className="nes-icon gmail is-medium"></i>
                    </a>
                </li>
            </ul>
	    </header>
    )
}