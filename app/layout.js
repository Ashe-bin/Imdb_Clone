import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Imdb Clones",
  description: "Movie database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" attribute="class">
          <div
            className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300
      "
          >
            <Header />
            <Navbar />
            <SearchBox />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
