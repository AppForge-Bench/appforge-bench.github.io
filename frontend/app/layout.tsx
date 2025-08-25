
import "./globals.css";
import Link from "next/link";
import { Github, Youtube, Twitter } from "lucide-react";

export const metadata = {
  title: "AppForge Bench",
  description: "AppForge Bench website."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-gray-200">
          <div className="container flex items-center justify-between h-16">
            <Link href="/" className="font-semibold text-lg">AppForge Bench</Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="nav-link" href="/">Leaderboards</Link>
              <Link className="nav-link" href="/AppForge">AppForge</Link>
              <Link className="nav-link" href="/AppForge-Bench/">Docs</Link>
              <Link className="nav-link" href="/citations">Citations</Link>
              <Link className="nav-link" href="/press">Press</Link>
              <Link className="nav-link" href="/submit">Submit</Link>
              <Link className="nav-link" href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-gray-200">
          <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} AppForge Team. All rights reserved.</div>
            <div className="flex items-center gap-3">
              <Link className="badge" href="https://github.com/AppForge-Bench" target="_blank"><Github size={16}/> GitHub</Link>
              <Link className="badge" href="https://huggingface.co" target="_blank">HF</Link>
              <Link className="badge" href="#" target="_blank"><Youtube size={16}/> YouTube</Link>
              <Link className="badge" href="#" target="_blank"><Twitter size={16}/> X/Twitter</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
