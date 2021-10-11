import React from "react";
import NewArrivals from "./new-arrival";
import Features from "./features";
import Testimonials from "./testimonials";
import Banner from "./banner";
export default class Home extends React.Component<any, any>{
    render() {
        return (
            <div>
                <Banner />
                <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
                    <div className="container-fluid">
                        <div className="inner-sec-shop px-lg-4 px-3">
                            <Testimonials />
                            <NewArrivals />
                            <Features />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}