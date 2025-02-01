import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ReduxProvider from '../redux/Provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Dashboard",
  description: "Weather forecast application",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <header>
            <div className="bg-gray-600 text-white p-4 shadow-md border-b border-gray-500">
              <h1 className="text-2xl md:text-4xl font-bold">
                Weather Dashboard
              </h1>
              <nav className="mt-2">
                <ul className="flex space-x-4">
                  <li>
                    <Link href="/" className="text-white hover:text-blue-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-white hover:text-blue-300">
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}