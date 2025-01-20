import "../app/styles/App.css";
import '../app/fonts/GeistMonoVF.woff'

import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ToastProvider } from "../components/ui/toast"; // Adjust import path based on your setup
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} ${geistMono.variable}`}>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </div>
  );
}
