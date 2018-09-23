import React, { Component } from "react";
import firebase from "firebase";
import { List, Icon } from "antd";

class OrgProgramsList extends Component {
    state = {
        data: {},
        collapsed: false,
        orgName: "Weekend fuel bag",
        orgId: "",
        orgPrograms: []
    };

    componentDidMount() {
        const { match } = this.props;
        const orgId = match.params.orgId;
        this.setState({ orgId: orgId });

        const getRef = firebase.database().ref("programs");
        getRef
            .orderByChild("organization/id")
            .equalTo(orgId)
            .on("child_added", res => {
                const item = res.val();
                item.key = res.key;
                item.programPath = `/programs/${res.key}`;
                this.setState(state => {
                    return state.orgPrograms.push(item);
                });
            });
    }

    keywordsToString = keywords => {
        if (!keywords || keywords === null || keywords.length === 0) {
            return "";
        }

        return keywords.join(",");
    };

    render() {
        const containerStyle = {
            padding: "10px"
        };

        const listItemStyle = {
            height: "100px",
            margin: "10px",
            padding: "21px 30px 21px 30px",
            borderRadius: "5px",
            background: "#ffffff"
        };

        return (
            <div style={containerStyle}>
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.orgPrograms}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <a key={item.key} href={item.programPath}>
                                    <Icon type="right" theme="outlined" />
                                </a>
                            ]}
                            key={item.name}
                            style={listItemStyle}
                        >
                            <List.Item.Meta
                                title={item.name}
                                description={this.keywordsToString(
                                    item.keywords
                                )}
                            />
                            <div>
                                <a href={item.href}>{item.url}</a>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default OrgProgramsList;
