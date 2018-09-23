import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import logo from "./../asset/logoexport.png";

const logoStyle = {
    float: "left",
    width: "126px",
    height: "33px",
    marginLeft: 50,
    marginTop: 20
};

export default class HeaderNav extends Component {
    render() {
        return (
            <header
                className="header-nav"
                style={{
                    position: "relative",
                    width: "100%",
                    height: "80px",
                    "align-items": "center",
                    "background-color": "#ffffff",
                    "box-shadow": "0 1px 4px 0 rgba(0, 0, 0, 0.25)",
                    backgroundColor: "#16ada5"
                }}
            >
                <img src={logo} style={logoStyle} />
                <Button
                    style={{
                        marginLeft: 20,
                        marginRight: 20,
                        color: "white",
                        float: "right",
                        backgroundColor: "#16ada5",
                        borderColor: "white",
                        marginTop: 20
                    }}
                >
                    <Link to="orgsignup">Register as organization</Link>
                </Button>
                <Button
                    style={{
                        marginLeft: 20,
                        marginRight: 20,
                        color: "white",
                        float: "right",
                        backgroundColor: "#16ada5",
                        borderColor: "#16ada5",
                        marginTop: 20
                    }}
                    type="primary"
                >
                    <Link to="dashboard">Sign-in</Link>
                </Button>
            </header>
        );
    }
}
