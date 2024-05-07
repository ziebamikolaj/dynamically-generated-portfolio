import React from "react";
import ReactDOM from "react-dom/client";

import "./input.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>,
  );
}
