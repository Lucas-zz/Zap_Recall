import { useState } from "react";

import Header from "./Header"
import Flashcard from "./Flashcards/Flashcard.js";
import EndingScreen from "../EndingScreen/EndingScreen.js";

import SuccessEmoji from "../../assets/party.png";
import FailureEmoji from "../../assets/sad.png";

export default function FlashcardPage({ chooseDeck, deckName, setPage }) {
    const [status, setStatus] = useState(0);
    const [atual, setAtual] = useState(1);
    const [fail, setFail] = useState(0);

    const failOnlyOne = `Você esqueceu ${fail} flashcard...`;
    const failMoreThanOne = `Você esqueceu ${fail} flashcards...`;

    return (
        <>
            {console.log(setPage)}
            <Header />
            {chooseDeck.map(deck => (
                atual === deck.number &&
                <Flashcard
                    {...deck}
                    setAtual={setAtual}
                    setStatus={setStatus}
                    total={chooseDeck.length}
                    deckName={deckName}
                    setFail={setFail}
                    fail={fail}
                />
            ))}
            {atual > chooseDeck.length && (status === 0
                ? <EndingScreen
                    result="PARABÉNS!"
                    resultMessage="Você não esqueceu de nenhum flashcard!"
                    emoji={SuccessEmoji}
                    emojiAlt="congratulations-party-emoji"
                    setPage={setPage}
                />
                : (fail === 1
                    ? <EndingScreen
                        result="Puts.."
                        resultMessage={failOnlyOne}
                        resultMessage2="Não desanime! Na próxima você consegue!"
                        emoji={FailureEmoji}
                        emojiAlt="sad-crying-emoji"
                        setPage={setPage}
                    />
                    : <EndingScreen
                        result="Puts.."
                        resultMessage={failMoreThanOne}
                        resultMessage2="Não desanime! Na próxima você consegue!"
                        emoji={FailureEmoji}
                        emojiAlt="sad-crying-emoji"
                        setPage={setPage}
                    />))
            }
        </>
    );
}