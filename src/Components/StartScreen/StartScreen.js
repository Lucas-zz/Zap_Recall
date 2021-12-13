import FlashcardPage from "../FlashcardScreen/FlashcardPage";

import mainLogo from "../../assets/logo.png";
import nextArrows from "../../assets/next.png";

import { decks } from "../../assets/Decks"

export default function StartScreen({ setPage }) {

    return (
        <main className="main-initial-page">
            <img className="logo-inicio" src={mainLogo} alt="logo-zap-recall" />
            <div className="all-buttons">
                {decks.map((deck =>
                    <button onClick={() => setPage(<FlashcardPage chooseDeck={deck.data} deckName={deck.name} />)} className="button-start" data-identifier="start-zap-recall">
                        Praticar {deck.name}
                        <img className="next-arrows" src={nextArrows} alt="setas-next" />
                    </button>
                ))}
            </div>
        </main>
    );
}