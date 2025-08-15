// app/_app.tsx
import "../app/styles/App.css";
import '../app/globals.css';
import { AppProps } from "next/app";
import { ToastProvider } from "../components/ui/toast";
import Layout from "@/app/components/Layout";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ToastProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </ThemeProvider>
  );
}