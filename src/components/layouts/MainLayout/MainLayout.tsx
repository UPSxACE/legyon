import { ReactNode } from "react";
import NavBar from "./NavBar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
