import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import logo from "../asset/group-57.png";
const { Content } = Layout;

export default class OrgSignupSubmitted extends Component {
    state = {
        orgId: ""
    };

    componentDidMount() {
        console.log(this.props);
        //const { match } = this.props;
        const id = this.props.match.params.orgId;
        if (id) {
            const organizationId = `/dashboard/${id}`;
            this.setState({ orgId: organizationId });
        }
    }

    render() {
        return (
            <div
                className="page-container"
                style={{
                    height: "100%",
                    width: "100%"
                }}
            >
                <HeaderNav />
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        background: "#fff",
                        height: "100%",
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        textAlign: "center"
                    }}
                >
                    <div>
                        <img src={logo} />
                    </div>
                    <div
                        style={{
                            margin: "30px 16px",
                            height: "auto",
                            width: "auto",
                            fontSize: "36px",
                            fontFamily: "Avenir",
                            color: "#16ada5",
                            marginLeft: "auto",
                            marginRight: "auto",
                            textAlign: "center"
                        }}
                    >
                        Thank you for your application!
                    </div>
                    <div
                        style={{
                            margin: "24px 16px",
                            height: "auto",
                            width: "500px",
                            fontSize: "16px",
                            color: "#4a4a4a",
                            fontFamily: "Avenir",
                            marginLeft: "auto",
                            marginRight: "auto",
                            textAlign: "center"
                        }}
                    >
                        <p>
                            Your application will be reviewed, and you will be
                            contacted shortly once your organization has been
                            approved.
                        </p>
                    </div>
                    <div
                        style={{
                            marginTop: "34px",
                            height: "45px",
                            width: "250px",
                            borderRadius: "22.5px",
                            background: "#16ada5",
                            marginLeft: "auto",
                            marginRight: "auto",
                            textAlign: "center"
                        }}
                    >
                        <Button
                            style={{
                                marginLeft: "0px",
                                color: "white",
                                backgroundColor: "#16ada5",
                                borderColor: "#16ada5",
                                paddingTop: "10px"
                            }}
                        >
                            <Link
                                to="/"
                                style={{
                                    height: "37px",
                                    width: "183px",
                                    fontSize: "16px",
                                    color: "#ffffff"
                                }}
                            >
                                Home
                            </Link>
                        </Button>
                    </div>
                    <div
                        style={{
                            marginTop: "16px",
                            height: "45px",
                            width: "250px",
                            borderRadius: "22.5px",
                            background: "#ffdb39",
                            marginLeft: "auto",
                            marginRight: "auto",
                            textAlign: "center"
                        }}
                    >
                        <Button
                            style={{
                                marginLeft: "0px",
                                color: "white",
                                backgroundColor: "#ffdb39",
                                borderColor: "#ffdb39",
                                paddingTop: "10px"
                            }}
                        >
                            <Link
                                to={this.state.orgId}
                                style={{
                                    height: "37px",
                                    width: "183px",
                                    fontSize: "16px",
                                    color: "#ffffff"
                                }}
                            >
                                Dash Board
                            </Link>
                        </Button>
                    </div>
                </Content>
            </div>
        );
    }
}
