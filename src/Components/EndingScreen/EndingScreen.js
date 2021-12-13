import StartScreen from "../StartScreen/StartScreen"

export default function EndingScreen({ result, resultMessage, resultMessage2, emoji, emojiAlt, setPage }) {

    function restart() {
        setPage(<StartScreen setPage={setPage} />);
    }



    return (
        <div className="result-page">
            {console.log(setPage)}
            <span className="result">
                {result}
                <img src={emoji} alt={emojiAlt} />
            </span>
            <span className="result-message">
                <div>{resultMessage}</div>
                {resultMessage !== undefined && <div>{resultMessage2}</div>}
            </span>
            <div onClick={() => restart()} className="button-start">
                Tentar novamente
            </div>
        </div>
    );

}