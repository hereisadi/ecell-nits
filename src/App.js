import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import Footerconstant from "./components/Footerconstant";

const home = React.lazy(() => import("./components/Pages/home"));
const about = React.lazy(() => import("./components/Pages/about"));
const gallery = React.lazy(() => import("./components/Pages/gallery"));
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
              <Route path="/gallery" component={gallery} />
              <Route path="/team" component={team} />
              <Route path="/contact" component={contact} />
              <Route path="*">
                {" "}
                <NotFound />
              </Route>
            </Switch>
          </Scrolling>
          <ScrollToTop />
          <Footerconstant />
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}
export default App;
