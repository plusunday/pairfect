import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
// import axios from "axios";
import OrgProgramsList from "../components/OrgProgramsList";
import OrgInfo from "../components/OrgInfo";
import OrgProgramForm from "../components/OrgProgramForm";
import firebase from "firebase";

import { Layout, Menu, Icon, Col, Button } from "antd";
const { Header, Sider } = Layout;

class DashboardPage extends Component {
    state = {
        orgId: "",
        data: {},
        collapsed: false,
        orgName: "Weekend fuel bag"
    };

    handleClick = e => {
        // change the page component in here when we click on one of the nav menu headers
        console.log("click ", e);
        //if program manager selected -> route to OrgProgramsList
    };

    componentDidMount() {
        const { match } = this.props;
        const orgId = match.params.orgId;
        const getRef = firebase.database().ref("organizations");
        this.setState({ orgId: match.params.orgId });
        getRef.orderByKey().on("child_added", res => {
            if (res.key === orgId) {
                this.setState(res.val());
            }
        });
    }

    render() {
        const buttonStyle = {
            borderRadius: "25px",
            backgroundColor: "#16ada5",
            borderColor: "#16ada5",
            color: "#ffffff",
            padding: "5px 25px 5px 25px",
            fontSize: "14px"
        };
        return (
            <div style={{ height: "100%" }} className="Dashboard-Page">
                <Layout style={{ height: "100%" }}>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div style={{ width: "100%" }}>
                            <Menu
                                style={{ marginTop: "110px" }}
                                mode="inline"
                                theme="dark"
                                onClick={this.handleClick}
                            >
                                <Menu.Item key="1">
                                    <Icon type="pie-chart" />
                                    <span>
                                        <Link
                                            to={`/dashboard/${
                                                this.state.orgId
                                            }`}
                                            style={{ color: "#ffffff" }}
                                        >
                                            Organization Info
                                        </Link>
                                    </span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="table" />
                                    <span>
                                        <Link
                                            to={`/dashboard/${
                                                this.state.orgId
                                            }/programs`}
                                            style={{ color: "#ffffff" }}
                                        >
                                            Program Manager
                                        </Link>
                                    </span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="desktop" />
                                    <span>Account Settings</span>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Icon type="logout" />
                                    <span>Logout</span>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Sider>
                    <Layout>
                        <Header
                            style={{
                                height: "80px",
                                background: "#fff",
                                padding: 0,
                                boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.25)"
                            }}
                        >
                            <Col span={12}>
                                <h1 style={{ marginLeft: "30px" }}>
                                    {this.state.name}
                                </h1>
                            </Col>
                            <Col span={4} offset={8}>
                                <a
                                    href={`/dashboard/${
                                        this.state.orgId
                                    }/programs/add`}
                                >
                                    <Button style={buttonStyle}>
                                        Add New Program <Icon type="plus" />
                                    </Button>
                                </a>
                            </Col>
                        </Header>
                        <Switch>
                            <Route
                                exact
                                path={`/dashboard/:orgId`}
                                component={OrgInfo}
                            />
                            <Route
                                exact
                                path={`/dashboard/:orgId/programs`}
                                component={OrgProgramsList}
                            />
                            <Route
                                exact
                                path={`/dashboard/:orgId/programs/add`}
                                component={OrgProgramForm}
                            />
                        </Switch>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default DashboardPage;
