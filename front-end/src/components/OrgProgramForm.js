import React, { Component } from "react";
import { Redirect } from "react-router";

import { Form, Input, Button, Col, Row } from "antd";
import firebase from "firebase";

const FormItem = Form.Item;
const { TextArea } = Input;

class OrgProgramForm extends Component {
    state = {
        name: "",
        url: "",
        description: "",
        keywords: [],
        location: "",
        toProgramList: false,
        ethnicity: "",
        minAge: 0,
        maxAge: 19
    };

    componentDidMount() {
        const getRef = firebase.database().ref("organizations");
        getRef.orderByKey().on("child_added", res => {
            const { match } = this.props;
            const orgId = match.params.orgId;
            if (res.key === orgId) {
                this.setState({ orgId: res.key });
                this.setState({ org: res.val() });
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const program = {
            email: this.state.email,
            name: this.state.name,
            url: this.state.url,
            organization: {
                id: this.state.orgId,
                name: this.state.org.name
            },
            location: this.state.location,
            keywords: this.state.keywords
        };

        const progRef = firebase.database().ref("programs");
        //saves org to db
        progRef
            .push(program)
            .then(data => {
                //update org
                //update program
                const programId = data.key;
                const orgRef = firebase
                    .database()
                    .ref(`organizations/${this.state.orgId}/programs`);
                orgRef
                    .push({ id: programId, name: this.state.name })
                    .then(data => {
                        console.log("working???");
                        console.log(data);
                        //redirect to ProgramsList
                        this.setState(() => ({
                            toProgramList: true
                        }));
                    });
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

    handleDescriptionChange = event => {
        this.setState({ description: event.target.value });
    };

    handleLocationChange = event => {
        this.setState({ location: event.target.value });
    };

    handleKeywordsChange = event => {
        this.setState({
            keywords: event.target.value.split(",").map(item => {
                return item.trim();
            })
        });
    };

    handleMinAgeChange = event => {
        this.setState({ minAge: event.target.value });
    };

    handleMaxAgeChange = event => {
        this.setState({ maxAge: event.target.value });
    };

    handleEthnicityChange = event => {
        this.setState({ ethnicity: event.target.value.trim().toLowerCase() });
    };

    keywordsToString = () => {
        if (this.state.keywords === null || this.state.keywords.length === 0) {
            return "";
        }

        return this.state.keywords.join(",");
    };

    render() {
        const keywordString = this.keywordsToString();

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 20
                }
            }
        };

        const formStyle = {
            padding: "10px"
        };

        const textareaStyle = {
            width: "100%"
        };
        if (this.state.toProgramList === true) {
            return <Redirect to={`/dashboard/${this.state.orgId}/programs`} />;
        }

        return (
            <Col span={12}>
                <Form style={formStyle} onSubmit={this.handleSubmit}>
                    <FormItem label="Program Name">
                        <Input
                            placeholder="my Program"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                    </FormItem>
                    <FormItem label="E-mail">
                        <Input
                            placeholder="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                    </FormItem>
                    <FormItem label="location">
                        <Input
                            placeholder="location"
                            id="location"
                            name="location"
                            value={this.state.location}
                            onChange={this.handleLocationChange}
                        />
                    </FormItem>
                    <FormItem label="Program Website">
                        <Input
                            placeholder="www.myorganization.ca/myprogram"
                            id="url"
                            name="url"
                            value={this.state.url}
                            onChange={this.handleUrlChange}
                        />
                    </FormItem>
                    <FormItem label="Program Description">
                        <TextArea
                            style={textareaStyle}
                            id="description"
                            name="description"
                            placeholder="program description"
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                        />
                    </FormItem>
                    <FormItem label="keywords (comma separated)">
                        <TextArea
                            col={7}
                            style={textareaStyle}
                            id="keywords"
                            name="keywords"
                            placeholder="food,sports"
                            value={keywordString}
                            onChange={this.handleKeywordsChange}
                        />
                    </FormItem>

                    <h2>Criteria</h2>
                    <Row>
                        <Col span={3}>
                            <FormItem label="minAge">
                                <Input
                                    type="number"
                                    placeholder=""
                                    id="minAge"
                                    name="minAge"
                                    value={this.state.minAge}
                                    onChange={this.handleMinAgeChange}
                                />
                            </FormItem>
                        </Col>
                        <Col span={3} offset={4}>
                            <FormItem label="maxAge">
                                <Input
                                    type="number"
                                    placeholder=""
                                    id="maxAge"
                                    name="maxAge"
                                    value={this.state.maxAge}
                                    onChange={this.handleMaxAgeChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <FormItem label="Ethnicity">
                        <Input
                            placeholder=""
                            id="ethnicity"
                            name="ethnicity"
                            value={this.state.ethnicity}
                            onChange={this.handleEthnicityChange}
                        />
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </FormItem>
                </Form>
            </Col>
        );
    }
}

export default OrgProgramForm;
