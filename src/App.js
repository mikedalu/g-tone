import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductScreen from "./components/ProductScreen";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/products/:id" element={<ProductScreen />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
