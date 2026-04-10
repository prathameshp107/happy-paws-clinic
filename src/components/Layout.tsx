import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import FloatingCTA from "./FloatingCTA";
import WhatsAppButton from "./WhatsAppButton";
import SmoothScroll from "./SmoothScroll";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <SmoothScroll />
    <ScrollProgress />
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <FloatingCTA />
    <WhatsAppButton />
  </div>
);

export default Layout;
