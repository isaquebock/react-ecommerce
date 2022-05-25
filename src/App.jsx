import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart";
import NewsletterPopup from "./components/NewsletterPopup";
import GlobalStyle from './globalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/produtos">
            <ProductList />
          </Route>
          <Route path="/produto/produto-teste">
            <Product />
          </Route>
          <Route path="/registrar">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/carrinho">
            <Cart />
          </Route>
        </Switch>

        <NewsletterPopup />
      </Router>
    </>
  );
};

export default App;