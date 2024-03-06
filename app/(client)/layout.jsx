import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Anthony Davi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>

        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
