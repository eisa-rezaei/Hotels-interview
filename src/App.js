import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SelectedHotelPage from "./pages/selectedHotelPage/SelectedHotelPage";
import Home from "./pages/homePage/Home";
import Header from "./components/Header";
import Saved from "./pages/savedPage/Saved";
import Popular from "./pages/popularsPage/Popular";
import Favorites from "./pages/favoritesPage/Favorites";
import Contact from "./pages/contactPage/Contact";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" children={<Home />} exact />
            <Route path="/saved" children={<Saved />} />
            <Route path="/popular" children={<Popular />} />
            <Route path="/favorites" children={<Favorites />} />
            <Route path="/contact" children={<Contact />} />
            <Route path="/HotelPage" children={<SelectedHotelPage />} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
