import React, { Component } from "react";
import { Button } from "antd";
import logo from "./../asset/logoexport.png";

export default class SearchHeaderBar extends Component {
    render() {
        const headerStyle = {
            backgroundColor: "#16ada5",
            width: "100%",
            height: "80px"
        };
        const logoStyle = {
            float: "left",
            width: "126px",
            height: "33px",
            marginLeft: 50,
            marginTop: 20
        };
        const buttonStyle = {
            color: "#ffffff",
            borderColor: "#ffffff",
            float: "right",
            marginTop: 20
        };
        const orgButtonStyle = {
            color: "#ffffff",
            borderColor: "#ffffff",
            float: "right",
            marginRight: 50,
            marginTop: 20
        };
        return (
            <div className="search-header-bar" style={headerStyle}>
                <img src={logo} style={logoStyle} />
                <Button type="primary" ghost style={orgButtonStyle}>
                    Sign In
                </Button>
                <Button type="primary" ghost style={buttonStyle}>
                    Sign-up as organization
                </Button>
            </div>
        );
    }
}
