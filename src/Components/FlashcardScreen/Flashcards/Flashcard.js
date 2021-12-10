import { useState } from "react";
import TopCounter from "../TopCounter";

export default function Flashcard({ question, answer, number, total, setAtual, setStatus }) {
    const [border, setBorder] = useState("");

    function multipleFunctions() {
        setBorder("nao-lembrei");
        setStatus(1);
    }

    return (
        <main class="main-flashcard-page ">
            <div className="flashcard" data-identifier="flashcard">
                <TopCounter number={number} total={total} />
                <div className="central-text-question">{question}</div>
                <span className="flashcard-bottom-arrow" data-identifier="arrow">
                    <img className="bottom-arrow" src="./assets/turn.png" alt="card-bottom-arrow" />
                </span>
            </div>

            <div className="flashcard" data-identifier="flashcard">
                <TopCounter number={number} total={total} />
                <div className="flashcard-inside-header">
                    <span class="flashcard-question">{question}</span>
                </div>
                <div class="central-text">{answer}</div>
                <div class="flashcard-options">
                    <button onClick={() => setBorder("aprendi-agora")} class="aprendi-agora">Aprendi agora</button>
                    <button onClick={() => multipleFunctions()} class="nao-lembrei">Não lembrei</button>
                    <button onClick={() => setBorder("lembrei")} class="lembrei">Lembrei com esforço</button>
                    <button onClick={() => setBorder("zap")} class="zap">Zap!</button>
                </div>
            </div>

            <div class={`flashcard ${border}`} data-identifier="flashcard">
                <TopCounter number={number} total={total} />
                <div class="flashcard-inside-header">
                    <span class="flashcard-question">{question}</span>
                </div>
                <div class="central-text">{answer}</div>
                <span onClick={() => setAtual(number + 1)} class="flashcard-bottom-arrow" data-identifier="arrow">
                    <img class="bottom-arrow" src="./assets/turn.png" alt="card-bottom-arrow" />
                </span>
            </div>

        </main >
    );
}