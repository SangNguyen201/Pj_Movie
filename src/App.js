import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import { HomTemPlate } from "./template/Hometemplate/HomTemPlate";
import HomePage from "./pages/Home/HomePage";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import CheckOutTemPlate from "./template/CheckOutTemplate/CheckOutTemPlate";
import CheckOut from "./pages/CheckOut/CheckOut";
import { Suspense, lazy } from "react";
import UserTemplate from "./template/UserTemplate/UserTeamplate";

const CheckOutTemPlateLazy = lazy(() =>
  import("./template/CheckOutTemplate/CheckOutTemPlate")
);

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomTemPlate path="/" exact Component={HomePage} />
        <HomTemPlate path="/home" exact Component={HomePage} />
        <HomTemPlate path="/contact" exact Component={Contact} />
        <HomTemPlate path="/detail/:id" exact Component={Detail} />
        <CheckOutTemPlate path="/checkout/:id" exact Component={CheckOut} />
        {/* <Suspense fallback={<h1>Loading...</h1>}>
          <CheckOutTemPlateLazy
            path="/checkout/:id"
            exact
            Component={CheckOut}
          />
        </Suspense> */}
        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />
        <HomTemPlate path="/News" exact Component={News} />
      </Switch>
    </Router>
  );
}

export default App;
