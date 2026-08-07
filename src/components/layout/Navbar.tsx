import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">

            <div className="container navbar__inner">

                <a href="/" className="navbar__logo">

                    <img src="/logo.webp" alt="Yok Artık Logo" />
                </a>


                <nav className="navbar__links" aria-label="Primary navigation">
                    <a href="/" className="active">
                        Ana Sayfa
                    </a>
                </nav>

            </div>

        </header>
    );
}