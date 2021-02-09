import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavPic from "./component/NavPic/NavPic";
import Nav from "./component/Nav/Nav";
import Header from "./component/Header/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/Contact"
import Cart from "./pages/Cart";
import Footer from "./component/Footer/Footer";
import Painting from "./pages/Painting";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavPic />
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/contact" component={ContactMe}/>
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/painting" component={Painting}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;