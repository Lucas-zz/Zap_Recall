export default function EndingScreen({ result, resultMessage, emoji, emojiAlt }) {
    return (
        <div className="result-page">
            <span className="result">
                {result}
                <img src={emoji} alt={emojiAlt} />
            </span>
            <span className="result-message">
                <div>{resultMessage}</div>
            </span>
        </div>
    );

}