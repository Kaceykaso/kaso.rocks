import { Link } from "react-router-dom"

export function Header() {
    return (
        <header className="topbar">
            <Link to="/" title="Want to see that amazing home screen again? Sure!">
                <h1 className="title">kaso.rocks</h1>
            </Link>
            <ul className="topbar">
                <li><Link to="/about" title="About Kacey Lewis - author of this site, among other things!">about</Link></li>
                <li><Link to="/uses" title="What Kacey uses, what this website uses">uses</Link></li>
                <li><Link to="/projects" title="Personal projects of Kacey Lewis">projects</Link></li>
            </ul>
        </header>
    )
}