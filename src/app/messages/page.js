"use client";

import { useEffect, useState } from "react";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/messages");
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Messages could not be fetched:", error);
      setMessages([]);
    }
  };
  useEffect(() => {
    fetchMessages();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newMsg }),
      });

      const data = await res.json();
      if (data.success) {
        setNewMsg("");
        await fetchMessages();
      } else {
        alert("Failed to save message.");
      }
    } catch (error) {
      console.error("Error submitting message:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">💬 Messages</h1>
      <ul className="space-y-2 mb-6">
        {messages.map((msg) => (
          <li
            key={msg.id}
            className="p-3 border rounded-md bg-gray-100 dark:bg-gray-800"
          >
            {msg.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Type a message..."
          required
          disabled={loading}
          className="border px-3 py-2 flex-grow rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded-md text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
