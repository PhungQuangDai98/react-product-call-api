import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Home from "./Page/Home";
import Container from "./Page/ProductPage";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      {/* Header */}
      <Header></Header>
      <div className="container">
        {/* Body */}
        <Switch>
          {/* Home */}
          <Route path="/Home" component={Home} exact />
          <Route path="/" component={Home} exact />
          {/* Container */}
          <Route path="/Product" component={Container} />
        </Switch>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
