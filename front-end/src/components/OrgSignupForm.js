import React, { Component } from "react";
import { Redirect } from "react-router";

import { Form, Input, Button } from "antd";
import firebase from "firebase";

const FormItem = Form.Item;

class RegistrationForm extends Component {
    state = {
        email: "",
        name: "",
        url: "",
        craId: "",
        nonProfitId: "",
        toSignupSubmitted: false
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        const org = {
            email: this.state.email,
            name: this.state.name,
            url: this.state.url,
            ref: {
                craId: this.state.craId,
                nonProfitId: this.state.nonProfitId
            }
        };

        const ref = firebase.database().ref("organizations");
        //saves org to db
        ref.push(org)
            .then(data => {
                //redirect to SignupSubmitted
                this.setState(() => ({
                    orgId: data.key,
                    toSignupSubmitted: true
                }));
            })
            .catch(err => {
                console.log(err);
            });
    };

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

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 10
                }
            }
        };
        const buttonStyle = {
            width: "75%"
        };

        if (this.state.toSignupSubmitted === true) {
            return <Redirect to={`/OrgSignupSubmitted/${this.state.orgId}`} />;
        }

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="E-mail">
                    <Input
                        placeholder="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                </FormItem>
                <FormItem {...formItemLayout} label="Organization Name">
                    <Input
                        placeholder="my Organization"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </FormItem>
                <FormItem {...formItemLayout} label="Organization Website">
                    <Input
                        placeholder="www.myorganization.ca"
                        id="url"
                        name="url"
                        value={this.state.url}
                        onChange={this.handleUrlChange}
                    />
                </FormItem>
                <FormItem {...formItemLayout} label="CRA #">
                    <Input
                        placeholder=""
                        id="refId"
                        name="craId"
                        value={this.state.craId}
                        onChange={this.handleCraIdChange}
                    />
                </FormItem>
                <FormItem {...formItemLayout} label="Non-profit ID">
                    <Input placeholder="" id="refId" name="" />
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button
                        style={buttonStyle}
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Submit
                    </Button>
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button
                        style={buttonStyle}
                        type="primary"
                        htmlType="submit"
                        className="login-form-button yellow-btn"
                    >
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default RegistrationForm;
