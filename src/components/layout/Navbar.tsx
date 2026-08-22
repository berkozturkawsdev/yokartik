import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar__inner">

                <a href="/" className="navbar__brand">
                    <span className="navbar__name">YOKARTIK</span>
                    <span className="navbar__tagline">
                        Sadece dünyadan en ilginç haberler.
                    </span>
                </a>



            </div>
        </header>
    );
}