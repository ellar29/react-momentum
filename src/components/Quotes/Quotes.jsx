import { useState, useEffect } from "react"
import './styles.css'

export function Quotes() {
  const [quote, setQuote] = useState("Loading...")

  useEffect(() => {
    fetchRandomQuote();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      const newQuote = `${data.content} - ${data.author}`;
      setQuote(newQuote);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to fetch a new quote.");
    }
  };

  const handleNewQuote = () => {
    fetchRandomQuote();
  };

  return (
    <div className="quotes-container">
      <p className="quote-text">{quote}</p>
      <button onClick={handleNewQuote}>Get New Quote</button>
    </div>
  );
}