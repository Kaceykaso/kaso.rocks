import { Link, Outlet } from "react-router-dom"
import "../css/path.css"
import { Footer } from "../components/Footer"
import Macpack_icon from "../assets/macpack_icon.png"
import Retrokade_icon from "../assets/retrokade_icon.png"
import Traderkiki_icon from "../assets/trader_kiki_logo.png"

export default function Projects() {
    return (
        <>
            <header className="topbar">
                <Link to="home" title="Want to see that amazing home screen again? Sure!">
                    <h1 className="title">kaso.rocks</h1>
                </Link>
                <ul className="topbar">
                    <li><Link to="about" title="About Kacey Lewis - author of this site, among other things!">about</Link></li>
                    <li><Link to="uses" title="What Kacey uses, what this website uses">uses</Link></li>
                    <li><Link to="projects" title="Personal projects of Kacey Lewis">projects</Link></li>
                </ul>
            </header>

            <section className="path">
                <h1 className="title__page">Projects!</h1>
                <h3 className="subtitle">Some personal side things I&apos;m doing!</h3>

                <div className="right node">
                    <Link to="traderkiki">
                        <img src={Traderkiki_icon} alt="Trader Kiki 3D printed jewelry" />
                    </Link>
                    <Link to="traderkiki" className="heading">Trader Kiki</Link>
                    <p>3D printed earrings for sale!</p>
                </div>
                <div className="node__path flip">
                    <div className="line"></div>
                    <div className="line__reverse"></div>
                </div>
                <div className="left node">
                    <Link to="macpack">
                        <img src={Macpack_icon} alt="MacPack icon" />
                    </Link>
                    <Link to="macpack" className="heading">The MacPack</Link>
                    <p>It's little backpack made out of Mac!</p>
                </div>
                <div className="node__path">
                    <div className="line"></div>
                    <div className="line__reverse"></div>
                </div>
                <div className="right node">
                    <Link to="retrokade">
                        <img src={Retrokade_icon} alt="Retrokade cabinet icon" />
                    </Link>
                    <Link to="retrokade" className="heading">Retrokade</Link>
                    <p>Hacking arcade cabinets to do what I want!</p>
                </div>
            </section>
            <Outlet />
            <Footer />
        </>
    )
}