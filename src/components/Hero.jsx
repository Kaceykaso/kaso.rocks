import "/src/css/header.css"
import dcg_831 from '/src/assets/dcg_831.png';
import etsy_icon from '/src/assets/etsy_icon.png';
import valheimians from '/src/assets/valheimians.png';


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
                        <img src={dcg_831} height="46px" width="46px" />
                    </a>
                </li>
                <li>
                    <a href="https://www.etsy.com/shop/TraderKiki" title="Trader Kiki shop on Etsy with 3D printed earrings" target="_blank">
                        <img src={etsy_icon} height="46px" width="46px" />
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
                <li>
                    <a href="https://www.valheimians.com/member/kasoline/" title="Kasoline on Valheimians" target="_blank">
                        <img src={valheimians} alt="Valheimians profile page" height="46px" width="46px" />
                    </a>
                </li>
            </ul>
	    </header>
    )
}