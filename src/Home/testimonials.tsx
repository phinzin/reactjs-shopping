import React from "react";

export default class Testimonials extends React.Component<any, any>{
    render() {
        return (
            <div className="testimonials p-lg-5 p-3 mt-4">
                <div className="row last-section">
                    <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                        <div className="mail-grid-icon text-center">
                            <i className="fas fa-gift"></i>
                        </div>
                        <div className="mail-grid-text-info">
                            <h3>Genuine Product</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                    <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                        <div className="mail-grid-icon text-center">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <div className="mail-grid-text-info">
                            <h3>Secure Products</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                    <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                        <div className="mail-grid-icon text-center">
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className="mail-grid-text-info">
                            <h3>Cash on Delivery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                    <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                        <div className="mail-grid-icon text-center">
                            <i className="fas fa-truck"></i>
                        </div>
                        <div className="mail-grid-text-info">
                            <h3>Easy Delivery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
