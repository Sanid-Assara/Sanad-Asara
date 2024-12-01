import { Outlet } from "react-router-dom";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
export default function MainLayout() {
  return (
    <>
      <header>
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