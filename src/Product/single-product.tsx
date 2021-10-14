import axios from "axios";
import React from "react";

export default class SingleProduct extends React.Component<any, any>{
    constructor(props:any){
        super(props)
        this.state={
            error:null,
            isLoaded:false,
            data:{}
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:8080/products/`+this.props.match.params.code)
        .then(result=>{
            this.setState({isLoaded:true,data:result.data})
        },error=>{
            this.setState({isLoaded:true,error})
        });
    }
    render() {
        return (
            <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
                <div className="container">
                    <div className="inner-sec-shop pt-lg-4 pt-3">
                        <div className="row">
                            <div className="col-lg-4 single-right-left ">
                                <div className="grid images_3_of_2">
                                    <div className="flexslider1">

                                        <ul className="slides">
                                            <li data-thumb="images/d2.jpg">
                                                <div className="thumb-image"> <img src="images/d2.jpg" data-imagezoom="true" className="img-fluid" alt=" " /> </div>
                                            </li>
                                            <li data-thumb="images/d1.jpg">
                                                <div className="thumb-image"> <img src="images/d1.jpg" data-imagezoom="true" className="img-fluid" alt=" " /> </div>
                                            </li>
                                            <li data-thumb="images/d3.jpg">
                                                <div className="thumb-image"> <img src="images/d3.jpg" data-imagezoom="true" className="img-fluid" alt=" " /> </div>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 single-right-left simpleCart_shelfItem">
                                <h3>{this.state.data.name}</h3>
                                <p><span className="item_price">${this.state.data.gia_canh_tranh}</span>
                                    <del>${this.state.data.gia_ban}</del>
                                </p>
                                <div className="rating1">
                                    <ul className="stars">
                                        <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                                <div className="color-quality">
                                    <div className="color-quality-right">
                                        <h5>Quality :</h5>
                                        <select id="country1" className="frm-field required sect">
                                            <option value="null">5 Qty</option>
                                            <option value="null">6 Qty</option>
                                            <option value="null">7 Qty</option>
                                            <option value="null">11 Qty</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="occasional">
                                    <h5>Types :</h5>
                                    <div className="colr ert">
                                        <label className="radio"><input type="radio" name="radio" checked={false} /><i></i> Irayz Butterfly(Black)</label>
                                    </div>
                                    <div className="colr">
                                        <label className="radio"><input type="radio" name="radio" /><i></i> Irayz Butterfly (Grey)</label>
                                    </div>
                                    <div className="colr">
                                        <label className="radio"><input type="radio" name="radio" /><i></i> Irayz Butterfly (white)</label>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="occasion-cart">
                                    <div className="googles single-item singlepage">
                                        <form>
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="googles_item" value="Farenheit" />
                                            <input type="hidden" name="amount" value="575.00" />
                                            <button type="submit" className="googles-cart pgoogles-cart">
                                                Add to Cart
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <ul className="footer-social text-left mt-lg-4 mt-3">
                                    <li>Share On : </li>
                                    <li className="mx-2">
                                        <a href="#">
                                            <span className="fab fa-facebook-f"></span>
                                        </a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="#">
                                            <span className="fab fa-twitter"></span>
                                        </a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="#">
                                            <span className="fab fa-google-plus-g"></span>
                                        </a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="#">
                                            <span className="fab fa-linkedin-in"></span>
                                        </a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="#">
                                            <span className="fas fa-rss"></span>
                                        </a>
                                    </li>

                                </ul>

                            </div>
                            <div className="clearfix"> </div>
                            <div className="responsive_tabs">
                                <div id="horizontalTab">
                                    <ul className="resp-tabs-list">
                                        <li>Description</li>
                                        <li>Reviews</li>
                                        <li>Information</li>
                                    </ul>
                                    <div className="resp-tabs-container">
                                        <div className="tab1">

                                            <div className="single_page">
                                                <h6>Lorem ipsum dolor sit amet</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                                    blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                                    ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                                                    magna aliqua.</p>
                                                <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                                    blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                                    ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                                                    magna aliqua.</p>
                                            </div>
                                        </div>
                                        <div className="tab2">

                                            <div className="single_page">
                                                <div className="bootstrap-tab-text-grids">
                                                    <div className="bootstrap-tab-text-grid">
                                                        <div className="bootstrap-tab-text-grid-left">
                                                            <img src="images/team1.jpg" alt=" " className="img-fluid" />
                                                        </div>
                                                        <div className="bootstrap-tab-text-grid-right">
                                                            <ul>
                                                                <li><a href="#">Admin</a></li>
                                                                <li><a href="#"><i className="fa fa-reply-all" aria-hidden="true"></i> Reply</a></li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget.Ut enim ad minima veniam,
                                                                quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                                                                autem vel eum iure reprehenderit.</p>
                                                        </div>
                                                        <div className="clearfix"> </div>
                                                    </div>
                                                    <div className="add-review">
                                                        <h4>add a review</h4>
                                                        <form action="#" method="post">
                                                            <input className="form-control" type="text" name="Name" placeholder="Enter your email..." required={false} />
                                                            <input className="form-control" type="email" name="Email" placeholder="Enter your email..." required={false} />
                                                            <textarea name="Message" required={false}></textarea>
                                                            <input type="submit" value="SEND" />
                                                        </form>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="tab3">

                                            <div className="single_page">
                                                <h6>Irayz Butterfly Sunglasses  (Black)</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                                    blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                                    ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                                                    magna aliqua.</p>
                                                <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                                    blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                                    ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                                                    magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
