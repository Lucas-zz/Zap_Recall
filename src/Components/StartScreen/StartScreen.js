import FlashcardPage from "../FlashcardScreen/FlashcardPage";

export default function StartScreen({ setPage }) {

    return (
        <main className="main-initial-page">
            <img className="logo-inicio" src="./assets/logo.png" alt="logo-zap-recall" />
            <button onClick={() => setPage(<FlashcardPage />)} className="button-start" data-identifier="start-zap-recall">
                Praticar React
                <img className="next-arrows" src="./assets/next.png" alt="setas-next" />
            </button>
        </main>
    );
}