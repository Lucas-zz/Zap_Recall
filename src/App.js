import { useState } from "react";
import flashcardPage from "./Components/FlashcardScreen/FlashcardPage";

import FlashcardPage from "./Components/FlashcardScreen/FlashcardPage";
import StartScreen from "./Components/StartScreen/StartScreen";

export default function App() {
    const [page, setPage] = useState(<StartScreen onClick={() => flashcardPage()} />);

    function flashcardPage() {
        setPage(<FlashcardPage />)
    }

    return (
        <>
            {page}
        </>
    );
}