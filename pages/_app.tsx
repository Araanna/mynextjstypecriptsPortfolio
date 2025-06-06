import "../app/styles/App.css";

import { AppProps } from "next/app";
import { ToastProvider } from "../components/ui/toast"; // Adjust import path based on your setup

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
