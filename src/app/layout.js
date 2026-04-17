import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ThemeProvider from "./context/ThemeContext";
import ToasterClient from "./components/ToasterClient";
import "./globals.css";

export const metadata = {
  title: "Next.js is fun",
  description: "Next.js is fun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <Navigation />
          <main className="flex-grow p-6">{children}</main>
          <Footer />
        </ThemeProvider>
        <ToasterClient />
      </body>
    </html>
  );
}
