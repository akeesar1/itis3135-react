import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Abhinav's React Demo - 3/23/26</h1>
            
            <nav>
                <Link to="/">Home</Link>{" | "}
                <Link to="/contract">Contract</Link>{" | "}
                <Link to="/website-evaluations">Web Evaluations</Link>{" | "}
                <Link to="/survey">Survey</Link>{" | "}
                <Link to="/cards">Cards</Link>{" | "}
                <Link to="/inventory">Inventory</Link>{" | "}
                <Link to="/instructions">Instructions</Link>{" | "}
                <Link to="/product">Product</Link>
            </nav>

            <nav>
                <Link to="/crappy">Crappy Page</Link>{" | "}
                <Link to="/hobby">Hobby Page</Link>{" | "}
                <Link to="/intro-form">Intro Form</Link>{" | "}
                <Link to="/slideshow">slideshow Page</Link>{" | "}
            </nav>

        </header>
    );
}