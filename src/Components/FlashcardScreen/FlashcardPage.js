import { useState } from "react";

import Header from "./Header"
import Flashcard from "./Flashcards/Flashcard.js";
import EndingScreen from "../EndingScreen/EndingScreen.js";

import SuccessEmoji from "../../assets/party.png";
import FailureEmoji from "../../assets/sad.png";

export default function FlashcardPage(data) {
    const [status, setStatus] = useState(0);
    const [atual, setAtual] = useState(1);


    // let choosenDeck = Array.from(chooseDeck);

    console.log(data.chooseDeck);
    return (
        <>
            <Header />
            {data.chooseDeck.map(deck => (
                atual === deck.number &&
                <Flashcard
                    {...deck}
                    setAtual={setAtual}
                    setStatus={setStatus}
                    total={data.chooseDeck.length}
                />
            ))}
            {atual > data.chooseDeck.length && (status === 0
                ? <EndingScreen
                    result="PARABÉNS!"
                    resultMessage="Você não esqueceu de nenhum flashcard!"
                    emoji={SuccessEmoji}
                    emojiAlt="congratulations-party-emoji"
                />
                : <EndingScreen
                    result="Puts.."
                    resultMessage={`Você esqueceu alguns flashcards... Não desanime! Na próxima você consegue!`}
                    emoji={FailureEmoji}
                    emojiAlt="sad-crying-emoji"
                />)
            }
        </>
    );
}