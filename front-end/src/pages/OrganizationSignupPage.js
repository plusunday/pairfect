import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "../App.css";
import firebase from "firebase";

import { Row, Col } from "antd";
import RegistrationForm from "../components/OrgSignupForm";

class OrgSignupPage extends Component {
    state = {
        data: {}
    };
    componentDidMount() {
        console.log("Organization Signup Page Loaded");
        // axios.get("/ibrokethis-9b72f/us-central1/helloWorld").then(res => {
        //   this.setState({ data: res });
        // });
        //example get from firebase database
        const getRef = firebase.database().ref("Ref/CRAId");
        getRef.on("value", res => {
            console.log(res.val());
        });
    }
    render() {
        console.log(this.state.data);
        return (
            <div className="Organization-Singup-Page">
                <header className="App-header">
                    <h1>Organization Signup Page</h1>
                    <nav>{/*<Link to="/Test">Test</Link>*/}</nav>
                </header>
                <Row>
                    <Col span={12}>
                        <h2>Sign up as an Organization</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in.
                        </p>
                    </Col>
                    <Col span={12}>
                        <RegistrationForm />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default OrgSignupPage;
