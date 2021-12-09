import TopCounter from "./TopCounter";

export default function Flashcard({ question, answer, number, total }) {
    return (
        <main class="main-flashcard-page">
            <div className="flashcard" data-identifier="flashcard">
                <TopCounter number={number} total={total} />
                <div className="central-text-question">O que é JSX?</div>
                <span className="flashcard-bottom-arrow" data-identifier="arrow">
                    <img className="bottom-arrow" src="./assets/turn.png" alt="card-bottom-arrow" />
                </span>
            </div>

            <div class="flashcard hidden" data-identifier="flashcard">
                <TopCounter number={number} total={total} />
                <div class="flashcard-inside-header">
                    <span class="flashcard-question">O que é JSX?</span>
                </div>
                <div class="central-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam, ad earum unde
                    error cum quibusdam alias totam dolorem sed, nam facere quia quisquam repudiandae nobis atque quod culpa
                    similique?</div>
                <div class="flashcard-options">
                    <button class="aprendi-agora">Aprendi agora</button>
                    <button class="nao-lembrei">Não lembrei</button>
                    <button class="lembrei">Lembrei com esforço</button>
                    <button class="zap">Zap!</button>
                </div>
            </div>

            <div class="flashcard hidden" data-identifier="flashcard">
                <TopCounter number={number} total={total} />
                <div class="flashcard-inside-header">
                    <span class="flashcard-question">O que é JSX?</span>
                </div>
                <div class="central-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam, ad earum
                    unde
                    error cum quibusdam alias totam dolorem sed, nam facere quia quisquam repudiandae nobis atque quod culpa
                    similique?</div>
                <span class="flashcard-bottom-arrow" data-identifier="arrow">
                    <img class="bottom-arrow" src="./assets/turn.png" alt="card-bottom-arrow" />
                </span>
            </div>

        </main>
    );
}