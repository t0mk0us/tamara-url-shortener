import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("shorten"); // or 'restore'

const handleSubmit = async () => {
  try {
    let response;

    if (mode === "shorten") {
      response = await fetch("http://localhost:7777/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: input }),
      });
    } else {
      // Send GET with a query parameter
      const endpoint = `http://localhost:7777/api/restore?shortUrl=${encodeURIComponent(input)}`;
      response = await fetch(endpoint, { method: "GET" });
    }

    const text = await response.text();
    setResult(text);
  } catch (error) {
    console.error(error);
    setResult("Error connecting to server");
  }

};

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h3>URL Shortener</h3>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setMode("shorten")}>Shorten</button>
        <button onClick={() => setMode("restore")}>Restore</button>
      </div>

      <input
        style={{ width: "60%", padding: "0.5rem" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={
          mode === "shorten"
            ? "Enter long URL to shorten"
            : "Enter short URL to restore"
        }
      />

      <div>
        <button onClick={handleSubmit} style={{ marginTop: "1rem" }}>
          {mode === "shorten" ? "Shorten URL" : "Find Original"}
        </button>
      </div>

      {result && (
        <div style={{ marginTop: "1rem" }}>
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
}

export default App;
