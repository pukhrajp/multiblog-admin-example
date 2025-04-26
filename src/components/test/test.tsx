import { useState } from "react";
import { useWebSocket } from "../../lib/hooks";

export function Test() {
  const { messages, sendMessage } = useWebSocket("ws://localhost:3000");

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div>
      <h2>WebSocket Chat</h2>
      <div style={{ border: "1px solid #ccc", padding: 10, minHeight: 100 }}>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
