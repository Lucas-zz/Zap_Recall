export default function EndingScreen({ result, resultMessage, resultMessage2, emoji, emojiAlt }) {
    return (
        <div className="result-page">
            <span className="result">
                {result}
                <img src={emoji} alt={emojiAlt} />
            </span>
            <span className="result-message">
                <div>{resultMessage}</div>
                {resultMessage !== undefined && <div>{resultMessage2}</div>}
            </span>
        </div>
    );

}