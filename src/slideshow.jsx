import { useEffect, useState, useRef } from "react";

export default function Slideshow() {
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);

    // Fetch 10 cat images
    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        .then(res => res.json())
        .then(data => setImages(data));
    }, []);

    const first = () => setIndex(0);
    const last = () => setIndex(images.length - 1);
    const next = () => setIndex(i => (i + 1) % images.length);
    const prev = () => setIndex(i => (i - 1 + images.length) % images.length);

    const play = () => {
        if (timerRef.current) return;
        timerRef.current = setInterval(() => {
            setIndex(i => (i + 1) % images.length);
        }, 5000);
    };

    const stop = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, []);

    if (images.length === 0) return <p>Loading...</p>;

    return (
        <div style={{ textAlign: "center" }}>
        <h1>Slideshow</h1>
        <img
        src={images[index].url}
        alt="cat"
        style={{ width: "400px", height: "400px", objectFit: "cover" }}
        />

        <div style={{ marginTop: "20px" }}>
        <button onClick={first}>First</button>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
        <button onClick={last}>End</button>
        </div>

        <div style={{ marginTop: "20px" }}>
        <button onClick={play}>Play</button>
        <button onClick={stop}>Stop</button>
        </div>
        </div>
    );
}