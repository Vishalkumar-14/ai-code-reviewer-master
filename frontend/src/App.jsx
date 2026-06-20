import { useState } from "react";

function App() {
  const [code, setCode] = useState("");

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "auto" }}>
      <h1>Code Review Crew</h1>
      <p>Multi-Agent AI Code Review Platform</p>

      <textarea
        rows={15}
        style={{ width: "100%" }}
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <br />
      <br />

      <button>
        Review Code
      </button>

      <hr />

      <h2>Agent Reviews</h2>

      <div>
        <h3>🔒 Security Agent</h3>
        <p>Waiting for review...</p>
      </div>

      <div>
        <h3>🐞 Bug Detection Agent</h3>
        <p>Waiting for review...</p>
      </div>

      <div>
        <h3>⚡ Performance Agent</h3>
        <p>Waiting for review...</p>
      </div>

      <div>
        <h3>📝 Code Quality Agent</h3>
        <p>Waiting for review...</p>
      </div>

      <div>
        <h3>👨‍⚖️ Lead Judge Agent</h3>
        <p>Overall Score: --/100</p>
      </div>
    </div>
  );
}

export default App;