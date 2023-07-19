import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Education from "./components/Education";
import Work from "./components/Work";
import Seminars from "./components/Seminars";
import Projects from "./components/Projects";
import Other from "./components/Other";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import Navbar from "./components/NavBar";

// import about dark and light themes
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme";
import { GlobalStyles } from "./components/DynamicThemeChange";

const Routing = () => {
  const [theme, setTheme] = React.useState("light");

  // The function that toggles between themes
  const changeTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header changeTheme={changeTheme} />
      <Routes>
        {" "}
        {/* The Switch decides which component to show based on the current URL.*/}
        <Route path="/" element={<App />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/seminars" element={<Seminars />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/other" element={<Other />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      {/** Navbar sidebar for tablet-mobile */}
      <Navbar />
      {/* Social Media Section */}
      <SocialMedia className="desktop" />
      {/* Footer Component */}
      <Footer />
    </ThemeProvider>
  );
};

export default Routing;
