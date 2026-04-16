import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Next.js is fun",
  description: "Next.js is fun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
