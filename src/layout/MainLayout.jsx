import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function MainLayout() {
  return (
    <>
      <header className="bg-red-400">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
