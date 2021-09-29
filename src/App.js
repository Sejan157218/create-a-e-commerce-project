
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './Components/AllProducts/AllProducts';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Carts from './Components/Carts/Carts';
import ProductDetails from './Components/ProductDetails/ProductDetails'
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App container">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/home">
          <AllProducts></AllProducts>
          </Route>
          
          <Route exact path="/cart">
          <Carts></Carts>
          </Route>
          <Route exact path="/product/:id">
          <ProductDetails/>
          </Route>
          <Route exact path="/">
          <AllProducts></AllProducts>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
