import { applyMiddleware, combineReducers, compose, createStore, Store } from "redux";
import reduxThunk from "redux-thunk";
import cart,{ CartState } from "./contexts/cart.reducer";

export interface IRootState {
    readonly cart: CartState
}
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
export const state = combineReducers<IRootState>({
    cart
})
export const store:Store<IRootState> = createStore(
    state,
    composeEnhancers(
        applyMiddleware(reduxThunk)
    )
)