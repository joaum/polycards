import './Header.css';

// type HeaderProps = null;

export const Header = (): JSX.Element => {

    return (<header>
            <nav>
                <div id="title" className="header-button">PolyCards</div>
                <div id="nav-buttons">
                    <span className="header-button">Marketplace</span>
                    <span className="header-button">About</span>
                </div>
            </nav>
        </header>);
}
