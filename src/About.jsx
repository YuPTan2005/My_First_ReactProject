import { useEffect, useState } from "react";

export default function About({ handleAbout }) {
    const [text, setText] = useState('');

    const handleInput = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleAbout(text);
        }, 2000);

        return () => clearTimeout(timer); 
    }, [text, handleAbout]);

    return (
        <section>
            <label htmlFor="about">About</label>
            <textarea 
                id='about' 
                placeholder="About your self" 
                rows='10'
                cols='40'
                className="border border-2 border-gray-500 inputText p-2"
                value={text}
                onChange={handleInput}
            />
        </section>
    )
}