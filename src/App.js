import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Blogs from "./components/Pages/Blogs";
import Donate from "./components/Pages/Donate";
import Impact from "./components/Pages/Impact";
import Gallery from "./components/Pages/Gallery";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/impact" component={Impact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/donate" component={Donate} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
