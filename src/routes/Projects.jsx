import { Link, Outlet } from "react-router-dom"
import "../css/path.css"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import Macpack_icon from "../assets/macpack_icon.png"
import Retrokade_icon from "../assets/retrokade_icon.png"
import Traderkiki_icon from "../assets/trader_kiki_logo.png"

export default function Projects() {
    return (
        <>
            <Header />

            <section className="path">
                <h1 className="title__page">Projects!</h1>
                <h3 className="subtitle">Some personal side things I&apos;m doing!</h3>

                <div className="right node">
                    <Link to="/projects/traderkiki">
                        <img src={Traderkiki_icon} alt="Trader Kiki 3D printed jewelry" />
                    </Link>
                    <Link to="/projects/traderkiki" className="heading">Trader Kiki</Link>
                    <p>3D printed earrings for sale!</p>
                </div>
                <div className="node__path flip">
                    <div className="line"></div>
                    <div className="line__reverse"></div>
                </div>
                <div className="left node">
                    <Link to="/projects/macpack">
                        <img src={Macpack_icon} alt="MacPack icon" />
                    </Link>
                    <Link to="/projects/macpack" className="heading">The MacPack</Link>
                    <p>It's little backpack made out of Mac!</p>
                </div>
                <div className="node__path">
                    <div className="line"></div>
                    <div className="line__reverse"></div>
                </div>
                <div className="right node">
                    <Link to="/projects/retrokade">
                        <img src={Retrokade_icon} alt="Retrokade cabinet icon" />
                    </Link>
                    <Link to="/projects/retrokade" className="heading">Retrokade</Link>
                    <p>Hacking arcade cabinets to do what I want!</p>
                </div>
            </section>

            <Footer />
        </>
    )
}