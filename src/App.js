import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';


function App(){
return (
<Router>
          <div className="app-container">
            <Header />
            
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
            <Footer />
          </div>
        </Router>
)};

export default App;
