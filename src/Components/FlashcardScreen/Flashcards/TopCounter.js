export default function TopCounter({ number, total }) {
    return (
        <>
            <span className="flashcard-top-number" data-identifier="counter">{number}/{total}</span>
        </>
    );
}