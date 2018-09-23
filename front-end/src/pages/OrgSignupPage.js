import React, { Component } from "react";

import { Row, Col } from "antd";
import RegistrationForm from "../components/OrgSignupForm";
import HeaderNav from "../components/HeaderNav";

class OrgSignupPage extends Component {
    state = {};
    componentDidMount() {}
    render() {
        return (
            <div className="Organization-Singup-Page">
                <HeaderNav />
                <div
                    style={{
                        width: "70%",
                        marginTop: "110px",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <Row>
                        <Col span={10}>
                            <div
                                style={{
                                    marginRight: "16px",
                                    paddingRight: "16px",
                                    fontFamily: "Avenir"
                                }}
                            >
                                <h1
                                    style={{
                                        color: "#16ada5"
                                    }}
                                >
                                    Register as an Organization
                                </h1>
                                <p>
                                    Thank you for your interest in being part of
                                    Pairfect, the platform for helping
                                    connecting those in need with the right
                                    types of support programs and scholarships
                                    for them. To complete your registration, we
                                    will require some basic information about
                                    your organization for verification.
                                </p>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div
                                style={{
                                    borderLeft: "solid 1px #9b9b9b",
                                    paddingLeft: "24px"
                                }}
                            >
                                <RegistrationForm data={this.state} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default OrgSignupPage;
