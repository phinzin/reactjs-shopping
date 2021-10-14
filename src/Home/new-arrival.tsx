import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default class NewArrivals extends React.Component<any, any>{
    state = {
        featuredProducts: []
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/products/new-arrivals`)
            .then(res => {
                const featuredProducts = res.data;
                this.setState({ featuredProducts });
            })
    }
    
    render() {
        return (
            <div>
                <h3 className="tittle-w3layouts my-lg-4 my-4">New Arrivals</h3>
                <div className="row">
                    {this.state.featuredProducts.map((product, i) => <div className="col-md-3 product-men women_two">
                        <div className="product-googles-info googles">
                            <div className="men-pro-item">
                                <div className="men-thumb-item">
                                    <img src={product["anh_dai_dien"]} className="img-fluid" alt="" />
                                    <div className="men-cart-pro">
                                        <div className="inner-men-cart-pro">
                                            <Link to={`/products/${product["code"]}`} className="link-product-add-cart">Quick View</Link>
                                        </div>
                                    </div>
                                    <span className="product-new-top">New</span>
                                </div>
                                <div className="item-info-product">
                                    <div className="info-product-price">
                                        <div className="grid_meta">
                                            <div className="product_price">
                                                <h4>
                                                    <a href="single.html">{product["name"]}</a>
                                                </h4>
                                                <div className="grid-price mt-2">
                                                    <span className="money ">${product["gia_canh_tranh"]}</span>
                                                </div>
                                            </div>
                                            <ul className="stars">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="googles single-item hvr-outline-out">
                                            <form action="#" method="post">
                                                <input type="hidden" name="cmd" value="_cart" />
                                                <input type="hidden" name="add" value="1" />
                                                <input type="hidden" name="googles_item" value="Farenheit" />
                                                <input type="hidden" name="amount" value="575.00" />
                                                <button type="submit" className="googles-cart pgoogles-cart">
                                                    <i className="fas fa-cart-plus"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>

            </div>
        )
    }
}
