"use client";

import Link from "next/link";
import { use } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navigation() {
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <header className="bg-white dark:bg-slate-800 p-4 shadow">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-4 text-gray-800 dark:text-gray-100">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/messages">Messages</Link>
          </li>
          <li>
            <Link href="/checkout">Checkout</Link>
          </li>
          <li>
            <Link href="/about/team">Our Team</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 border border-gray-300 dark:border-slate-600 rounded-md text-sm bg-gray-100 dark:bg-slate-700
          text-gray-900 dark:text-gray-100 dark:hover:bg-slate-600 transition cursor-pointer"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}
