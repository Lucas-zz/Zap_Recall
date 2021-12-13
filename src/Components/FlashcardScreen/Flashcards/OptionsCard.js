import TopCounter from "./TopCounter";

export default function OptionsCard({ setCard, setBorder, setStatus, number, total, question, answer }) {

    function naoLembrei() {
        setBorder("nao-lembrei");
        setStatus(1);
        setCard(2);
    }

    function aprendiAgora() {
        setBorder("aprendi-agora");
        setCard(2);
    }

    function lembrei() {
        setBorder("lembrei");
        setCard(2);
    }

    function zap() {
        setBorder("zap");
        setCard(2);
    }

    return (
        <div className="flashcard options" data-identifier="flashcard">
            <TopCounter number={number} total={total} />
            <div className="flashcard-inside-header">
                <span class="flashcard-question">{question}</span>
            </div>
            <div class="central-text">{answer}</div>
            <div class="flashcard-options">
                <button onClick={() => aprendiAgora()} className="aprendi-agora">Aprendi agora</button>
                <button onClick={() => naoLembrei()} className="nao-lembrei">Não lembrei</button>
                <button onClick={() => lembrei()} className="lembrei">Lembrei com esforço</button>
                <button onClick={() => zap()} className="zap">Zap!</button>
            </div>
        </div>
    );
}