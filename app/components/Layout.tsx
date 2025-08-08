  import "../styles/App.css";

  import { ReactNode } from "react";
  import { Toaster } from "@/components/ui/toaster"


  interface LayoutProps {
    children: ReactNode;
  }

  export default function Layout({ children }: LayoutProps) {
    return (
      <div>
        {children}
        <Toaster />
      </div>
    );
  }