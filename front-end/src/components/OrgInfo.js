import React, { Component } from "react";
import firebase from "firebase";

import { Form, Input, Avatar } from "antd";

const FormItem = Form.Item;

class OrgInfo extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: []
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(e);

        // this.props.form.validateFieldsAndScroll((err, values) => {
        //     if (!err) {
        //         console.log("Received values of form: ", values);
        //     }
        // });
    };

    componentDidMount() {
        console.log("Organization Signup Page Loaded");
        console.log(this.props);
        const getRef = firebase.database().ref("organizations");
        getRef.orderByKey().on("child_added", res => {
            console.log("get organization.........");
            const { match } = this.props;
            const orgId = match.params.orgId;
            if (res.key === orgId) {
                this.setState({ orgId: res.key });
                const org = res.val();
                this.setState(org);
                if (org.ref !== null) {
                    this.setState(org.ref);
                }
            }
        });
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };

    handleNameChange = event => {
        this.setState({ name: event.target.value });
    };

    handleUrlChange = event => {
        this.setState({ url: event.target.value });
    };

    handleCraIdChange = event => {
        this.setState({ craId: event.target.value });
    };
    handleNonProfitIdChange = event => {
        this.setState({ craId: event.target.value });
    };

    render() {
        const inputStyle = {
            width: "50%"
        };
        const formStyle = {
            padding: "10px"
        };
        return (
            <Form style={formStyle} onSubmit={this.handleSubmit}>
                <Avatar shape="square" size={64} icon="user" />

                <FormItem label="E-mail">
                    <Input
                        style={inputStyle}
                        placeholder="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                </FormItem>
                <FormItem label="Organization Name">
                    <Input
                        style={inputStyle}
                        placeholder="my Organization"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </FormItem>
                <FormItem label="Organization Website">
                    <Input
                        style={inputStyle}
                        placeholder="www.myorganization.ca"
                        id="url"
                        name="url"
                        value={this.state.url}
                        onChange={this.handleUrlChange}
                    />
                </FormItem>
                <FormItem label="CRA/Non-profit #">
                    <Input
                        style={inputStyle}
                        placeholder=""
                        id="refId"
                        name="craId"
                        value={this.state.craId}
                        onChange={this.handleCraIdChange}
                    />
                </FormItem>
                <FormItem label="Non-profit ID">
                    <Input
                        style={inputStyle}
                        placeholder=""
                        id="refId"
                        name="nonProfitId"
                        value={this.state.nonProfitId}
                        onChange={this.handleNonProfitIdChange}
                    />
                </FormItem>
            </Form>
        );
    }
}

export default OrgInfo;
