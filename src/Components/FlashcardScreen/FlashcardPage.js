import { useState } from "react";
import Failure from "../EndingScreen/Failure.js";
import Success from "../EndingScreen/Success.js";

import Flashcard from "./Flashcards/Flashcard.js";
import Header from "./Header"

export default function FlashcardPage() {
    const [status, setStatus] = useState(0);
    const [atual, setAtual] = useState(1);

    return (
        <>
            <Header />
            {questionsReact.map(deck => (
                atual === deck.number &&
                <Flashcard
                    {...deck}
                    setAtual={setAtual}
                    setStatus={setStatus}
                    total={questionsReact.length}
                />
            ))}
            {status === 0 ? <Success /> : <Failure />}
        </>
    );
}

let questionsReact = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript.",
        number: 1,
    },
    {
        question: "O React é ___",
        answer: "uma biblioteca JavaScript para construção de interfaces.",
        number: 2,
    },
    {
        question: "Componentes deve iniciar com ___",
        answer: "letra maiúscula.",
        number: 3,
    },
    {
        question: "Podemos colocar ___ dentro do JSX.",
        answer: "expressões",
        number: 4,
    },
    {
        question: "O ReactDOM nos ajuda ___",
        answer: "interagindo com a DOM para colocar componentes React na mesma.",
        number: 5,
    },
    {
        question: "Usamos o npm para ___",
        answer: "gerenciar os pacotes necessários e suas dependências.",
        number: 6,
    },
    {
        question: "Usamos props para ___",
        answer: "passar diferentes informações para componentes.",
        number: 7,
    },
    {
        question: "Usamos estado (state) para ___",
        answer: "dizer para o React quais informações, quando atualizadas, devem renderizar a tela novamente.",
        number: 8,
    }
]