import { Product } from "../Model/product"


export const ACTION_TYPES = {
    ADD_ITEM:'cart/ADD_ITEM',
    REMOVE_ITEM:'cart/REMOVE_ITEM',
    INCREASE:'cart/INCREASE',
    DECREASE:'cart/DECREASE',
    CHECKOUT:'cart/CHECKOUT',
    CLEAR:'cart/CLEAR'
}
export interface CartItem{
    id:String;
    name:String;
    code:String;
    gia_ban: number;
    gia_canh_tranh: number;
    anh_dai_dien:String;
    mo_ta_ngan_gon:String;
    mo_ta_chi_tiet:String;
    quantity: number
}
const Storage = (cartItems:any) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

export const sumItems = (cartItems: any[]) => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total: any, product: { quantity: any; }) => total + product.quantity, 0);
    let total = cartItems.reduce((total: number, product: { price: number; quantity: number; }) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}
const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')||"") : [];
const initialState = { cartItems: storage  as Array<CartItem>, ...sumItems(storage), checkout: false };

export type CartState  = Readonly <typeof initialState>
export default (state:CartState = initialState,action:any): CartState=>{
    switch(action.type){
        case `${ACTION_TYPES.ADD_ITEM}_PENDING`:
            return {
                ...state,
                cartItems: [],
            }
        case `${ACTION_TYPES.ADD_ITEM}`:
            if (!state.cartItems.find(item => item["id"] === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            } 

            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems],
            }
            case `${ACTION_TYPES.REMOVE_ITEM}`:
                return {
                    ...state,
                    ...sumItems(state.cartItems.filter(item => item.id !== action.payload.id)),
                    cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
                }
        case `${ACTION_TYPES.INCREASE}`:
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case `${ACTION_TYPES.DECREASE}`:
               state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
               return {
                   ...state,
                   ...sumItems(state.cartItems),
                   cartItems: [...state.cartItems]
               }
        case `${ACTION_TYPES.CHECKOUT}`:
            return {
                cartItems: [],
                checkout: true,
                ...sumItems([]),
            }
        case `${ACTION_TYPES.CLEAR}`:
            return {
                ...state,
                cartItems: [],
                ...sumItems([]),
            }
        default:
            return state
    }
}

export const addProduct = (product:Product) =>(dispatch:any)=>{
    dispatch(addProductCompleted(product))
}
const addProductCompleted = (product:Product) =>({
    type: `${ACTION_TYPES.ADD_ITEM}`,
    payload: {...product}
})

export const increase = (product:Product) =>(dispatch:any)=>{
    dispatch(increaseCompleted(product))
}
const increaseCompleted = (product:Product) =>({
    type: `${ACTION_TYPES.INCREASE}`,
    payload: {...product}
})