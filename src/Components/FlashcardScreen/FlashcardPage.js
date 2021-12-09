import Flashcard from "./Flashcard";
import Header from "./Header"

export default function FlashcardPage() {
    return (
        <>
            <Header />
            <Flashcard question={questionsReact.question} answer={questionsReact.answer} number={questionsReact.number} total={questionsReact.length} />
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