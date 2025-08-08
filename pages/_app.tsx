// app/_app.tsx
import "../app/styles/App.css";
import '../app/globals.css';
import { AppProps } from "next/app";
import { ToastProvider } from "../components/ui/toast";
import Layout from "@/app/components/Layout";// Adjust path as needed

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  );
}