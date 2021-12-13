import { useEffect, useState } from "react";
import StartScreen from "./Components/StartScreen/StartScreen";

export default function App() {
    const [page, setPage] = useState('');
    useEffect(() => {
        setPage(<StartScreen setPage={setPage} />);
    }, []);

    return (
        <>
            {page}
        </>
    );
}
