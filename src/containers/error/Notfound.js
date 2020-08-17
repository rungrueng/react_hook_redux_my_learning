import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Notfound extends Component {

    render(){
        return (
            <div>
                <Header />
                <div className="container mt-5 mb-5">
                    <h1 className="text-center">404 Not Found</h1>
                </div>
                <Footer company="Buncha" email="rungrueng.buncha@gmail.com" />
            </div>
        );
    }
}

export default Notfound;