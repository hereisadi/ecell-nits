import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";

// import home from "./components/Pages/home";
// import about from "./components/Pages/about";
// import srijan from "./components/Pages/srijan";
// import team from "./components/team";
// import contact from "./components/Pages/contact";
// import NotFound from "./components/Pages/NotFound";
// import Navbarmenu from "./components/Menu/Navbarmenu";
// import ScrollToTop from "./components/ScrollToTop";
// import Footer from "./components/Footer";
// import Scrolling from "./components/Scrolling";

const home = React.lazy(() => import("./components/Pages/home"));
const about = React.lazy(() => import("./components/Pages/about"));
const srijan = React.lazy(() => import("./components/Pages/srijan"));
const team = React.lazy(() => import("./components/team"));
const Navbarmenu = React.lazy(() => import("./components/Menu/Navbarmenu"));
const ScrollToTop = React.lazy(() => import("./components/ScrollToTop"));
const Scrolling = React.lazy(() => import("./components/Scrolling"));
const Footer = React.lazy(() => import("./components/Footer"));
const NotFound = React.lazy(() => import("./components/Pages/NotFound"));
const contact = React.lazy(() => import("./components/Pages/contact"));

function App() {
  return (
    <div>
      <Router basename="/">
        <Suspense fallback={<Loading />}>
          <Navbarmenu />
          <Scrolling>
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/about" component={about} />
              <Route path="/srijan" component={srijan} />
              <Route path="/team" component={team} />
              <Route path="/contact" component={contact} />
              <Route path="*">
                {" "}
                <NotFound />
              </Route>
            </Switch>
          </Scrolling>
          <ScrollToTop />
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}
export default App;
