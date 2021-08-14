import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SelectedHotelPage from "./pages/selectedHotelPage/SelectedHotelPage";
import { GlobalStyle } from "./Global-Style.styles";
import Home from "./pages/homePage/Home";
import Header from "./components/header/Header";
import Saved from "./pages/savedPage/Saved";
import Popular from "./pages/popularsPage/Popular";
import Favorites from "./pages/favoritesPage/Favorites";
import Contact from "./pages/contactPage/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route path="/" children={<Home />} exact />
            <Route path="/saved" children={<Saved />} />
            <Route path="/popular" children={<Popular />} />
            <Route path="/favorites" children={<Favorites />} />
            <Route path="/contact" children={<Contact />} />
            <Route path="/hotelPage/:id" children={<SelectedHotelPage />} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
