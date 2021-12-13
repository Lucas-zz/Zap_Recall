import headerLogo from "../../assets/logo-mini.png";

export default function Header() {
    return (
        <header className="flashcard-page-header">
            <img src={headerLogo} alt="mini-logo-header" />
        </header>
    );
}