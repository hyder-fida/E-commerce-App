import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(120vh-100px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
