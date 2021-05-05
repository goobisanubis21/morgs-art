import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavPic from "./component/NavPic/NavPic";
import Nav from "./component/Nav/Nav";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/Contact"
import Cart from "./pages/Cart";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavPic />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/painting" component={Gallery}/>
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/contact" component={ContactMe}/>
            <Route exact path="/cart" component={Cart} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
