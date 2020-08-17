import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid text-center mt-5 mb-5">
                <h3>Presented By Buncha Rungrueng</h3>
                <p className="title mt-4 mb-4 text-success" style={{fontSize:24}}>
                    Senior Full Stack Developer
                </p>
                <h4>ReactJS , Redux , NextJS ,CSS , SASS, Express , NodeJS</h4>
            </div>
            <Footer company="Buncha" email="rungrueng.buncha@gmail.com" />
        </div>
    );
}

export default About;