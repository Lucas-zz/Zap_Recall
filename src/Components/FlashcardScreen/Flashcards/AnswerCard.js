import TopCounter from "./TopCounter";

export default function AnswerCard({ setAtual, turnArrow, number, total, question, answer, border }) {
    return (
        <div className={`flashcard ${border}`} data-identifier="flashcard">
            <TopCounter number={number} total={total} />
            <div className="flashcard-inside-header">
                <span className="flashcard-question">{question}</span>
            </div>
            <div className="central-text">{answer}</div>
            <span onClick={() => setAtual(number + 1)} className="flashcard-bottom-arrow" data-identifier="arrow">
                <img className="bottom-arrow" src={turnArrow} alt="card-bottom-arrow" />
            </span>
        </div>
    );
}