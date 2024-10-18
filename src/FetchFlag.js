import React, { useState, useEffect, useRef } from "react";

function FetchFlag() {
  // State variables
  const [flag, setFlag] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [displayedFlag, setDisplayedFlag] = useState([]);

  const timerRef = useRef(null); // For managing setTimeout references
  const indexRef = useRef(0); // For maintaining the index

  useEffect(() => {
    const url =
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/656c61"; // Replace with the actual URL

    // Fetch the flag data
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        // Check if the response is okay
        if (!response.ok) {
          throw new Error("Network response was not ok :(((");
        }

        const text = await response.text(); // Get the response as plain text

        setFlag(text.trim()); // Trim any unnecessary whitespace
        console.log("Fetched text:", text.length); // Log the fetched text

        startTypewriterEffect(text.trim());
      } catch (error) {
        console.error("Error fetching the flag:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      clearTimeout(timerRef.current); // Clean up any existing timers on unmount
    };
  }, []);

  const startTypewriterEffect = (text) => {
    indexRef.current = -1; // Reset index
    setDisplayedFlag([]); // Clear displayedFlag before starting

    const typeNextChar = () => {
      if (indexRef.current < text.length) {
        console.log("Index Position:", indexRef.current);
        setDisplayedFlag((prev) => [...prev, text[indexRef.current]]);
        console.log("TimerRef:", timerRef.current);
        indexRef.current++;

        // Schedule the next character addition after a delay
        timerRef.current = setTimeout(typeNextChar, 500);
      }
    };

    typeNextChar();
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show loading message while fetching
  }

  return (
    <ul>
      <div>{displayedFlag.join("")}</div>
    </ul>
  );
}

export default FetchFlag;
