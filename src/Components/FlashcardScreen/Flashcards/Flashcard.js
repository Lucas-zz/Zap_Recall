import { useState } from "react";

import turnArrow from "../../../assets/turn.png";
import QuestionCard from "./QuestionCard";
import OptionsCard from "./OptionsCard";
import AnswerCard from "./AnswerCard";

export default function Flashcard({ question, answer, number, total, deckName, setAtual, setStatus, setFail, fail }) {
    const [border, setBorder] = useState('');
    const [card, setCard] = useState(0);

    return (
        <main class="main-flashcard-page ">
            <div className="deck-title">{deckName}</div>

            {card === 0 && <QuestionCard number={number} total={total} question={question} turnArrow={turnArrow} setCard={setCard} />}

            {card === 1 && <OptionsCard number={number} total={total} question={question} answer={answer} setBorder={setBorder} setStatus={setStatus} setCard={setCard} setFail={setFail} fail={fail} />}

            {card === 2 && <AnswerCard number={number} total={total} question={question} answer={answer} border={border} turnArrow={turnArrow} setAtual={setAtual} setCard={setCard} />}

        </main >
    );
}