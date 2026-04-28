import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#0A192F",
            color: "#F6F4ED",
            border: "1px solid #0A192F",
            borderRadius: "2px",
            fontFamily: "Manrope, sans-serif",
            letterSpacing: "0.02em",
          },
        }}
      />
    </div>
  );
}

export default App;
