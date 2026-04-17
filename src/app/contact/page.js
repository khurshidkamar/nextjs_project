"use client";

import toast from "react-hot-toast";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent!");
  };
  const inputClass =
    "border px-3 py-2 w-full rounded-md placeholder-gray-400 dark:placeholder-white/70";
  return (
    <div className="p-10 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className={inputClass}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          className={inputClass}
          required
        />
        <textarea
          placeholder="Your message"
          className="border px-3 py-2 w-full rounded-md"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
