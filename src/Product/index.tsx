import React from "react";
import { Route, Switch } from "react-router-dom";
import SingleProduct from "./single-product";

export class Routes extends React.Component<any,any>{
    render(){
        return(
            <Switch>
                <Route path={`${this.props.path}/:code`} render={props=>(<SingleProduct {...props}/>)}/>
            </Switch>
        )
    }
}
export default Routes;