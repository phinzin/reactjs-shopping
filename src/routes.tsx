import Home from "./Home/home";
import { Switch, Route } from "react-router-dom";
import { Routes as Products } from "./Product";
const Routes = () => (
    <div>
        <div className="view-routes">
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Products path="/products" />
            </Switch>
        </div>
    </div>
)
export default Routes;