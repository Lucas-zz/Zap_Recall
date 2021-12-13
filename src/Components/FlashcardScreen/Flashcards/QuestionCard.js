import TopCounter from "./TopCounter";

export default function QuestionCard({ number, total, question, turnArrow, setCard }) {
    return (
        <div className="flashcard" data-identifier="flashcard">
            <TopCounter number={number} total={total} />
            <div className="central-text-question">{question}</div>
            <span className="flashcard-bottom-arrow" data-identifier="arrow">
                <img onClick={() => setCard(1)} className="bottom-arrow" src={turnArrow} alt="card-bottom-arrow" />
            </span>
        </div>
    );
}