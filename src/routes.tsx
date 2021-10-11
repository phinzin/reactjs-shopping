import Home from "./Home/home";
import SingleProduct from "./Product/single-product";
import { Switch, Route, Link } from "react-router-dom";
const Routes = () => (
    <div>
        <div className="view-routes">
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path={"/single-product"}>
                    <SingleProduct />
                </Route>
            </Switch>
        </div>
    </div>
)
export default Routes;