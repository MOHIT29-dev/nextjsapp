import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        {/* Navbar */}
        <header className="navbar">
          <nav className="navbar-container">
            <Link href="/" className="nav-logo">
              Next<span>JS</span>
            </Link>

            <div className="nav-links">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/services" className="nav-link">
                Services
              </Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="max-w-7xl mx-auto px-6 py-10">
          {children}
        </main>

      </body>
    </html>
  );
}
