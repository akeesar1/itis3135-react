import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/introduction">Introduction</Link>
                </li>
            </ul>
        </nav>
    );
}